import { useEffect, useRef, useState } from "react";
import PopularCategoryCard from "../../molecules/PopularCategoryCard";

const listImage = [
  {
    img: "../src/assets/img/image-popular2.webp",
    catTitle: "baju sport musim dingin wanita",
  },
  {
    img: "../src/assets/img/image-popular1.webp",
    catTitle: "baju sport musim dingin pria",
  },
  {
    img: "../src/assets/img/image-popular3.webp",
    catTitle: "baju outdoor wanita",
  },
  {
    img: "../src/assets/img/image-popular4.webp",
    catTitle: "baju outdoor pria",
  },
  {
    img: "../src/assets/img/image-popular5.webp",
    catTitle: "baju wanita",
  },
  {
    img: "../src/assets/img/image-popular6.webp",
    catTitle: "baju pria",
  },
  {
    img: "../src/assets/img/image-popular7.webp",
    catTitle: "baju sport musim dingin anak laki-laki",
  },
  {
    img: "../src/assets/img/image-popular8.webp",
    catTitle: "baju sport musim dingin anak perempuan",
  },
];
const PopularCategory = () => {
  const [isdisabledLeft, setDisabledLeft] = useState(false);
  const [isdisabledRight, setDisabledRight] = useState(false);
  const buttonLeft = useRef(null);
  const buttonRight = useRef(null);
  const scroller = useRef(null);

  useEffect(() => {
    const currentScroller = scroller.current;
    currentScroller.addEventListener("scroll", handleScroll);
    return () => {
      currentScroller.removeEventListener("scroll", handleScroll);
    };
  }, [scroller]);
  const handleLeft = () => {
    scroller.current.scrollLeft -= 250;
  };

  const handleScroll = () => {
    if (scroller.current.scrollLeft === 0) {
      setDisabledLeft(true);
    } else if (
      scroller.current.scrollWidth - scroller.current.scrollLeft ===
      scroller.current.clientWidth
    ) {
      setDisabledRight(true);
    } else {
      setDisabledLeft(false);
      setDisabledRight(false);
    }
  };

  const handleRight = () => {
    scroller.current.scrollLeft += 250;
  };

  return (
    <section className="py-12">
      <div className="my-8 px-4 md:px-8 lg:px-10 flex justify-between">
        <h1 className="text-xl md:text-2xl font-semibold text-blue-950 px-4">
          Kategori Populer
        </h1>
        <div className="hidden md:flex md:gap-2">
          <button
            className={`${
              isdisabledLeft ? "text-blue-950/20" : "text-blue-950"
            }`}
            id="left"
            ref={buttonLeft}
            onClick={handleLeft}
          >
            <svg
              className="rotate-180"
              viewBox="0 0 320 512"
              width="1em"
              height="1em"
              aria-hidden="true"
            >
              <path
                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <button
            className={`${
              isdisabledRight ? "text-blue-950/20" : "text-blue-950"
            }`}
            id="right"
            ref={buttonRight}
            onClick={handleRight}
          >
            <svg
              viewBox="0 0 320 512"
              width="1em"
              height="1em"
              aria-hidden="true"
            >
              <path
                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full mx-auto mt-10">
        <div className="w-full px-4 md:px-8 lg:px-10">
          <div
            ref={scroller}
            className="scroller px-4 grid grid-flow-col auto-cols-[100%] md:auto-cols-[30%] overflow-auto overscroll-x-contain gap-2 snap-x snap-mandatory scroll-smooth scroll-px-4"
            id="slider-img"
          >
            {listImage.map((item, index) => {
              return (
                <PopularCategoryCard
                  key={index}
                  image={item.img}
                  catTitle={item.catTitle}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCategory;
