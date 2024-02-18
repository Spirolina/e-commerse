import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-wrap justify-center bg-gray-200 ml-[256px] w-full ">
      {[1, 2, 3, 4].map((item) => (
        <div className="bg-white relative animate-pulse  m-4 w-[300px] h-[500px] overflow-hidden   rounded-xl drop-shadow-lg">
          <div className="flex flex-col p-8 items-center animate-pulse ">
            <div className="font-bold text-lg w-full text-center mt-10  h-32 bg-gray-400 w-32 ">
              {" "}
            </div>
            <div className="text-sm text-gray-500 w-full text-center mt-4  h-12 bg-gray-400">
              {" "}
            </div>
            <div className="font-gray-900 font-bold text-2xl mt-8 h-8 bg-gray-400 w-full">
              {" "}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
