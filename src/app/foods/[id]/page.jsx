import React from "react";

const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
  );
  const data = await res.json();
  // Artificial delay as per your original code
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data.details;
};

const FoodDetails = async ({ params }) => {
  const { id } = await params;
  const food = await getSingleFood(id);

  if (!food) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl font-semibold text-red-500">Food not found</p>
      </div>
    );
  }

  // Convert standard YouTube URL to Embed URL
  const embedUrl = food.video?.replace("watch?v=", "embed/");

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Side: Image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
          <img
            src={food.foodImg}
            alt={food.title}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Side: Details */}
        <div className="space-y-6">
          <div>
            <div className="flex gap-2 mb-3">
              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                {food.category}
              </span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                {food.area}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              {food.title}
            </h1>
            <p className="text-gray-500 text-lg">Product ID: #{food.id}</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-green-600">
              ${food.price}
            </span>
            <span className="text-gray-400 line-through text-lg">$450</span>
            <span className="bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold animate-pulse">
              SAVE 30%
            </span>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Experience the authentic taste of {food.area} cuisine with our
            signature {food.title}. Prepared with fresh ingredients and
            traditional spices to bring you a delightful culinary experience.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-bold transition-colors shadow-lg shadow-orange-200 active:scale-95">
              Add to Cart
            </button>
            <button className="border-2 border-gray-200 hover:border-orange-500 hover:text-orange-500 px-8 py-3 rounded-xl font-bold transition-all active:scale-95">
              Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section: Video Recipe */}
      {food.video && (
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-orange-500 rounded-full inline-block"></span>
            How to prepare
          </h3>
          <div className="relative w-full overflow-hidden rounded-3xl shadow-xl aspect-video bg-gray-100">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={embedUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodDetails;
