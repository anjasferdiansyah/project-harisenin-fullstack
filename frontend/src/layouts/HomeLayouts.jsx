/* eslint-disable react/prop-types */
import Navbar from "../components/organisems/Navbar";
import Footer from "../components/organisems/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HomeLayouts({ children }) {
  return (
    <>
      <Navbar />
      <ToastContainer />
      {children}
      <Footer />
    </>
  );
}

export default HomeLayouts;
