import FoodCard from '@/components/cards/FoodCard';
import React from 'react';
import CartItems from './CartItems';
import InputSearch from '@/components/InputSearch';

const getFoods = async (search) => {
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`);
    
    const data = await res.json();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return data.foods || [];
}

const FoodsPage =async ({ searchParams }) => {
    const { search = "" } = await searchParams;
    
    const foods = await getFoods(search);
    return (
        <div>
           <h2 className="text-4xl font-bold">Total Foods <span className="text-yellow-500">{foods.length}</span> Found</h2> 

           <InputSearch></InputSearch>

        <div className='flex gap-4 mt-5'>

           <div className="flex-1 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-5">
            {
                foods.map((food) => (
                    <FoodCard key={food.id} item={food}></FoodCard>
                ))
            }
           </div>

            <div className='w-[250px] border-2 rounded-2xl'>
                <h2 className="text-2xl font-bold text-center py-2">Cart Items</h2>
                <hr />
                <CartItems></CartItems>
            </div>

        </div>
        </div>
    );
};

export default FoodsPage;