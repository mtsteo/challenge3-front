import React from "react";
import { useNavigate } from "react-router-dom";
import { useShopContext } from "../../contexts/shop/ShopContext";

export default function CategoryItem(props: any) {

  const navigate = useNavigate();
  const handleClick = async (category: string) => {
    navigate(`/shop/products/category/${category}`);
  };
  return (
    <div onClick={() => handleClick(props.name)}>
      <img
        className="rounded-lg hover:scale-95 transition duration-500 cursor-pointer"
        src={props.imageLink}
        alt="dinner"
      />
      <h1 className="text-center text-2xl mt-8 font-semibold capitalize ">
        {props.name}
      </h1>
    </div>
  );
}
