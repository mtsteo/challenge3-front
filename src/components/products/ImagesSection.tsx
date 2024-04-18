import React from "react";
import ProductMini from "../../components/products/ProductMini";

export default function ImagesSection() {
  return (
    <div className="flex justify-end">
      <div className="flex flex-row mr-14">
        <div className="flex flex-col gap-4">
          {Array.from({ length: 4 }, () => (
            <ProductMini
              key={Math.floor(Math.random() * 999)}
              img="https://i.postimg.cc/KYM5wx34/sofas.png"
            />
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
  );
}
