import Categories from "../components/organisems/Categories";
import Category from "../components/organisems/Categories2";
import PopularCategory from "../components/organisems/PopularCategory";
import HomeLayouts from "../layouts/HomeLayouts";

function Homepage() {
  return (
    <>
      <HomeLayouts>
        <Categories />
        <PopularCategory />
        <Category />
      </HomeLayouts>
    </>
  );
}

export default Homepage;
