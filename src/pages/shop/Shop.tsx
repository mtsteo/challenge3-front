import React from "react";
import ShopBanner from "./banner/ShopBanner";
import Filter from "./filter/Filter";
import ProductList from "./product-list/ProductList";
import GoToTop from "../../utils/GotoTop";
import { Outlet } from "react-router-dom";
import { useShopContext } from "../../contexts/shop/ShopContext";

export default function Shop() {
  
  return (
    <>
      <ShopBanner />
      <Filter />
      <ProductList/>
      <GoToTop />
    </>
  );
}
