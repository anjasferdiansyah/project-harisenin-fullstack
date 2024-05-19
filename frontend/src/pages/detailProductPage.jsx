import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/action/cartAction";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import HomeLayouts from "../layouts/HomeLayouts";

const DetailProductPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/product/${id}`
    );
    if (!response.data) {
      return;
    }

    const { listImage } = response.data;
    const imgArray = response.data && listImage.split(",");
    setData({ ...response.data, listImage: imgArray });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onClickAddToCart = () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      setTimeout(() => {
        toast.error("Please login first");
      }, 2000);
      return;
    }
    setTimeout(() => {
      toast.success("Add to cart successfully");
    }, 2000);
    dispatch(addToCart(token, data && data.id, qty));
  };

  const incrementQty = () => {
    setQty(qty + 1);
  };

  const decrementQty = () => {
    if (qty == 1) {
      setQty(1);
    } else {
      setQty(qty - 1);
    }
  };

  const onChangeQty = (e) => {
    setQty(e.target.value);
  };

  return (
    <HomeLayouts>
      <div>
        <ToastContainer />
        <div className="flex justify-center flex-wrap">
          <div className="container max-w-sm ">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
              }}
              loop={true}
              spaceBetween={5}
              navigation={true}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="m-5 rounded"
            >
              <SwiperSlide>
                <img
                  src={data && data.listImage[0]}
                  alt=""
                  className="object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={data && data.listImage[1]}
                  alt=""
                  className="object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={data && data.listImage[2]}
                  alt=""
                  className="object-cover"
                />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={20}
              slidesPerView={3}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="m-5"
            >
              <SwiperSlide>
                <img
                  src={data && data.listImage[0]}
                  alt="product-images"
                  className="rounded"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={data && data.listImage[1]}
                  alt="product-images"
                  className="rounded"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={data && data.listImage[2]}
                  alt="product-images"
                  className="rounded"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="p-5 md:max-w-xl max-w-sm">
            <div className="text-4xl font-bold text-blue-900">
              {data && data.title}
            </div>
            <div className="text-xl font-bold">
              Rp{data && data.price.toLocaleString("id-ID")}
            </div>
            <div className="flex gap-2 items-center">
              <div className="h-10 flex my-2 border border-black w-max rounded-md">
                <i
                  onClick={decrementQty}
                  id="decrement"
                  className="fa-solid fa-minus mx-4 border-gray-700 flex items-center justify-center cursor-pointer"
                ></i>
                <input
                  type="text"
                  className="w-14 text-center"
                  id="inputQty"
                  value={qty}
                  onChange={onChangeQty}
                />
                <i
                  onClick={incrementQty}
                  id="increment"
                  className="fa-solid fa-plus mx-4 border-gray-100 flex items-center justify-center cursor-pointer"
                ></i>
              </div>
              <div>
                <button
                  onClick={onClickAddToCart}
                  className=" bg-blue-900 text-white w-full p-2 rounded font-semibold hover:bg-white hover:text-blue-800 border hover:scale-105"
                >
                  Keranjang
                </button>
              </div>
            </div>
            <div className="text-sm ">Detail</div>
            <div className="text-sm ">{data && data.desc}</div>
          </div>
        </div>
      </div>
    </HomeLayouts>
  );
};

export default DetailProductPage;
