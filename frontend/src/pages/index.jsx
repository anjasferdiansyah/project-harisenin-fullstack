import HeroSection from "../components/molecules/HeroSection";
import Categories from "../components/organisems/Categories";
import PopularCategory from "../components/organisems/PopularCategory";
import HomeLayouts from "../layouts/HomeLayouts";

function Homepage() {
  return (
    <>
      <HomeLayouts>
        <HeroSection />
        <Categories />
        <PopularCategory />
      </HomeLayouts>
    </>
  );
}

export default Homepage;
