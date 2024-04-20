import React, {
  useEffect,
  createContext,
  useState,
  ReactNode,
  useContext,
} from "react";
import { ApiFetcher } from "../api/api";
import { Product } from "../interfaces/product.interface";
import { Category } from "../interfaces/category.interface";

interface HomeContextType {
  products: Product[];
  categories: Category[];
}

const HomeContext = createContext<HomeContextType | undefined>(undefined);

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("useHomeContext must be used within a ProductProvider");
  }
  return context;
};

export const HomeProvider = ({ children }: { children: ReactNode }) => {
  const [products, setHomeProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchHomeProducts = async () => {
    try {
      const data = await ApiFetcher.getByAmount(8);
      setHomeProducts(data);
    } catch (error) {
      console.error("Error to found products:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await ApiFetcher.getAllCategories();
      setCategories(data);
    } catch (error) {
      console.error("Error to found categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchHomeProducts();
  }, []);

  return (
    <HomeContext.Provider value={{ products, categories }}>
      {children}
    </HomeContext.Provider>
  );
};
