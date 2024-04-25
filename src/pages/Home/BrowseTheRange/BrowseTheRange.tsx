import { useEffect, useState } from "react";
import CategoryItem from "../../../components/home/CategoryItem";
import { Category } from "../../../interfaces/category.interface";
import { ApiFetcher } from "../../../api/api";

export default function BrowseTheRange() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const fetch = async ()=>{
      const data = await ApiFetcher.getAllCategories()
      setCategories(data)
    }
    fetch()
  }, []);

  return (
    <section className="mt-20">
      <div>
        <h1 className="text-center font-bold text-3xl">Browse The Range</h1>
      </div>
      <div className="flex flex-row items-center justify-center mt-20 gap-10">
        {categories.map((item) => {
          return (
            <CategoryItem
              key={item.id}
              name={item.name}
              imageLink={item.image_link}
            />
          );
        })}
      </div>
    </section>
  );
}
