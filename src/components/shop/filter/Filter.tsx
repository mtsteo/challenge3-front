import React from "react";
import filter from "../../../assets/icons/filter.svg";
import grid from "../../../assets/icons/grid.svg";
import list from "../../../assets/icons/list.svg";

export default function Filter() {
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
                className="w-12 h-12 placeholder:text-center"
                type="text"
                placeholder="16"
              />
            </div>
            <div className="flex justify-center items-center gap-3 ">
              <h1 className="font-medium text-lg">Short by</h1>
              <input
                className="placeholder:text-center w-40 h-12 "
                type="text"
                placeholder="Default"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
