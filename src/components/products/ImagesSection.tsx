import React from "react";
import ProductMini from "../../components/products/ProductMini";

export default function ImagesSection({ data }: any) {
  return (
    <div className="flex justify-end">
      <div className="flex flex-row mr-14">
        <div className="flex flex-col gap-4 mr-6">
          {data[0].other_images_link.map((prod: any) => (
            <ProductMini key={Math.floor(Math.random() * 999)} img={prod} />
          ))}
        </div>
        <div>
          <img className="rounded-2xl" src={data[0].image_link} alt="" />
        </div>
      </div>
    </div>
  );
}
