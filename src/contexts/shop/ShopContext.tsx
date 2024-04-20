import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  useContext,
} from "react";

import { ApiFetcher } from "../../api/api";
import { Product } from "../../interfaces/product.interface";

interface ShopContextInterface {
  fetchProductsShop: (page: number, limit : number ) => Promise<void>;
  fetchProductsBycateg: (category: string) => Promise<Product[]>;
}

export const ShopContext = createContext<ShopContextInterface | undefined>(
  undefined
);

export const useShopContext = () => {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("useShopContext must be used within a Shop Provider");
  }
  return context;
};

export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const fetchProductsShop = async (page: number, limit : number) => {
    try {
      const data = await ApiFetcher.getAllproducts(page, limit);
      return data;
    } catch (error) {
      console.error("Error to found products:", error);
    }
  };

  const fetchProductsBycateg = async (category: string) => {
    try {
      const data = await ApiFetcher.getByCategories(category);
      return data;
    } catch (error) {
      console.error("Error to found products:", error);
    }
  };

  return (
    <ShopContext.Provider value={{ fetchProductsShop, fetchProductsBycateg }}>
      {children}
    </ShopContext.Provider>
  );
};
