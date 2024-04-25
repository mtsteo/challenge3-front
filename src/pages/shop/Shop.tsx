import React, { useEffect, useState } from "react";
import ShopBanner from "./banner/ShopBanner";
import Filter from "./filter/Filter";
import ProductList from "./product-list/ProductList";
import GoToTop from "../../utils/GotoTop";
import { useParams } from "react-router-dom";
import { ApiFetcher } from "../../api/api";
import { json } from "stream/consumers";

export default function Shop() {
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState("ASC");
  const [amount, setAmount] = useState(16);
  const [product, setProduct] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    ApiFetcher.getAllproducts(page, amount, order, category).then((json) =>
      setProduct(json)
    );
  }, [amount, order, page, category]);

  const prevPage = () => setPage((prev) => prev - 1);

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <ShopBanner />
      <Filter setAmount={setAmount} setOrder={setOrder} />
      <ProductList
        products={product}
        prevPage={prevPage}
        nextPage={nextPage}
        page={page}
      />
      <GoToTop />
    </>
  );
}
