import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/organisems/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../components/organisems/Footer";

function RegisterLayouts() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    phoneNumber: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { password, confirmPassword, ...otherData } = formData;
    console.log(formData);

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/user/register`,
      {
        ...otherData,
        password: password,
      }
    );

    console.log(response);

    if (response.status !== 201) {
      toast.error("Registration failed.");
      return;
    }

    toast.success("Registration successful!");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="container max-w-3xl mx-auto my-16 text-[#213775] p-5">
        <h1 className="text-3xl md:text-5xl pb-8 font-bold text-center">
          Register
        </h1>
        <form
          onSubmit={handleRegister}
          method="post"
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="mb-4">
            <label htmlFor="f-name">FIRST NAME</label>
            <input
              type="text"
              id="f-name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-blue-900"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="l-name">LAST NAME</label>
            <input
              type="text"
              id="l-name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-blue-900"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="l-name">GENDER</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-blue-900"
              required
            >
              <option value="">Select</option>
              <option value="pria">Pria</option>
              <option value="wanita">Wanita</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="e-mail">E-MAIL ADDRESS</label>
            <input
              type="email"
              id="e-mail"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-blue-900"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="e-mail">USERNAME</label>
            <input
              type="text"
              id="u-name"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-blue-900"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone">PHONE</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-blue-900"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone">ADDRESS</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-blue-900"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Minimum 8 characters"
              className="mt-1 p-2 w-full border border-blue-900"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmpass">CONFIRM PASSWORD</label>
            <input
              type="password"
              id="confirmpass"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm your password"
              className="mt-1 p-2 w-full border border-blue-900"
              required
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-[#213775] text-white py-2 mt-4 px-8 w-full uppercase hover:bg-[#213775]/95"
            >
              <p>REGISTER</p>
            </button>
            <p className="text-center text-black mt-6">
              Have an account?{" "}
              <a href="/login" className="text-[#213775] underline">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default RegisterLayouts;
