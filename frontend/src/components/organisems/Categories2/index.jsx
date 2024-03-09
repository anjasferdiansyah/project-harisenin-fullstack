function Category() {
  return (
    <section className="py-12">
      <div className="w-full mx-auto mt-10">
        <div className="w-full px-4 md:px-8 lg:px-10">
          <div
            className="scroller scroll-pl-12 grid grid-flow-col auto-cols-[100%] md:auto-cols-[32%] overflow-auto overscroll-x-contain gap-4 snap-x snap-mandatory hover:scroll-pl-4"
            id="slider-img"
          >
            <a
              href=""
              className="w-full object-cover overflow-hidden group relative aspect-auto snap-center"
            >
              <img
                src="./src/assets/img/kategori4.webp"
                className="relative group-hover:scale-110 transition-all duration-300 group-hover:transition-all group-hover:duration-300"
                alt=""
              />
              <div className="absolute top-[40%] py-4 w-full">
                <h3 className="text-white text-xl md:text-2xl lg:text-3xl uppercase font-semibold text-center">
                  PAKAIAIN MENDAKI
                </h3>
              </div>
            </a>
            <a
              href=""
              className="w-full object-cover overflow-hidden group relative aspect-auto snap-center"
            >
              <img
                src="./src/assets/img/kategori5.webp"
                className="relative group-hover:scale-110 transition-all duration-300 group-hover:transition-all group-hover:duration-300"
                alt=""
              />
              <div className="absolute top-[40%] py-4 w-full">
                <h3 className="text-white text-xl md:text-2xl lg:text-3xl uppercase font-semibold text-center">
                  PAKAIAN BERSEPEDA
                </h3>
              </div>
            </a>
            <a
              href=""
              className="w-full object-cover overflow-hidden group relative aspect-auto snap-center"
            >
              <img
                src="./src/assets/img/kategori6.jpg"
                className="relative group-hover:scale-110 transition-all duration-300 group-hover:transition-all group-hover:duration-300"
                alt=""
              />
              <div className="absolute top-[40%] py-4 w-full">
                <h3 className="text-white text-xl md:text-2xl lg:text-3xl uppercase font-semibold text-center">
                  PAKAIAN RENANG
                </h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
