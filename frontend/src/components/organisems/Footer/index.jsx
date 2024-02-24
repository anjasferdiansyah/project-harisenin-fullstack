import ListFooter from "./ListFooter";
import FollowUs from "./FollowUs";
import NewsLatter from "./NewsLatter";
import Reviews from "./Reviews";
function Footer() {
  return (
    <>
      <footer className="py-8 px-5 lg:p-16 bg-blue-900 text-white font-futura text-xs">
        <ListFooter />

        <div className="flex flex-col lg:flex-row gap-10">
          <FollowUs />
          <NewsLatter />
          <Reviews />
        </div>
      </footer>
    </>
  );
}

export default Footer;
