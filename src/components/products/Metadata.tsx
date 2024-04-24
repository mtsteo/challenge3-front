import React from "react";
import facebook from "../../assets/icons/facebook.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import twitter from "../../assets/icons/twitter.svg";

export default function Metadata({data} : any) {
  return (
    <div className="flex flex-row  gap-5 border-t-2 mt-12 ">
      <div className="flex flex-col gap-3 mt-10">
        <h1 className="text-gray-400">SKU</h1>
        <h1 className="text-gray-400">Category</h1>
        <h1 className="text-gray-400">Tags</h1>
        <h1 className="text-gray-400">Share</h1>
      </div>
      <div className="flex flex-col gap-3 mt-10">
      <h1 className="text-gray-400">: {data[0].sku}</h1>
        <h1 className="text-gray-400 capitalize">: {data[0].category}</h1>
        <h1 className="text-gray-400 flex flex-row gap-3">: {data[0].tags.map((tag : any) => <span key={Math.floor(Math.random() * 999)} >{tag}</span> )}</h1>
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
