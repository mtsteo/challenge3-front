import React from "react";
import ProductSize from "../../../components/products/ProductSize";
import ProductColor from "../../../components/products/ProductColor";
import Rating from "../../../components/products/Rating";
import DescriptionDetail from "../../../components/products/DescriptionDetail";
import ImagesSection from "../../../components/products/ImagesSection";
import ActionOptions from "../../../components/products/ActionOptions";
import Metadata from "../../../components/products/Metadata";

export default function ProductDetail() {
  return (
    <section className="mt-12">
      <div className="grid grid-cols-2">
        <ImagesSection />
        <div className="flex flex-col gap-4 ">
          <h1 className="text-4xl">Asgaard sofa</h1>
          <h1 className="text-xl font-medium text-gray-400">R$ 250.000,00</h1>
          <Rating key={Math.floor(Math.random() * 999)} />
          <DescriptionDetail />
          <ProductSize />
          <ProductColor />
          <ActionOptions />
          <Metadata />
        </div>
      </div>
    </section>
  );
}
