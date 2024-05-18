import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ListProductCard from "../components/atoms/ListProductCard";
import HomeLayouts from "../layouts/HomeLayouts";

const SearchPage = () => {
  const { state } = useLocation();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/product?q=${state.searchInput}`
      );
      setData(response.data);
    };
    setIsLoading(true);
    fetchData();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [state]);

  console.log(data);
  return (
    <>
      <HomeLayouts>
        <div>
          <h1 className="text-[#213875] text-4xl font-bold mb-4 pt-10 pl-8">
            Hasil Pencarian
          </h1>
          <p className="text-[#213875] text-2xl font-bold mb-4 pl-8">
            {state.searchInput}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 px-8">
          {!isLoading ? (
            data.map((item, i) => (
              <ListProductCard
                key={i}
                id={item.id}
                listImage={item.listImage}
                title={item.title}
                price={`Rp${item.price.toLocaleString("id-ID")}`}
              />
            ))
          ) : (
            <>
              <div className="flex flex-col gap-2">
                <div className="h-[350px] bg-gray-200 animate-pulse rounded"></div>
                <div className="h-[20px] max-w-[50%] bg-gray-200 animate-pulse rounded"></div>
                <div className="h-[10px] max-w-[50%] bg-gray-200 animate-pulse rounded"></div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-[350px] bg-gray-200 animate-pulse rounded"></div>
                <div className="h-[20px] max-w-[50%] bg-gray-200 animate-pulse rounded"></div>
                <div className="h-[10px] max-w-[50%] bg-gray-200 animate-pulse rounded"></div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-[350px] bg-gray-200 animate-pulse rounded"></div>
                <div className="h-[20px] max-w-[50%] bg-gray-200 animate-pulse rounded"></div>
                <div className="h-[10px] max-w-[50%] bg-gray-200 animate-pulse rounded"></div>
              </div>
            </>
          )}
        </div>
      </HomeLayouts>
    </>
  );
};

export default SearchPage;
