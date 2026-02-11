import React from "react";
import FoodCard from "@/components/cards/FoodCard";
import CartItems from "./CartItems";
import InputSearch from "@/components/InputSearch";

// Separate data fetching for better organization
const getFoods = async (search) => {
  const url = `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`;
  
  const res = await fetch(url, {
    next: { revalidate: 10 },
  });

  if (!res.ok) return [];

  const data = await res.json();
  // Artificial delay - keep only if you want to test your Loading skeletons
  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  return data.foods || [];
};

export const metadata = {
  title: "All Foods | Taxi Kitchen",
  description: "Browse and order your favorite foods quickly.",
};

const FoodsPage = async ({ searchParams }) => {
  const { search = "" } = await searchParams;
  const foods = await getFoods(search);

  return (
    <main className="max-w-7xl mx-auto p-4 md:p-6">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Total Foods <span className="text-yellow-500">{foods.length}</span> Found
          </h1>
          <p className="text-muted-foreground mt-1">Discover the best meals for your journey.</p>
        </div>
        <div className="w-full md:w-72">
          <InputSearch />
        </div>
      </header>

      {/* Main Content Layout */}
      <section className="flex flex-col lg:flex-row gap-8">
        
        {/* Food Grid */}
        <div className="flex-1">
          {foods.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {foods.map((food) => (
                <FoodCard key={food.id} item={food} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border-2 border-dashed rounded-3xl">
              <p className="text-xl text-gray-500">No foods found matching "{search}"</p>
            </div>
          )}
        </div>

        {/* Sidebar Cart */}
        <aside className="w-full lg:w-[320px]">
          <div className="sticky top-6 border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden bg-card">
            <div className="bg-gray-50 dark:bg-gray-900 px-4 py-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                🛒 Cart Items
              </h2>
            </div>
            <div className="p-4">
              <CartItems />
            </div>
          </div>
        </aside>

      </section>
    </main>
  );
};

export default FoodsPage;