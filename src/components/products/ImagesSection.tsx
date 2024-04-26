import React, { useState } from "react";
import ProductMini from "../../components/products/ProductMini";

export default function ImagesSection({ data }: any) {
  const [product] = data
  const [image, setImage] = useState(product.image_link)
  
  return (
    <div className="flex justify-end">
      <div className="flex flex-row mr-14">
        <div className="flex flex-col gap-4 mr-6">
          {product.other_images_link.map((prod: any) => (
            <ProductMini key={Math.floor(Math.random() * 999)} setImage={setImage} img={prod} />
          ))}
        </div>
        <div>
          <img className="rounded-2xl w-[500px] h-[500px]" src={image} alt="" />
        </div>
      </div>
    </div>
  );
}
