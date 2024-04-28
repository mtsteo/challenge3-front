import ProductCard from "../../../components/products/product-card/ProductCard";
import { Link } from "react-router-dom";


export default function OurProduct({ product }: any) {

  return (
    <section className="mt-20">
      <div>
        <h1 className="text-center font-bold text-3xl">Our products</h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 w-4/6 max-[1735px]:grid-cols-3 max-[1310px]:grid-cols-2">
          {product.map((prod : any) => {
            return <ProductCard key={prod.id} data={prod} />;
          })}
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Link to="/shop/products">
          <button className="w-60 h-12 border-2 border-[#B88E2F]  text-[#B88E2F] ">
            Show more
          </button>
        </Link>
      </div>
    </section>
  );
}
