import React from "react";
import share from '../../../assets/icons/share.svg'
import compare from '../../../assets/icons/compare.svg'
import like from '../../../assets/icons/like.svg'
import DetailsOptions from "../DetailsOptions";
import { Link } from "react-router-dom";

export default function SeeDetail(props:any) {



  const detailOptions = [
    {
      id: 1,
      icon: share,
      name: "Share"
    },
    {
      id: 2,
      icon: compare,
      name: "Share"
    },
    {
      id: 3,
      icon: like,
      name: "Share"
    },

  ]
 
  return (
    <div className="transition duration-500 hover:bg-black hover:bg-opacity-50 absolute z-10 h-[100%] w-[100%] flex flex-col justify-center items-center">
      <div className="transition hover:scale-105 duration-300">
        <Link to={`/shop/product/${props.id}`}>
          <button className=" bg-white w-48 h-12 font-semibold text-[#B88E2F]">
            See Details
          </button>
        </Link>
      </div>
      <div className="flex flex-row justify-center items-center gap-5 mt-5">
        {detailOptions.map(option => <DetailsOptions key={option.id} icon={option.icon} name={option.name} />)}
      </div>
    </div>
  );
}
