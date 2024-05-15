import { useLocation } from "react-router-dom";

const SearchPage = () => {
  const { state } = useLocation();

  const { searchInput } = state;
  console.log(state);
  return <div>{searchInput}</div>;
};

export default SearchPage;
