import React from "react";
import star from "../../assets/icons/star.svg";
import { Rating } from "@mui/material";


export default function Ratings() {
  return (
    <div className="flex flex-row gap-4 items-center">
      <div className="flex flex-row gap-1">
        <Rating/>
      </div>
      <div className="border-l-2 w-40 flex justify-center items-center">
        <h1 className="text-sm text-gray-400"> 5 Costumer review</h1>
      </div>
    </div>
  );
}
