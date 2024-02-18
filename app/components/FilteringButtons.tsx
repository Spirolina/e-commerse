import { useSelector } from "@/lib/redux";
import {
  filterItems,
  resetFilters,
  selectFrom,
  selectTo,
} from "@/lib/redux/slices/productsSlice";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";

export default function FilteringButtons() {
  const dispatch = useDispatch();
  const from = useSelector(selectFrom);
  const to = useSelector(selectTo);

  const onFilterClick = (e: any) => {
    e.preventDefault();
    if (from && to) {
      if (from > to) {
        return toast.error("From price cannot be greater than to price");
      }
    }

    dispatch(filterItems());
  };

  const onResetClick = (e: any) => {
    e.preventDefault();
    dispatch(resetFilters());
  };

  return (
    <div className="flex text-white w-full mt-6">
      <button
        onClick={onFilterClick}
        className="w-1/2 bg-[#0ba6ff] p-2 font-bold rounded-l-lg hover:bg-[#5fb9ed] transition"
      >
        {" "}
        Filter{" "}
      </button>
      <button
        onClick={onResetClick}
        className="w-1/2 bg-[#f45900] p-2 font-bold rounded-r-lg hover:bg-[#ea8247] transition"
      >
        {" "}
        Reset{" "}
      </button>
      <Toaster />
    </div>
  );
}
