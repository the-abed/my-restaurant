import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[70vh] w-full ">
      {/* Background Image */}
      <Image
        src="/images/food-banner.jpg" // put image in public/images
        alt="Restaurant Food"
        fill
        className="object-cover rounded-2xl"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-yellow-400">My Restaurant</span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl mb-6 text-gray-200">
          Delicious food, fresh ingredients, and unforgettable taste.
        </p>

        <div className="flex gap-4">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
            Order Now
          </button>
          <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
