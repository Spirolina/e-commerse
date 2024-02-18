"use client";
import React, { useEffect } from "react";
import { useDispatch } from "@/lib/redux";
import { useSelector } from "react-redux";
import {
  getProducts,
  selectFilteredItems,
  selectItems,
  selectStatus,
} from "@/lib/redux/slices/productsSlice";
import Product from "./Product";
import Loading from "../Loading";

export default function Products() {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const items = useSelector(selectItems);
  const filteredItems = useSelector(selectFilteredItems);
  const isFiltered = filteredItems !== null;

  useEffect(() => {
    if (status === "idle") {
      dispatch(getProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "failed") {
    return <div>Failed to load products</div>;
  }

  if (!isFiltered) {
    return (
      <div className="flex flex-wrap justify-center bg-gray-200 ml-[256px] ">
        {items.map((item) => (
          <Product key={item.id} product={item} />
        ))}
      </div>
    );
  }

  if (filteredItems?.length === 0) {
    return (
      <div className="flex justify-center bg-gray-200 items-center h-[calc(100vh-60px)] w-full">
        <div className="font-bold text-xl">No items found :(</div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center bg-gray-200 ml-[256px] w-full ">
      {filteredItems?.map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </div>
  );
}
