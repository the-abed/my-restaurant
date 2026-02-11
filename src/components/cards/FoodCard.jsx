import Link from "next/link";
import Image from "next/image";
import CartButton from "../buttons/CartButton";
import style from "@/app/foods/foods.module.css";

export default function FoodCard({ item: food }) {
  const { title, foodImg, category, price, id } = food;

  return (
    <div className={`group flex flex-col overflow-hidden rounded-2xl border border-gray-100  p-3 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${style.bgred}`}>
      
      {/* Image Container with Aspect Ratio control */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-100">
        <Image 
          src={foodImg} 
          alt={title} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          priority={false}
        />
        {/* Category Badge Overlay */}
        <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-md px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md shadow-sm">
          {category}
        </span>
      </div>

      <div className="flex flex-col flex-1 mt-4">
        <div className="flex justify-between items-start gap-2">
          <h2 className="text-lg font-bold leading-tight line-clamp-1">{title}</h2>
          <span className="text-lg font-extrabold text-green-600 whitespace-nowrap">
            {price}৳
          </span>
        </div>
        
        <p className="text-sm text-gray-400 mt-1 capitalize">{category}</p>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 mt-auto pt-4">
          <div className="flex-1">
             <CartButton food={food} />
          </div>

          <Link
            href={`/foods/${id}`}
            className="flex-1 text-center py-2.5 px-4 text-sm font-medium border border-gray-200 rounded-xl  transition-colors"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}