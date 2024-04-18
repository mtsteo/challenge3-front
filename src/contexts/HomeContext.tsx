import React, {
  useEffect,
  createContext,
  useState,
  ReactNode,
  useContext,
} from "react";
import { Api } from "../api/api";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discount_price: number;
  discount_percent: number;
  is_new: boolean;
  image_link: string;
  other_images_link: string; // Vai ser um array posteriormente
}
interface ProductContextType {
  products: Product[];
}

const HomeContext = createContext<ProductContextType | undefined>(undefined);

export const useProductContext = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

export const HomeProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await Api.getAllCategories();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProducts();
  }, []);

  

  return (
    <HomeContext.Provider value={{ products }}>{children}</HomeContext.Provider>
  );
};
