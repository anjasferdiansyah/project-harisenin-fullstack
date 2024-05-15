import axios from "axios";
import React, { useEffect, useState } from "react";
import ListProductCard from "../../atoms/ListProductCard";

const Products = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/product`
    );
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="container mx-auto mt-16 px-4" id="all-products">
      <div className="text-center">
        <h1 className="text-[#213875] text-4xl font-bold mb-4">All Product</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
        {data.map((item, i) => (
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
  );
};

export default Products;
