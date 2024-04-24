import React from "react";

export default function ProductColor(props: any) {
  return (
    <div>
      <h1>color</h1>
      <div className=" flex flex-row gap-4">
        {Array.from(["bg-red-500", "bg-green-500", "bg-yellow-500"], (item) => (
          <button key={Math.floor(Math.random() * 999)} className={`rounded-full ${item} w-10 h-10`}></button>
        ))}
      </div>
    </div>
  );
}
