import React from "react";
import ProductCard from "../../products/ProductCard";
import { data } from "../../../mock-data";
import { Link } from "react-router-dom";

export default function OurProduct() {
  return (
    <section className="mt-20">
      <div>
        <h1 className="text-center font-bold text-3xl">Our products</h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 w-4/6">
          {data.slice(0, 8).map((prod, idx) => {
            return <ProductCard key={prod.id} data={prod} />;
          })}
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Link to="/shop">
          <button className="w-60 h-12 border-2 border-[#B88E2F]  text-[#B88E2F] ">
            Show more
          </button>
        </Link>
      </div>
    </section>
  );
}
