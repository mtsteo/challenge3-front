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
  setId: React.Dispatch<React.SetStateAction<string>>;
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
  const [id, setId] = useState("");

  const FetchProductDetail = async () => {
    try {
      const data = await ApiFetcher.getOneProduct(id);
      setProduct(data);
    } catch (error) {
      console.error("Error to found product:", error);
    }
  };

  useEffect(() => {
    FetchProductDetail();
  }, [id]);

  return (
    <ProductDetailContext.Provider value={{ product, setId }}>
      {children}
    </ProductDetailContext.Provider>
  );
};
