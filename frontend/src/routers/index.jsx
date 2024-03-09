import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages";
import Login from "../pages/login";
import Register from "../pages/register";
import ListProducts from "../pages/ListProduct";
import DetailProductPage from "../pages/detailProductPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "products/:category",
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
]);
