import React from "react";

export default function ProductCard() {
  return (
    <div className="bg-cardBg w-fit">
      <div className="relative">
        <img src="https://i.postimg.cc/Qtc09hjv/mesa.png" alt="" />
        <div className=" absolute right-5 top-5 flex items-center justify-center rounded-full w-12 h-12 bg-discountBg text-white font-medium">
          {" "}
          -30%
        </div>
      </div>
      <div className=" flex flex-col m-5 gap-2">
        <h1 className="font-semibold text-2xl">Syltherine</h1>
        <h1 className="text-gray-400">Stylish cafe chair</h1>
        <div className="flex flex-row gap-4 items-center justify-center">
          <h1 className="text-xl font-semibold">R$ 2.500.000</h1>
          <h1 className="line-through text-gray-300">R$ 3.500.000</h1>
        </div>
      </div>
    </div>
  );
}
