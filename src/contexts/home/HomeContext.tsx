import React, {
  createContext,
  ReactNode,
  useContext,
} from "react";
import { ApiFetcher } from "../../api/api";
import { Product } from "../../interfaces/product.interface";
import { Category } from "../../interfaces/category.interface";

interface HomeContextInterface {
  fetchCategories: () => Promise<Category[]>;
  fetchHomeProducts: (amount: number) => Promise<Product[]>;
}

const HomeContext = createContext<HomeContextInterface | undefined>(undefined);

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("useHomeContext must be used within a HomeProvider");
  }
  return context;
};

export const HomeProvider = ({ children }: { children: ReactNode }) => {
  const fetchCategories = async () => {
    try {
      const data = await ApiFetcher.getAllCategories();
      return data;
    } catch (error) {
      console.error("Error to found categories:", error);
    }
  };

  const fetchHomeProducts = async (amount: number) => {
    try {
      const data = await ApiFetcher.getByAmount(amount);
      return data;
    } catch (error) {
      console.error("Error to found products:", error);
    }
  };

  return (
    <HomeContext.Provider
      value={{
        fetchCategories,
        fetchHomeProducts,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
