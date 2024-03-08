import ListProductCard from "../../atoms/ListProductCard";
import ListCategoryCard from "../../atoms/ListProductCard";

const ListProducts = () => {
  return (
    <section className="py-4">
      <div className="text-center">
        <p className="text-[#213875] font-semibold">Category</p>
        <h1 className="text-[#213875] text-4xl font-bold mb-4">Gentlemen</h1>
        <p className="p-4 md:px-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae ipsum
          consectetur minus aspernatur deleniti quae voluptates nesciunt, eaque,
          officiis amet fugit nemo esse, voluptatem nam. Obcaecati, sit
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 p-4 md:px-10">
        <ListProductCard />
        <ListProductCard />
        <ListProductCard />
        <ListProductCard />
      </div>
    </section>
  );
};

export default ListProducts;
