import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/products/product-card/ProductCard";
import { useShopContext } from "../../../contexts/shop/ShopContext";

export default function ProductList() {
  
  

  const { products} = useShopContext();



  // const handleChange = (e: any) => {
  //   const opt = e.target.name;
  //   if (opt === "prev") {
  //     setPage((prevPage) => prevPage - 1);
  //   } else {
  //     setPage((prevPage) => prevPage + 1);
  //   }
  // };

  return (
    <section className="">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 gap-10 w-[80%]">
          {products.map((prod: any) => {
            return <ProductCard data={prod} />;
          })}
        </div>
      </div>
      <div className="flex justify-center items-center mt-16 gap-10">
        <button
          // disabled={page === 1 ? true : false}
          // onClick={handleChange}
          className="bg-footerTop w-14 h-14 rounded-lg"
          name="prev"
        >
          Prev
        </button>
        <button
          // onClick={handleChange}
          className="bg-footerTop w-14 h-14 rounded-lg"
          name="next"
        >
          Next
        </button>
      </div>
    </section>
  );
}
