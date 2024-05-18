/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ListProductSlider from "../ListProductSlider";

const ListProductCard = ({ listImage, title, price, id }) => {
  console.log(listImage);
  const imgs = listImage.split(", ");

  return (
    <div className=" p-4 shadow-md rounded-t-md">
      <div className="group relative overflow-hidden">
        <ListProductSlider listImage={imgs} />
      </div>
      <div className="text-[#213875]">
        <Link className="group" to={`/${id}`}>
          <div className="relative hover:text-white before:block before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#213875]  before:scale-x-0 group-hover:before:scale-x-[100%] before:origin-right group-hover:before:origin-left before:transition-transform before:duration-[700ms] before:ease-[cubic-bezier(0.19,1,0.22,1)] before:delay-0 before:z-0">
            <p className="relative my-2 text-xl pl-5 group-hover:text-white">
              {title}
            </p>
          </div>
          <p className="relative text-md font-semibold pl-5">{price}</p>
        </Link>
      </div>
    </div>
  );
};

export default ListProductCard;
