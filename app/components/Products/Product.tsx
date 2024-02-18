import React from "react";
import Image from "next/image";
import Rating from "../Rating";
import Link from "next/link";

const clipDescription = (description: string) => {
  return description.length > 100
    ? description.substring(0, 100) + "..."
    : description;
};

const clipTitle = (title: string) => {
  return title.length > 50 ? title.substring(0, 50) + "..." : title;
};

export default function Product({ product }: any) {
  return (
    <div className="bg-white relative m-4 w-[300px] h-[500px] overflow-hidden   rounded-xl drop-shadow-lg">
      <div className="flex flex-col p-8 items-center ">
        <Image
          className="h-[120px] w-auto"
          src={product.image}
          alt={product.title}
          width={100}
          height={100}
        />
        <div className="font-bold text-lg w-full text-center mt-10  h-16 ">
          {" "}
          {clipTitle(product.title)}{" "}
        </div>
        <div className="text-sm text-gray-500 w-full text-center mt-4  h-12">
          {" "}
          {clipDescription(product.description)}{" "}
        </div>
        <div className="font-gray-900 font-bold text-2xl mt-8 h-8">
          {" "}
          {product.price} ${" "}
        </div>

        <Rating
          rating={product.rating.rate}
          numReviews={product.rating.count}
        />
      </div>

      <Link
        href={`/products/${product.id}`}
        className="bg-[#0C81A0] 
        font-bold
        hover:bg-[#359db7] transition  
        h-12 absolute w-full bottom-0 right-0 
        flex justify-center items-center text-white"
      >
        {" "}
        View{" "}
      </Link>
    </div>
  );
}
