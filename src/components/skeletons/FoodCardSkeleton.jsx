const FoodCardSkeleton = () => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden border border-gray-100 bg-white">
      {/* Image Placeholder */}
      <div className="relative h-48 w-full bg-gray-200 animate-pulse" />

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          {/* Title bar */}
          <div className="h-5 w-1/2 bg-gray-200 rounded animate-pulse" />
          {/* Price bar */}
          <div className="h-5 w-12 bg-gray-200 rounded animate-pulse" />
        </div>
        
        {/* Description bars */}
        <div className="space-y-2 mb-5">
          <div className="h-3 w-full bg-gray-100 rounded animate-pulse" />
          <div className="h-3 w-2/3 bg-gray-100 rounded animate-pulse" />
        </div>

        {/* Button bars */}
        <div className="flex gap-2">
          <div className="h-10 flex-[2] bg-gray-200 rounded-lg animate-pulse" />
          <div className="h-10 flex-1 bg-gray-100 rounded-lg animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;