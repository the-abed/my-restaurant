import Link from 'next/link';
import React from 'react';

const FoodCard = ({ item }) => {
  const { title, foodImg, price, category } = item;

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200 transition-transform hover:scale-[1.02]">
      {/* Food Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={foodImg} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700 shadow-sm">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800 leading-tight">
            {title}
          </h3>
          <span className="text-lg font-extrabold text-green-600">
            ${price}
          </span>
        </div>

        <p className="text-gray-500 text-sm mb-6">
          Delicious {category.toLowerCase()} dish prepared with fresh ingredients.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
            Add to Cart
          </button>
          <Link href={`/foods/${item.id}`} className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors border border-gray-300 text-center">
          View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;