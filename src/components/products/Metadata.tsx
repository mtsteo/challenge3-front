import React from "react";
import facebook from "../../assets/icons/facebook.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import twitter from "../../assets/icons/twitter.svg";

export default function Metadata() {
  return (
    <div className="flex flex-row  gap-5 border-t-2 mt-12 ">
      <div className="flex flex-col gap-3 mt-10">
        <h1 className="text-gray-400">SKU</h1>
        <h1 className="text-gray-400">Category</h1>
        <h1 className="text-gray-400">Tags</h1>
        <h1 className="text-gray-400">Share</h1>
      </div>
      <div className="flex flex-col gap-3 mt-10">
        <h1 className="text-gray-400">: SS01</h1>
        <h1 className="text-gray-400">: Sofas</h1>
        <h1 className="text-gray-400">: Sofas, Chair, Home, Shop</h1>
        <div className="flex flex-row gap-6">
          <span className="text-gray-400">:</span>
          <img className="hover:cursor-pointer" src={facebook} alt="facebbok" />
          <img className="hover:cursor-pointer" src={linkedin} alt="likedin" />
          <img className="hover:cursor-pointer" src={twitter} alt="twitter" />
        </div>
      </div>
    </div>
  );
}
