import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-black p-3 flex items-center h-[60px] fixed top-0 w-full z-50 ">
      <div className="bg-white w-8 h-8 rounded-lg"></div>
      <Link href="/" className="text-white font-bold text-lg ml-2">
        {" "}
        Logo{" "}
      </Link>
      <div className="text-white absolute left-1/2 -translate-x-1/2">
        E-Commerce Test Case
      </div>
    </div>
  );
}
