import CategoryItem from "../../../components/home/CategoryItem";


export default function BrowseTheRange({category}: any) {

  return (
    <section className="mt-20">
      <div>
        <h1 className="text-center font-bold text-3xl">Browse The Range</h1>
      </div>
      <div className="flex flex-row items-center justify-center mt-20 gap-10">
        {category.map((item : any) => {
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
