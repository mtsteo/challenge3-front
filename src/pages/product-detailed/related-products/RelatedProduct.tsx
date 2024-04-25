import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/products/product-card/ProductCard";
import { Product } from "../../../interfaces/product.interface";
import { useQuery } from "@tanstack/react-query";
import { ApiFetcher } from "../../../api/api";
import Loading from "../../../components/products/Loading";
import { useNavigate } from "react-router-dom";

export default function RelatedProduct({ category }: any) {
  const [amount, setAmount] = useState(4);
  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery({
    queryKey: ["product", category[0].category],
    queryFn: () =>
      ApiFetcher.getByCategories(category[0].category, 1, 12, "ASC"),
  });

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    console.log(error);
  }

  const handleAmountClick = () => {
    setAmount((prev) => prev * 2);
  };

  const redirect = () => {
    navigate(`/shop/products/category/${category[0].category}`);
  };

  return (
    <section className="mt-20">
      <div className="flex justify-center items-center">
        <h1 className="text-4xl font-medium">Related Products</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-4 gap-8">
          {data.slice(0, amount).map((prod: any) => {
            return <ProductCard data={prod} />;
          })}
        </div>
      </div>

      <div className="flex justify-center items-center mt-10">
        <button
          onClick={amount< 8 ? handleAmountClick : redirect}
          className="w-60 h-12 border-2 border-[#B88E2F]  text-[#B88E2F] "
        >
          Show more
        </button>
      </div>
    </section>
  );
}
