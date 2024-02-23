// eslint-disable-next-line react/prop-types
const PopularCategoryCard = ({ image, catTitle }) => {
  return (
    <a href="" className="w-full overflow-hidden group relative snap-center">
      <img
        src={image}
        className="relative w-full h-full object-cover group-hover:scale-110 transition-all duration-300 group-hover:transition-all group-hover:duration-300"
        alt=""
      />
      <div className="absolute top-[40%] py-4 w-full bg-black/35">
        <h3 className="text-white text-xl md:text-2xl lg:text-3xl uppercase font-semibold text-center">
          {catTitle}
        </h3>
      </div>
    </a>
  );
};

export default PopularCategoryCard;
