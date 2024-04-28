import React, { useEffect, useState } from "react";
import Banner from "./banner/Banner";
import BrowseTheRange from "./BrowseTheRange/BrowseTheRange";
import OurProduct from "./OurProduct/OurProduct";
import GoToTop from "../../utils/GotoTop";
import { Category } from "../../interfaces/category.interface";
import { Product } from "../../interfaces/product.interface";
import { ApiFetcher } from "../../api/api";

export default function Home() {
  const [category, setCategory] = useState<Category[]>([]);
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const data = await ApiFetcher.getAllCategories();
      setCategory(data);
    };
    const fetchProduct = async () => {
      const data = await ApiFetcher.getAllproducts(1, 8);
      setProduct(data);
    };
    fetchCategory();
    fetchProduct();
  }, []);
  return (
    <>
      <Banner />
      <BrowseTheRange category={category} />
      <OurProduct product={product} />
      <GoToTop />
    </>
  );
}
