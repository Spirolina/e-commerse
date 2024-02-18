"use client";
import React from "react";
import Categories from "./Categories";
import Price from "./Price";
import RatingFilter from "./RatingFilter";
import Sort from "./Sort";
import FilteringButtons from "./FilteringButtons";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
  const pathName = usePathname();

  if (pathName.split("/")[1] === "products") {
    return (
      <Link
        className="bg-black h-fit text-white w-[200px] ml-4 mt-16 p-2 flex justify-center rounded-lg font-bold drop-shadow-lg hover:bg-gray-800 transition"
        href="/"
      >
        {" "}
        Back to Store{" "}
      </Link>
    );
  }

  return (
    <div className="bg-black w-[256px]  h-[calc(100vh-90px)] m-3 rounded-xl fixed z-50  drop-shadow-xl ">
      <div className="font-bold text-center bg-[#0C81A0]  p-2 rounded-t-lg box-shadow-lg text-white text-xl ">
        {" "}
        Filtering{" "}
      </div>
      <div className="p-3">
        <Categories />
        <Price />
        <RatingFilter />
        <Sort />
        <FilteringButtons />
      </div>
    </div>
  );
}
