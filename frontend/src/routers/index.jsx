import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ListProducts from "../pages/ListProduct";
import Checkout from "../pages/Checkout";
import SearchPage from "../pages/SearchPage";
import DetailProductPage from "../pages/DetailProductPage";

export const router = createBrowserRouter([
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "products/:catId",
    element: <ListProducts />,
  },
  {
    path: ":id",
    element: <DetailProductPage />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "search",
    element: <SearchPage />,
  },
]);
