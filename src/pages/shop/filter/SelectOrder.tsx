import * as React from "react";
import { useShopContext } from "../../../contexts/shop/ShopContext";

export default function SelectOrder() {
  const { setOrder } = useShopContext();

  const handleChange = (e: any) => {
    setOrder(e.target.value);
  };
  return (
    <div>
      <select
        onChange={handleChange}
        className="w-28 h-12 text-gray-400"
        defaultValue="default"
      >
        <option value="default">Default</option>
        <option value="ASC">Ascending</option>
        <option value="DESC">Descending</option>
      </select>
    </div>
  );
}
