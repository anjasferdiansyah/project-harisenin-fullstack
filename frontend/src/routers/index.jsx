import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages";
import Login from "../pages/login";
import Register from "../pages/register";
import ListProducts from "../pages/ListProduct";
import Checkout from "../pages/Checkout";
import DetailProductPage from "../pages/detailProductPage";

export const router = createBrowserRouter([
  {
    path: "/checkout",
    element: <Checkout/>,
  },
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "category",
    element: <ListProducts />,
  },
  {
    path: "category/:category",
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
]);
