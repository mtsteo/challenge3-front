import React from "react";
import facebook from "../../assets/icons/facebook.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import twitter from "../../assets/icons/twitter.svg";

export default function ActionOptions() {
  return (
    <div className="flex flex-row gap-5 mt-4">
      <div className="flex flex-row justify-between p-4 items-center gap-4 border-[2px] border-gray-400 rounded-lg w-36 h-16">
        <button>-</button>
        <h1>1</h1>
        <button>+</button>
      </div>
      <button className="w-60 border-[2px] border-black rounded-2xl font-medium">
        Add to cart
      </button>
      <button className="w-60 border-[2px] border-black rounded-2xl font-medium">
        {" "}
        + Compare
      </button>
    </div>
  );
}
