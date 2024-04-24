import React, {
  useState,
  createContext,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { ApiFetcher } from "../../api/api";
import { Product } from "../../interfaces/product.interface";

interface ProductDetailInterface {
  product: Product[];
  FetchProductDetail: (id: string) => Promise<void>;
}

export const ProductDetailContext = createContext<
  ProductDetailInterface | undefined
>(undefined);

export const useProductDetailContext = () => {
  const context = useContext(ProductDetailContext);
  if (!context) {
    throw new Error(
      "useProductDetailContext must be used within a ProductDetail provider"
    );
  }

  return context;
};

export const ProductDetailProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [product, setProduct] = useState<Product[]>([]);

  const FetchProductDetail = async (id: string) => {
    try {
      const data = await ApiFetcher.getOneProduct(id);
      setProduct(data);
    } catch (error) {
      console.error("Error to found product:", error);
    }
  };

  


  return (
    <ProductDetailContext.Provider value={{ product, FetchProductDetail }}>
      {children}
    </ProductDetailContext.Provider>
  );
};
