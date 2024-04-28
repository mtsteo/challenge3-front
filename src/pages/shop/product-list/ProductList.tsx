import React from "react";
import ProductCard from "../../../components/products/product-card/ProductCard";

export default function ProductList({
  products,
  prevPage,
  nextPage,
  page,
}: any) {
  return (
    <section className="mt-10">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 gap-10 w-[80%]">
          {products.map((prod: any) => {
            return <ProductCard key={prod.id} data={prod} />;
          })}
        </div>
      </div>
      <div className="flex justify-center items-center mt-16 gap-10">
        <button
          onClick={prevPage}
          disabled={page === 1 ? true : products.length < 16 ? true : false}
          className="bg-footerTop w-14 h-14 rounded-lg"
          name="prev"
        >
          Prev
        </button>
        <button
          onClick={nextPage}
          disabled={
            !products.length ? true : products.length < 16 ? true : false
          }
          className="bg-footerTop w-14 h-14 rounded-lg"
          name="next"
        >
          Next
        </button>
      </div>
    </section>
  );
}
