import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/reducer/cartSlice";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Footer from "../components/organisems/Footer";
import Navbar from "../components/organisems/Navbar";
import { useParams } from "react-router-dom";

const DetailProductPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const dispatch = useDispatch()
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch("/src/data/listProducts.json");
    const json = await response.json();

    const findData = json.data.find((item) => item.id == parseInt(id));
    setData(findData);
  };
  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  const onClickAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: qty }));
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
    <div>
      <div className="flex justify-center flex-wrap">
        <Navbar />
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
        <div className="p-5 md:max-w-xl max-w-sm ">
          <div className="text-xl font-bold">{data && data.title}</div>
          <div className="text-xl font-bold">Rp{data && data.price.toLocaleString("id-ID")}</div>
          <div className="flex gap-2">
          <div className="h-12 flex m-2 border border-black w-max rounded-md">
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
            <button onClick={() => onClickAddToCart(data && data)} classname="bg-black text-white px-3 py-1 w-full rounded">
              Add to cart
            </button>
          </div>
          <div className="text-sm ">Detail</div>
          <div className="text-sm ">{data && data.desc}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailProductPage;
