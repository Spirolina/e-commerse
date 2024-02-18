import {
  selectFrom,
  selectTo,
  setFrom,
  setTo,
} from "@/lib/redux/slices/productsSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Price() {
  const from = useSelector(selectFrom);
  const to = useSelector(selectTo);

  const dispatch = useDispatch();

  const handleFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) >= 0)
      dispatch<any>(setFrom(Number(e.target.value)));
  };

  const handleTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) >= 0)
      dispatch<any>(setTo(Number(e.target.value)));
  };

  return (
    <div className="mt-8">
      <div className="flex">
        <label className="text-white font-bold"> Price: </label>
        <button
          onClick={() => {
            dispatch(setFrom(null));
            dispatch(setTo(null));
          }}
          className="text-white ml-auto border-2 px-2 rounded-lg hover:cursor-pointer hover:bg-white hover:text-black transition"
        >
          {" "}
          Reset{" "}
        </button>
      </div>
      <div className="flex w-full mt-1">
        <input
          className="w-1/2 p-2 rounded-l-lg border-r-2"
          value={from || ""}
          onChange={handleFrom}
          type="number"
          placeholder="From"
        />
        <input
          className="w-1/2 p-2 rounded-r-lg border-l-2"
          value={to || ""}
          onChange={handleTo}
          placeholder="To"
          type="number"
        />
      </div>
    </div>
  );
}
