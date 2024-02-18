import { selectRating, setRating } from "@/lib/redux/slices/productsSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

export default function RatingFilter() {
  const rating = useSelector(selectRating);
  const dispatch = useDispatch();

  const options: any = [
    { value: 1, label: "1+" },
    { value: 2, label: "2+" },
    { value: 3, label: "3+" },
    { value: 4, label: "4+" },
    { value: 5, label: "5" },
  ];
  return (
    <div className="mt-8">
      <div className="flex">
        <label className="text-white font-bold"> Rating: </label>
        <button
          onClick={() => dispatch(setRating(null))}
          className="text-white ml-auto border-2 px-2 rounded-lg hover:cursor-pointer hover:bg-white hover:text-black transition"
        >
          {" "}
          Reset{" "}
        </button>
      </div>
      <Select
        className="mt-1"
        options={options}
        defaultValue={rating}
        value={rating}
        onChange={(value) => dispatch<any>(setRating(value))}
      />
    </div>
  );
}
