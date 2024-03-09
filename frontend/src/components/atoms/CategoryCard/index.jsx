import { Link } from "react-router-dom";

const CategoryCard = ({ catImage, catTitle, id }) => {
  return (
    <Link
      to={`/products/${id}`}
      className="w-full object-cover overflow-hidden group relative aspect-auto snap-center"
    >
      <img
        src={catImage}
        className="relative group-hover:scale-110 transition-all duration-300 group-hover:transition-all group-hover:duration-300"
        alt=""
      />
      <div className="absolute top-[40%] py-4 w-full">
        <h3 className="text-white text-xl md:text-2xl lg:text-3xl uppercase font-semibold text-center">
          {catTitle}
        </h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
