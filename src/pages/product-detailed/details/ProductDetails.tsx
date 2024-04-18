import React from "react";
import ProductMini from "../../../components/products/ProductMini";
import ProductSize from "../../../components/products/ProductSize";
import ProductColor from "../../../components/products/ProductColor";
import facebook from "../../../assets/icons/facebook.svg";
import linkedin from "../../../assets/icons/linkedin.svg";
import twitter from "../../../assets/icons/twitter.svg";
import Rating from "../../../components/products/Rating";
import DescriptionDetail from "../../../components/products/DescriptionDetail";

export default function ProductDetail() {
  return (
    <section className="mt-12">
      <div className="grid grid-cols-2">
        <div className="flex justify-center  ml-10">
          <div className="flex flex-row ml-10">
            <div className="flex flex-col gap-4">
              {Array.from({ length: 4 }, () => (
                <ProductMini key={Math.floor(Math.random() * 999)} img="https://i.postimg.cc/KYM5wx34/sofas.png" />
              ))}
            </div>
            <div>
              <img
                className="rounded-2xl"
                src="https://i.postimg.cc/KYM5wx34/sofas.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[90%]">
          <h1 className="text-4xl">Asgaard sofa</h1>
          <h1 className="text-xl font-medium text-gray-400">R$ 250.000,00</h1>
          <Rating key={Math.floor(Math.random() * 999)} />
          <DescriptionDetail />

          <ProductSize />
          <h1>color</h1>
          <div className=" flex flex-row gap-4">
            {Array.from(
              ["bg-red-500", "bg-green-500", "bg-yellow-500"],
              (item) => (
                <ProductColor key={Math.floor(Math.random() * 999)} color={item} />
              )
            )}
          </div>
          <div className="flex flex-row gap-5 mt-4">
            <div className="flex flex-row justify-between p-4 items-center gap-4 border-[2px] border-gray-400 rounded-lg w-36 h-16">
              <button>-</button>
              <h1>1</h1>
              <button>+</button>
            </div>
            <button className="w-60 border-[2px] border-black rounded-2xl font-medium">
              Add to cart
            </button>
            <button className="w-60 border-[2px] border-black rounded-2xl font-medium">
              {" "}
              + Compare
            </button>
          </div>
          <div className="flex flex-row  gap-5 border-t-2 mt-12 ">
            <div className="flex flex-col gap-3">
              <h1 className="text-gray-400">SKU</h1>
              <h1 className="text-gray-400">Category</h1>
              <h1 className="text-gray-400">Tags</h1>
              <h1 className="text-gray-400">Share</h1>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-gray-400">: SS01</h1>
              <h1 className="text-gray-400">: Sofas</h1>
              <h1 className="text-gray-400">: Sofas, Chair, Home, Shop</h1>
              <div className="flex flex-row gap-6">
                <span className="text-gray-400">:</span>
                <img src={facebook} alt="facebbok" />
                <img src={linkedin} alt="likedin" />
                <img src={twitter} alt="twitter" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
