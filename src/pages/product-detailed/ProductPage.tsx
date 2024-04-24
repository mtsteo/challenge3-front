import React, { useEffect, useState } from "react";
import Breadcrumb from "./breadcrumb/Breadcrumb";
import ProductDetails from "./details/ProductDetails";
import Description from "./description/Description";
import RelatedProduct from "./related-products/RelatedProduct";
import GoToTop from "../../utils/GotoTop";
import { useQuery } from "@tanstack/react-query";
import { ApiFetcher } from "../../api/api";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/products/Loading";
import ImagesSection from "../../components/products/ImagesSection";
import DescriptionDetail from "../../components/products/DescriptionDetail";
import ProductSize from "../../components/products/ProductSize";
import ProductColor from "../../components/products/ProductColor";
import ActionOptions from "../../components/products/ActionOptions";
import Metadata from "../../components/products/Metadata";
import ProductCard from "../../components/products/product-card/ProductCard";
import { Product } from "../../interfaces/product.interface";
import Rating from "../../components/products/Rating";
import Ratings from "../../components/products/Rating";

export default function ProductPage() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["product", id],
    queryFn: () => ApiFetcher.getOneProduct(id!),
  });

  if (isLoading) {
    return <Loading />;
  }
  console.log(data)

  return (
    <>
      <section className="bg-filterBg h-20 flex">
        <div className=" flex items-center gap-5 ml-20">
          <Link className="text-gray-500" to="/home">
            Home
          </Link>
          <Link className="text-gray-500" to="/shop">
            Shop
          </Link>
          <div className=" border-l-2 border-gray-400 flex items-center h-10">
            <h1 className="ml-5 font-medium text-base">{data[0].name}</h1>
          </div>
        </div>
      </section>
      <section className="mt-12">
        <div className="grid grid-cols-2">
          <ImagesSection />
          <div className="flex flex-col gap-4 ">
            <h1 className="text-4xl">{data[0].name}</h1>
            <h1 className="text-xl font-medium text-gray-400">{data[0].price.toLocaleString(
            "pt-br",
            { style: "currency", currency: "BRL" }
          )}</h1>
            <Ratings key={Math.floor(Math.random() * 999)} />
            <DescriptionDetail data={data} />
            <ProductSize />
            <ProductColor />
            <ActionOptions />
            <Metadata data={data} />
          </div>
        </div>
      </section>
      <section className="mt-20 border-t-2 ">
        <div className="flex flex-row justify-center items-center gap-10 mt-10">
          <button className="text-2xl font-semibold">Description</button>
          <button className="text-2xl  text-gray-400">
            Addictional Information
          </button>
        </div>
        <div className="flex justify-center items-center mt-10">
          <div className="flex flex-col w-[70%]">
            <p className="text-gray-400">
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road. <br />
              <br />
              <br />
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <div className="flex justify-center items-center">
          <h1 className="text-4xl font-medium">Related Products</h1>
        </div>
        {/* <div className="flex flex-row gap-10 justify-center item-center">
          {data.slice(0, 4).map((prod: any) => {
            return <ProductCard data={prod} />;
          })}
        </div> */}
      </section>
      <GoToTop />
    </>
  );
}
