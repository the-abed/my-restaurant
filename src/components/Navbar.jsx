import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="px-5 py-4 flex justify-between gap-5 bg-stone-800">
      <Link href="/"><span className="text-2xl font-bold text-yellow-500">Restaurant</span></Link>
      <ul className="flex gap-5">
        <Link href="/foods">
          <li className="btn">Foods</li>
        </Link>
        <Link href="/reviews">
          <li className="btn">Reviews</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
