import Image from 'next/image';

const FoodCard = ({ item }) => {
  const { title, foodImg, price, category } = item;

  return (
    <div className="group max-w-sm rounded-xl overflow-hidden shadow-sm bg-white border border-gray-100 hover:shadow-md transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-48 w-full">
        <Image 
          src={foodImg} 
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-white/80 backdrop-blur-md text-xs font-bold px-2 py-1 rounded shadow-sm text-gray-700">
            {category}
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-gray-900 truncate flex-1 mr-2">{title}</h3>
          <p className="text-orange-600 font-bold">${price}</p>
        </div>
        
        <p className="text-gray-500 text-sm line-clamp-2 mb-4">
          Freshly prepared {category.toLowerCase()} delivered straight to your door.
        </p>

        <div className="flex gap-2">
          <button className="flex-[2] bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold py-2.5 rounded-lg transition-colors">
            Add to Cart
          </button>
          <button className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-600 text-sm font-semibold py-2.5 rounded-lg border border-gray-200 transition-colors">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;