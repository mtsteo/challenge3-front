import React from "react";
import Breadcrumb from "./breadcrumb/Breadcrumb";
import ProductDetails from "./details/ProductDetails";
import Description from "./description/Description";
import RelatedProduct from "./related-products/RelatedProduct";
import GoToTop from "../../utils/GotoTop";

export default function ProductPage() {
  return (
    <>
      <Breadcrumb />
      <ProductDetails />
      <Description />
      <RelatedProduct />
      <GoToTop />
    </>
  );
}
