import { selectSortBy, setSortBy } from "@/lib/redux/slices/productsSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

export default function Sort() {
  const dispatch = useDispatch();
  const sortBy = useSelector(selectSortBy);

  const options = [
    { value: `price`, label: `Price` },
    { value: `rating`, label: `Rating` },
    { value: `review`, label: `Review` },
  ];

  return (
    <div className="mt-8">
      <div className="flex">
        <label className="text-white font-bold"> Sort by: </label>
        <button
          onClick={() => dispatch(setSortBy(null))}
          className="text-white ml-auto border-2 px-2 rounded-lg hover:cursor-pointer hover:bg-white hover:text-black transition"
        >
          {" "}
          Reset{" "}
        </button>
      </div>

      <Select
        className="mt-1"
        options={options}
        defaultValue={sortBy}
        value={sortBy}
        onChange={(value) => dispatch<any>(setSortBy(value))}
      />
    </div>
  );
}
