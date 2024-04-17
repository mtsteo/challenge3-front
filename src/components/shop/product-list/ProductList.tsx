import React from "react";
import { data } from "../../../mock-data";
import ProductCard from "../../products/ProductCard";

export default function ProductList() {
  return (
    <section className="mt-16">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 gap-10 w-[80%]">
          {data.map((prod) => (
            <ProductCard data={prod} />
          ))}
        </div>
      </div>
    </section>
  );
}
