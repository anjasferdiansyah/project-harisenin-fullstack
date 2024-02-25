import Button from "../../molecules/Footer/Button";
import Input from "../../molecules/Footer/Input";

const NewsLatter = () => {
  return (
    <div className="flex flex-col gap-3 my-5 lg:my-0">
      <span className="font-bold">BERLANGGANAN</span>
      <span className="font-medium">
        Berlangganan untuk mendapatkan diskon 10% di pembelian pertama dan info
        terbaru produk kami.
      </span>
      <div className="flex flex-col gap-3 md:flex-row md:gap-0">
        <Input type="text" placeholder="Masukan Email" />
        <Button classname="bg-red-50 text-blue-950 py-3 px-8">SUBSCRIBE</Button>
      </div>
    </div>
  );
};

export default NewsLatter;
