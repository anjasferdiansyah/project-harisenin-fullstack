import { useEffect, useState } from "react";
import ListProductCard from "../components/atoms/ListProductCard";
import Footer from "../components/organisems/Footer";
import Navbar from "../components/organisems/Navbar";
import { useParams } from "react-router";
import axios from "axios";

const ListProducts = () => {
  const { catId } = useParams();

  const [data, setData] = useState([]);
  const [catData, setCatData] = useState([]);

  const fetchDataCategory = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/category/${catId}`
    );

    setCatData(response.data);
  };

  const fetchData = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/product/category/${catId}`
    );

    setData(response.data);
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
          <p className="text-[#213875] font-semibold">Kategori</p>
          <h1 className="text-[#213875] text-4xl font-bold mb-4">
            {catData.title}
          </h1>
          <p className="p-4 md:px-10">{catData.description}</p>
        </div>
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 p-4 md:px-10">
          {data &&
            data.map((item, i) => (
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
