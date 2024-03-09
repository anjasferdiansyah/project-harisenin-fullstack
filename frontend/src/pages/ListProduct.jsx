import ListProductCard from "../components/atoms/ListProductCard";
import ListCategoryCard from "../components/atoms/ListProductCard";
import Footer from "../components/organisems/Footer";
import Navbar from "../components/organisems/Navbar";

const ListProducts = () => {
  return (
    <>
      <Navbar />
      <section className="py-4">
        <div className="text-center">
          <p className="text-[#213875] font-semibold">Category</p>
          <h1 className="text-[#213875] text-4xl font-bold mb-4">Gentlemen</h1>
          <p className="p-4 md:px-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
            ipsum consectetur minus aspernatur deleniti quae voluptates
            nesciunt, eaque, officiis amet fugit nemo esse, voluptatem nam.
            Obcaecati, sit
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 p-4 md:px-10">
          <ListProductCard />
          <ListProductCard />
          <ListProductCard />
          <ListProductCard />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ListProducts;
