import React from "react";
import { Link } from "react-router-dom";
import { useShopContext } from "../../../contexts/shop/ShopContext";


export default function Breadcrumb(props : any) {
  const { fetchProductsShop } = useShopContext();


  return (
    <section className="bg-filterBg h-20 flex">
      <div className=" flex items-center gap-5 ml-20">
        <Link className="text-gray-500" to="/home">
          Hom
        </Link>
        <Link className="text-gray-500" to="/shop/products">
          Shop
        </Link>
        <div className=" border-l-2 border-gray-400 flex items-center h-10">
          <h1 className="ml-5 font-medium text-base">
            {props.data[0].name}
          </h1>
        </div>
      </div>
    </section>
  );
}
