import React, { useEffect } from "react";
import ShopBanner from "./banner/ShopBanner";
import Filter from "./filter/Filter";
import ProductList from "./product-list/ProductList";
import GoToTop from "../../utils/GotoTop";
import { Outlet, useParams } from "react-router-dom";
import { useShopContext } from "../../contexts/shop/ShopContext";

export default function Shop() {
  const { category } = useParams();
  const { fetchProductsShop, fetchProductsBycateg } = useShopContext();

  useEffect(() => {
    if (category) {
      fetchProductsBycateg(category);
    } else {
      fetchProductsShop();
    }
  });
  return (
    <>
      <ShopBanner />
      <Filter />
      <ProductList />
      <GoToTop />
    </>
  );
}
