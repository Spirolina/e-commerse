import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export default function Rating({ rating, numReviews }: any) {
  return (
    <div>
      <div className="flex items-center flex-col mt-4">
        <div className="flex items-center">
          <span className="text-yellow-400">
            {rating >= 1 ? (
              <FaStar size={28} />
            ) : rating >= 0.5 ? (
              <FaStarHalfAlt size={28} />
            ) : (
              <FaRegStar size={28} />
            )}
          </span>
          <span className="text-yellow-400">
            {rating >= 2 ? (
              <FaStar size={28} />
            ) : rating >= 1.5 ? (
              <FaStarHalfAlt size={28} />
            ) : (
              <FaRegStar size={28} />
            )}
          </span>
          <span className="text-yellow-400">
            {rating >= 3 ? (
              <FaStar size={28} />
            ) : rating >= 2.5 ? (
              <FaStarHalfAlt size={28} />
            ) : (
              <FaRegStar size={28} />
            )}
          </span>
          <span className="text-yellow-400">
            {rating >= 4 ? (
              <FaStar size={28} />
            ) : rating >= 3.5 ? (
              <FaStarHalfAlt size={28} />
            ) : (
              <FaRegStar size={28} />
            )}
          </span>
          <span className="text-yellow-400">
            {rating >= 5 ? (
              <FaStar size={28} />
            ) : rating >= 4.5 ? (
              <FaStarHalfAlt size={28} />
            ) : (
              <FaRegStar size={28} />
            )}
          </span>
        </div>
        <span className="ml-2">{numReviews + " reviews"}</span>
      </div>
    </div>
  );
}
