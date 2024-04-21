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
  products: Product[];
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;

  fetchProductsBycateg: (
    category: string,
    page: number,
    limit: number
  ) => Promise<Product[]>;
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
  const [products, setProducts] = useState<Product[]>([]);
  const [limit, setLimit] = useState(16);
  const [page, setPage] = useState(1);

  const fetchProductsShop = async () => {
    try {
      const data = await ApiFetcher.getAllproducts(page, limit);
      setProducts(data);
    } catch (error) {
      console.error("Error to found products:", error);
    }
  };

  const fetchProductsBycateg = async (
    category: string,
    page: number,
    limit: number
  ) => {
    try {
      const data = await ApiFetcher.getByCategories(category, page, limit);
      return data;
    } catch (error) {
      console.error("Error to found products:", error);
    }
  };

  useEffect(() => {
    fetchProductsShop();
  }, [limit]);

  return (
    <ShopContext.Provider
      value={{ products, page, setLimit, limit, setPage, fetchProductsBycateg }}
    >
      {children}
    </ShopContext.Provider>
  );
};
