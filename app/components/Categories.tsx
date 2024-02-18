import {
  productsSlice,
  selectCategories,
  setCategories,
} from "@/lib/redux/slices/productsSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

export default function Categories() {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  const options = [
    { value: `men's clothing`, label: `mens's clothing` },
    { value: `women's clothing`, label: `women's clothing` },
    { value: `jewelery`, label: `jewelery` },
    { value: `electronics`, label: `electronics` },
  ];

  return (
    <div className="mt-4">
      <label className="text-white font-bold"> Categories: </label>
      <Select
        className="mt-1"
        isMulti
        options={options}
        defaultValue={categories}
        value={categories}
        onChange={(value: any) => dispatch<any>(setCategories(value))}
      />
    </div>
  );
}
