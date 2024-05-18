import { useEffect, useState } from "react";
import Navbar from "../components/organisems/Navbar";
import Footer from "../components/organisems/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/action/authAction";

function LoginLayouts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const [isLoading, setIsLoading] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault()
    const { email, password } = formData;

    if(!email || !password){
      toast.error('Please fill in all fields')
      return;
    }

    dispatch(login(email, password, navigate));
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="container max-w-lg mx-auto my-16 text-[#213775] p-5">
        <h1 className="text-3xl md:text-5xl pb-8 font-bold text-center">
          Customer Login
        </h1>
        <form onSubmit={handleLogin}>
          <div className="">E-mail address</div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border border-[#213775] w-full p-2 mb-4 "
          />
          <div className="">Password</div>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="border border-[#213775] w-full p-2 "
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#213775] text-white py-2 px-8 w-full mt-8 uppercase hover:bg-[#213775]/95"
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
          <p className="text-center text-black mt-6">
            Don&apos;t have an account?{" "}
            <a href="/register" className="text-[#213775] underline">
              Register
            </a>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default LoginLayouts;
