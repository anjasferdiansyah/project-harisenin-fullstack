import { useEffect, useState } from "react";
import ListProductCard from "../components/atoms/ListProductCard";
import ListCategoryCard from "../components/atoms/ListProductCard";
import Footer from "../components/organisems/Footer";
import Navbar from "../components/organisems/Navbar";
import { useParams } from "react-router";
import axios from "axios";

const ListProducts = () => {
  const { catId } = useParams();

  const [data, setData] = useState([]);
  const [catTitle, setCatTitle] = useState([]);

  const fetchDataCategory = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/category/${catId}`);

    setCatTitle(response.data.title);
  };

  const fetchData = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product/category/${catId}`);

    setData(response.data)
  };

  useEffect(() => {
    fetchData();
    fetchDataCategory();
  }, []);

  return (
    <>
      <Navbar />
      <section className="py-4">
        <div className="text-center">
          <p className="text-[#213875] font-semibold">Category</p>
          <h1 className="text-[#213875] text-4xl font-bold mb-4">{catTitle}</h1>
          <p className="p-4 md:px-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
            ipsum consectetur minus aspernatur deleniti quae voluptates
            nesciunt, eaque, officiis amet fugit nemo esse, voluptatem nam.
            Obcaecati, sit
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 p-4 md:px-10">
          {data && data.map((item, i) => (
            <ListProductCard
              key={i}
              id={item.id}
              listImage={item.listImage}
              title={item.title}
              price={`Rp${item.price.toLocaleString("id-ID")}`}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ListProducts;
