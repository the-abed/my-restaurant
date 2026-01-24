import Link from "next/link";
import React from "react";
import logo from "../../public/logo.png";

const Navbar = () => {
  return (
    <div className="px-5 py-4 flex justify-between gap-5 bg-stone-900">
      <Link href="/"><span className="text-2xl font-bold text-yellow-500">🍟My Restaurant🧋</span></Link>
      <ul className="flex gap-4">
        <Link href="/foods">
          <li className="btn font-semibold">Foods</li>
        </Link>
        <Link href="/reviews">
          <li className="btn font-semibold">Reviews</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
