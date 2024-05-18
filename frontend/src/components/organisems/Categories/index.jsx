import { useEffect, useState } from "react";
import CategoryCard from "../../atoms/CategoryCard";
import axios from "axios";

function Categories() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/category/`);

    setData(response.data);
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
            {data.map((item, i) => (
              <CategoryCard
                key={item.id}
                id={item.id}
                catImage={item.image}
                catTitle={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
