import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages";
import Login from "../pages/login";
import Register from "../pages/register";
import ListProducts from "../pages/ListProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "category/:category",
    element: <ListProducts />,
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
