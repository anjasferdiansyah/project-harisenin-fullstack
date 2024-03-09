import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Button from "../components/molecules/Footer/Button";
import Footer from "../components/organisems/Footer";
import Navbar from "../components/organisems/Navbar";

const DetailProductPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
                src="https://source.unsplash.com/600x800?clothes"
                alt=""
                className="object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/600x800?jeans"
                alt=""
                className="object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/600x800?shoes"
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
                src="https://source.unsplash.com/600x800?clothes"
                alt="product-images"
                className="rounded"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/600x800?jeans"
                alt="product-images"
                className="rounded"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/600x800?shoes"
                alt="product-images"
                className="rounded"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="p-5 md:max-w-xl max-w-sm ">
          <div className="text-xl font-bold">Judul Product</div>
          <div className="text-xl font-bold">Rp. 300.000</div>
          <div className="flex gap-2">
            <Button classname="bg-black text-white px-3 py-1 w-full rounded">
              Add to cart
            </Button>
            <Button classname="bg-black text-white px-3 py-1 w-full rounded">
              Add to cart
            </Button>
          </div>
          <div className="text-sm ">Detail</div>
          <div className="text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            perspiciatis eos modi consequatur sint a voluptate debitis quia
            temporibus iure? Eaque eos eum dolorum sed debitis libero assumenda
            iure error?
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailProductPage;
