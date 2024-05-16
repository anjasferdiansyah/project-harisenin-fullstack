import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import { useRef } from "react";

const ListProductSlider = ({ listImage }) => {
  console.log(listImage[0]);

  const swiperContainerRef = useRef();

  const handlePrev = () => {
    swiperContainerRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    swiperContainerRef.current.swiper.slideNext();
  };

  return (
    <div className="transition-all ease-in duration-75 object-cover">
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
        cssMode
        mousewheel
        draggable
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        className=""
        speed={200}
      >
        <SwiperSlide
          className={`relative aspect-[3/2] after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full ${
            listImage ? "after:bg-[url(" + listImage[0] + ")]" : ""
          } after:bg-cover after:transition-all after:duration-[250ms] after:opacity-100 after:group-hover:opacity-0 ease-[cubic-bezier(0.19,1,0.22,1)]`}
        >
          <img
            src={listImage[0]}
            alt=""
            className="object-cover rounded-t-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={listImage[1]} alt="" className="object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={listImage[2]} alt="" className="object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ListProductSlider;
