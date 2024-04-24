import React, { useState } from "react";
import SeeDetail from "./SeeDetail";
import DiscountLabel from "./CardLabel";

export default function ProductCard({ data }: any) {
  const [show, setShow] = useState(false);
  return (
    <div
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
      className="bg-cardBg w-fit mt-8 relative "
    >
      {show && <SeeDetail  id={data.id}/>}
      <div className="relative">
        <img src={data.image_link} alt="" />
        {data.discount_percent > 0 ? (
          <DiscountLabel
            color="bg-discountBg"
            text={`-${data.discount_percent}%`}
          />
        ) : (
          <DiscountLabel color="bg-newProdBg" text="New" />
        )}
      </div>

      <div className=" flex flex-col m-5 gap-2">
        <h1 className="font-semibold text-2xl">{data.name}</h1>
        <h1 className="text-gray-400">{data.description}</h1>
        <div className="flex flex-row gap-2 items-center justify-center">
          <h1 className="text-lg font-semibold">{`R$ ${data.price.toLocaleString(
            "pt-br",
            { style: "currency", currency: "BRL" }
          )}`}</h1>
          <h1 className="line-through text-gray-300">
            {data.discount_price
              ? data.discount_price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })
              : null}
          </h1>
        </div>
      </div>
    </div>
  );
}
