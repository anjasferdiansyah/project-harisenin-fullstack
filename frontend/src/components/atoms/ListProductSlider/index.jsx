import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { useRef, useState } from "react";

const ListProductSlider = () => {
  const swiperContainerRef = useRef();

  const handlePrev = () => {
    swiperContainerRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    swiperContainerRef.current.swiper.slideNext();
  };

  return (
    <div className="transition-all ease-in duration-75">
      <button
        className={`text-gray-500 hover:bg-gray-200/50 p-2 absolute top-1/2 left-0 translate-x-[-80%] md:group-hover:translate-x-0 transition-transform ease-in duration-75 z-10`}
        onClick={handlePrev}
      >
        <svg
          className="rotate-180"
          aria-hidden="true"
          width="1em"
          height="1em"
          viewBox="0 0 25 38.6"
        >
          <path
            fill="currentColor"
            fillRule="nonzero"
            d="m25 19.3-19.4-19.3-5.6 5.5 13.8 13.8-13.8 13.8 5.6 5.5 15.5-15.4z"
          ></path>
        </svg>
      </button>
      <button
        className="text-gray-500 md:hover:bg-gray-200/50 p-2 absolute top-1/2 right-0 translate-x-[80%] md:group-hover:translate-x-0 transition-transform ease-in duration-75 z-10"
        onClick={handleNext}
      >
        <svg aria-hidden="true" width="1em" height="1em" viewBox="0 0 25 38.6">
          <path
            fill="currentColor"
            fillRule="nonzero"
            d="m25 19.3-19.4-19.3-5.6 5.5 13.8 13.8-13.8 13.8 5.6 5.5 15.5-15.4z"
          ></path>
        </svg>
      </button>
      <Swiper
        ref={swiperContainerRef}
        navigation
        cssMode
        mousewheel
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        className=""
        speed={200}
      >
        <SwiperSlide className="relative group">
          <img src="https://source.unsplash.com/600x800?clothes" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/600x800?jeans" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/600x800?shoes" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ListProductSlider;
