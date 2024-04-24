import React, { useState } from "react";
import filter from "../../../assets/icons/filter.svg";
import grid from "../../../assets/icons/grid.svg";
import list from "../../../assets/icons/list.svg";
import { useShopContext } from "../../../contexts/shop/ShopContext";
import SelectOrder from "./SelectOrder";

export default function Filter() {
  const [amoutValue, setAmoutValue] = useState(16);
  const { setLimit } = useShopContext();

  const handleAmountChange = (e: any) => {
    if (!e.target.value) {
      setLimit(16);
      return;
    } else {
      setLimit(e.target.value);
    }
  };
  

  return (
    <section>
      <div className="bg-filterBg h-20 grid grid-cols-2">
        <div className="ml-20 flex items-center gap-6">
          <div className="flex flex-row gap-2">
            <img src={filter} alt="filter" />
            <button className="font-medium text-lg">Filter</button>
          </div>
          <div className="flex flex-row gap-4">
            <button>
              <img src={grid} alt="grid" />
            </button>
            <button>
              <img src={list} alt="list" />
            </button>
          </div>
          <div className=" border-l-2 border-gray-400 flex items-center justify-center h-10">
            <h1 className="ml-5 font-medium text-base">
              Showing 1-16 of 32 result
            </h1>
          </div>
        </div>
        <div className="flex justify-end mr-20">
          <div className=" flex items-center gap-6">
            <div className="flex justify-center items-center gap-3 ">
              <h1 className="font-medium text-lg">Show</h1>
              <input
                onChange={handleAmountChange}
                className="w-12 h-12 placeholder:text-center"
                type="text"
                placeholder="16"
              />
            </div>
            <div className="flex justify-center items-center gap-3 ">
              <h1 className="font-medium text-lg">Short by</h1>
              <SelectOrder />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
