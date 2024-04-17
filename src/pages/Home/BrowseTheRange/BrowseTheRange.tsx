import React from "react";
import CategoryItem from "../../../components/home/CategoryItem";

export default function BrowseTheRange() {
  const categories = [
    {
      id: 1,
      name: "Dining",
      image_link: "https://i.postimg.cc/XNcsnjHC/jantar.png",
    },
    {
      id: 2,
      name: "Living",
      image_link: "https://i.postimg.cc/Xq3x9mJq/sala.png",
    },
    {
      id: 3,
      name: "Bedroom",
      image_link: "https://i.postimg.cc/MTJY8N15/quarto.png",
    },
  ];

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
