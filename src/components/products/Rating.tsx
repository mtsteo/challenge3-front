import React from "react";
import star from "../../assets/icons/star.svg";

export default function Rating() {
  return (
    <div className="flex flex-row gap-4 items-center">
      <div className="flex flex-row gap-1">
        {Array.from({ length: 5 }, () => (
          <button key={Math.floor(Math.random() * 999)}>
            <img src={star} alt=""/>
          </button>
        ))}
      </div>
      <div className="border-l-2 w-40 flex justify-center items-center">
        <h1 className="text-sm text-gray-400"> 5 Costumer review</h1>
      </div>
    </div>
  );
}
