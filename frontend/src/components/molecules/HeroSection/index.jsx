const HeroSection = () => {
  return (
    <section className="h-screen bg-cover bg-center">
      <div className="flex items-center justify-center">
        <img
          src="/img/hero-section.webp"
          alt=""
          className="w-full h-screen object-cover"
        />
        <div className="absolute items-end h-screen mx-auto top-[50%]">
          <div className="bg-black/45 z-10 text-white py-4 w-3/4 flex flex-col justify-between mx-auto items-center">
            <div className="mx-auto text-center lg:text-4xl">
              <a href="">
                <h1 className="font-bold sm:text-4xl xl:text-7xl pb-3 text-xs">
                  WARM AND STYLISH
                </h1>
              </a>
              <p className="sm:text-xl xl:text-2xl mt-2 sm:mt-5 sm:px-14 xl:px-40">
                Discover the new winter collection for
                <a
                  href=""
                  className="underline hover:text-blue-600 duration-200"
                >
                  Ladies
                </a>
                ,
                <a
                  href=""
                  className="underline hover:text-blue-600 duration-200"
                >
                  Gentlemen
                </a>
                ,
                <a
                  href=""
                  className="underline hover:text-blue-600 duration-200"
                >
                  Girls
                </a>
                ,
                <a
                  href=""
                  className="underline hover:text-blue-600 duration-200"
                >
                  Boys
                </a>
                and
                <a
                  href=""
                  className="underline hover:text-blue-500 duration-200"
                >
                  Toddlers
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
