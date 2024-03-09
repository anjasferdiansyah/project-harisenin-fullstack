import { useEffect, useState } from "react";
import ListProductCard from "../components/atoms/ListProductCard";
import ListCategoryCard from "../components/atoms/ListProductCard";
import Footer from "../components/organisems/Footer";
import Navbar from "../components/organisems/Navbar";

const ListProducts = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("/src/data/listProducts.json");
    const json = await response.json();
    console.log(json.data);
    setData(json.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <section className="py-4">
        <div className="text-center">
          <p className="text-[#213875] font-semibold">Category</p>
          <h1 className="text-[#213875] text-4xl font-bold mb-4">Gentlemen</h1>
          <p className="p-4 md:px-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
            ipsum consectetur minus aspernatur deleniti quae voluptates
            nesciunt, eaque, officiis amet fugit nemo esse, voluptatem nam.
            Obcaecati, sit
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 p-4 md:px-10">
          {data.map((item, i) => (
            <ListProductCard
              key={i}
              listImage={item.listImage}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ListProducts;
