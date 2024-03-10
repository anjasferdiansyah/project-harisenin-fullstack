import { useEffect, useState } from "react";
import CategoryCard from "../../atoms/CategoryCard";

function Categories() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("/src/data/listCategory.json");
    const json = await response.json();
    console.log(json.data);
    setData(json.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="py-12">
      <div className="w-full mx-auto mt-10">
        <div className="w-full px-4 md:px-8 lg:px-10">
          <div
            className="scroller scroll-pl-12 grid grid-flow-col auto-cols-[100%] md:auto-cols-[32%] overflow-auto overscroll-x-contain gap-4 snap-x snap-mandatory hover:scroll-pl-4"
            id="slider-img"
          >
            {data.map((item) => (
              <CategoryCard
                key={item}
                catImage={item.img}
                catTitle={item.catTitle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
