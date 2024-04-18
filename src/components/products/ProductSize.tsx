import React from "react";

export default function ProductSize(props: any) {
  return (
    <div>
      <h1 className="text-gray-400">Size</h1>
      <div className=" flex flex-row gap-4">
        {Array.from(["L", "XL", "SL"], (item) => (
          <button key={Math.floor(Math.random() * 999)} className="flex justify-center items-center bg-filterBg w-10 h-10 rounded-lg font-medium">
            {props.size}
          </button>
        ))}
      </div>
    </div>
  );
}
