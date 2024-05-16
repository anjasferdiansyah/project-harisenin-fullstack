import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ListProductCard from "../components/atoms/ListProductCard";
import HomeLayouts from "../layouts/HomeLayouts";

const SearchPage = () => {
  const { state } = useLocation();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/product?q=${state.searchInput}`
      );
      setData(response.data);
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <>
      <HomeLayouts>
        {data &&
          data.map((item) => {
            return (
              <ListProductCard
                key={item.id}
                id={item.id}
                listImage={item.listImage}
                title={item.title}
                price={`Rp${item.price.toLocaleString("id-ID")}`}
              />
            );
          })}
      </HomeLayouts>
    </>
  );
};

export default SearchPage;
