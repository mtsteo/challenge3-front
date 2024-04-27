import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="m-10">
        <div className="grid grid-cols-4 mt-10">
          <div className="flex flex-col ml-10 gap-10">
            <h1 className="font-bold text-3xl">Furniro.</h1>
            <h1 className="text-lg text-gray-400">
              400 University Drive Suite 200 Coral Gables,FL 33134 USA
            </h1>
          </div>
          <div className="flex flex-col items-center  gap-7">
            <h1 className=" font-medium text-gray-400 text-lg">Links</h1>
            <Link to="/home" className=" font-medium text-lg">
              Home
            </Link>
            <Link to="/shop/products" className=" font-medium text-lg">
              Shop
            </Link>
            <Link to="/about" className=" font-medium text-lg">
              About
            </Link>
            <Link to="/contact" className=" font-medium text-lg">
              Contact
            </Link>
          </div>
          <div className="flex flex-col  items-center  gap-7">
            <h1 className="font-medium text-gray-400 text-lg">Help</h1>
            <Link to="/payment" className="font-medium text-lg">
              Payment Options
            </Link>
            <Link to="/return" className="font-medium text-lg">
              Return
            </Link>
            <Link to="/privacy" className="font-medium text-lg">
              Privacy Policies
            </Link>
          </div>
          <div className="flex flex-col gap-7">
            <h1 className="text-gray-400 text-lg">Newsletter</h1>
            <div className=" flex flex-row gap-2">
              <input
                className="text-sm border-b-[1px] border-black w-1/2"
                type="text"
                placeholder="Enter your email address"
              />
              <button className="font-medium text-sm border-b-[1px] border-black">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
