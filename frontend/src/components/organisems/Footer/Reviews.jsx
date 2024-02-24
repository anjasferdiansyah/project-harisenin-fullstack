import IconTrusted from "../../../assets/img/icon-trusted.svg";
import IconStarFull from "../../../assets/img/icon-star.svg";
import IconStarHalf from "../../../assets/img/icon-star-half.svg";
const Reviews = () => {
  return (
    <div className="flex flex-col my-8 gap-3 lg:my-0 md:w-1/3 w-full">
      <span className="font-bold">PENILAIAN KONSUMEN</span>
      <div className="flex gap-3">
        <div>
          <img src={IconTrusted} alt="icon-trusted" width={90} />
        </div>
        <div className="flex flex-col gap-1">
          <span>Excellent</span>
          <span className="flex">
            <img src={IconStarFull} alt="star-full" width={20} />
            <img src={IconStarFull} alt="star-full" width={20} />
            <img src={IconStarFull} alt="star-full" width={20} />
            <img src={IconStarFull} alt="star-full" width={20} />
            <img src={IconStarHalf} alt="star-half" width={11} />
          </span>
          <div>
            4.53/ <span className="font-extrabold">5.0</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <span>Ulasan pelanggan</span>
        <span className="text-red-50 font-bold">3698 reviews</span>
      </div>
    </div>
  );
};

export default Reviews;
