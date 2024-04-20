import React, { useEffect, useState } from "react";
import { data } from "../../../mock-data";
import ProductCard from "../../../components/products/product-card/ProductCard";
import usePagination from "../../../utils/Pagination";
import { Pagination, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { ApiFetcher } from "../../../api/api";

export default function ProductListByCateg() {
  const [products, setProducts] = useState([]);
  let [page, setPage] = useState(1);

  const { category } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const prods = await ApiFetcher.getByCategories(category!);
      setProducts(prods);

      fetch();
    };
  }, []);

  const perPage = 16;
  const count = Math.ceil(products.length / perPage);
  const _DATA = usePagination(products, perPage);

  const handleChange = (e: any, p: any) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <section className="mt-16">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 gap-10 w-[80%]">
          {_DATA.currentData().map((prod: any) => {
            return <ProductCard data={prod} />;
          })}
        </div>
      </div>
      <div className="flex justify-center items-center mt-16">
        <Stack spacing={2}>
          <Pagination
            page={page}
            count={count}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
            size="large"
            sx={{
              button: {
                background: "#B88E2F",
                border: "none",
                borderRadius: "5px",
                margin: "10px",
              },
            }}
          />
        </Stack>
      </div>
    </section>
  );
}