"use client";

import { ReduxState } from "@/lib/redux";
import { selectItem } from "@/lib/redux/slices/productsSlice";
import { useSelector } from "react-redux";
import Image from "next/image";
import Rating from "@/app/components/Rating";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const item = useSelector((state: ReduxState) =>
    selectItem(state, Number(slug))
  );

  if (!item) return <div>Product not found</div>;
  return (
    <div className="w-full flex justify-center mr-[256px]">
      <div className="bg-white relative m-4 w-[800px] h-[800px] overflow-hidden   rounded-xl drop-shadow-lg relative">
        <div className="flex flex-col p-8  ">
          <Image
            className="h-[400px] mx-auto w-fit "
            src={item.image}
            alt={item.title}
            width={500}
            height={500}
          />
          <div className="font-bold text-lg w-full  mt-10  h-8  ">
            {" "}
            {item.title}{" "}
          </div>
          <div className="text-sm text-gray-500 w-full   h-fit">
            {" "}
            {item.description}{" "}
          </div>
          <div className="font-gray-900 font-bold text-3xl mt-8 h-8 mx-auto">
            {" "}
            {item.price} ${" "}
          </div>
          <div className="absolute right-8 bottom-8">
            <Rating rating={item.rating.rate} numReviews={item.rating.count} />
          </div>
        </div>
      </div>
    </div>
  );
}
