import ListProductSlider from "../ListProductSlider";

const ListProductCard = () => {
  return (
    <div>
      <div className="w-full aspect-[4/5] group relative overflow-hidden">
        <ListProductSlider />
      </div>
      <div className="text-[#213875]">
        <h3 className="text-lg font-normal my-2 leading-tight">
          KEMEJA baru nike
        </h3>
        <p className="text-md font-semibold">Rp 200.000</p>
      </div>
    </div>
  );
};

export default ListProductCard;
