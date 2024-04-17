import React from "react";
import ProductMini from "../../../components/products/ProductMini";
import star from "../../../assets/icons/star.svg";
import ProductSize from "../../../components/products/ProductSize";
import ProductColor from "../../../components/products/ProductColor";

export default function ProductDetail() {
  return (
    <section className="mt-12">
      <div className="grid grid-cols-2">
        <div className="flex justify-center items-center ml-10">
          <div className="flex flex-row ml-10">
            <div className="flex flex-col gap-4">
              {Array.from({ length: 4 }, () => (
                <ProductMini img="https://i.postimg.cc/KYM5wx34/sofas.png" />
              ))}
            </div>
            <div className="flex justify-center items-center">
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
          <div className="flex flex-row gap-4 items-center">
            <div className="flex flex-row gap-1">
              {Array.from({ length: 5 }, () => (
                <button>
                  <img src={star} />
                </button>
              ))}
            </div>
            <div className="border-l-2 w-40 flex justify-center items-center">
              <h1 className="text-sm text-gray-400"> 5 Costumer review</h1>
            </div>
          </div>
          <div className="w-[70%]">
            <h1 className="font-medium">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </h1>
          </div>

          <h1 className="text-gray-400">Size</h1>
          <div className=" flex flex-row gap-4">
            {Array.from(["L", "XL", "SL"], (item) => (
              <ProductSize size={item} />
            ))}
          </div>
          <h1>color</h1>
          <div className=" flex flex-row gap-4">
            {Array.from(
              ["bg-red-500", "bg-green-500", "bg-yellow-500"],
              (item) => (
                <ProductColor color={item} />
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
        </div>
      </div>
    </section>
  );
}
