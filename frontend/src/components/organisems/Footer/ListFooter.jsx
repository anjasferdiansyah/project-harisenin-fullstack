import List from "../../molecules/Footer/List";

const ListFooter = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 font-extrabold">
          <List href="#layanan-pelanggan">LAYANAN PELANGGAN</List>
          <List href="#syarat-dan-ketentuan">SYARAT DAN KETENTUAN</List>
          <List href="#alamat-toko">ALAMAT TOKO</List>
          <List href="#privasi">PRIVASI</List>
          <List href="#tentang">TENTANG</List>
          <List href="#kontak">KONTAK</List>
        </div>
      </div>
      <hr className="mt-20 mb-5 lg:mt-40 lg:mb-10" />
    </>
  );
};

export default ListFooter;
