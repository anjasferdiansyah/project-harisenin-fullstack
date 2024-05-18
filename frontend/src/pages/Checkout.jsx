import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/organisems/Footer";
import Navbar from "../components/organisems/Navbar";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSWR from "swr";
import { fetchCart } from "../store/action/cartAction";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(fetchCart(token));
    }
  }, [dispatch, token]);

  const total = cartItems.reduce((acc, item) => {
    const price = item.product && item.product.price ? item.product.price : 0;
    const totalPrice = price * item.qty;
    return acc + totalPrice;
  }, 0);

  const navigate = useNavigate();
  const handleCheckout = () => {
    toast.success("Payment Successfull 😍!");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  // hook
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let userData;

  const getToken = sessionStorage.getItem("token");
  if (getToken) {
    const decodeToken = (token) => {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
      return JSON.parse(jsonPayload);
    };

    userData = decodeToken(getToken);
  }

  useEffect(() => {
    if (getToken) {
      setIsLoggedIn(true);
      setFirstname(userData.firstName);
      setLastname(userData.lastName);
      setAddress(userData.address);
      setPhone(userData.phoneNumber);
      console.log(phone);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div className="flex container mx-auto gap-16 my-16 flex-wrap px-4">
        <div className="container mx-auto border rounded-md p-8 ">
          <div className="text-[#213775] font-bold">Informasi Kontak</div>
          <div>
            {firstname} {lastname}
          </div>
          <div className="border-b my-4"></div>
          <div className="text-[#213775] font-bold">Alamat Pengiriman</div>
          <div>
            <span>{address}</span> <span>{phone}</span>
          </div>
        </div>

        <div className="container mx-auto border rounded-md p-12">
          {cartItems.map((item) => (
            <li
              className="flex pt-5 pb-8 border-b border-gray-200"
              key={item.productId}
            >
              <div className="w-28 mr-4">
                {item.product && item.product.listImage ? (
                  <img
                    className="w-full h-full"
                    src={item.product.listImage[0]}
                    alt="image"
                  />
                ) : (
                  <div className="w-28 h-28 bg-gray-300" />
                )}
              </div>
              <div className="flex flex-col w-full ">
                <div className="flex text-md text-[#213775]">
                  <p className="font-semibold">
                    {item.product && item.product.title}
                  </p>
                  <div className="mx-auto"></div>
                  <p className="font-semibold text-md">
                    Rp
                    {item.product && item.product.price.toLocaleString("id-ID")}
                  </p>
                </div>
                <div className=" flex m-2 ">
                  <div className="flex border border-blue-200 w-max">
                    {/* <div
                      onClick={() => onClickDecrementQty(item.productId)}
                      id="decrement"
                      className="mx-1.5  cursor-pointer font-bold"
                    >
                      -
                    </div> */}
                    <p className="w-7 text-center border">{item && item.qty}</p>

                    {/* <div
                      onClick={() => onClickIncrementQty(item.productId)}
                      id="increment"
                      className="mx-1.5  cursor-pointer font-bold"
                    >
                      +
                    </div> */}
                  </div>
                  {/* <div
                    onClick={() => onClickRemoveFromCart(item.productId)}
                    className="ml-5 text-xs my-auto text-gray-500 cursor-pointer"
                  >
                    BUANG
                  </div> */}
                </div>
              </div>
            </li>
          ))}
          <div className=" text-[#213875] bg-white">
            <div className="flex my-2 text-xl font-bold">
              <p>TOTAL</p>
              <div className="mx-auto"></div>
              <p>Rp{total.toLocaleString("id-ID")}</p>
            </div>
          </div>
        </div>

        <button
          onClick={handleCheckout}
          type="submit"
          className="text-white text-xs uppercase tracking-[0.18em] bg-[#213775] w-full md:w-52 p-3 relative overflow-hidden transition-all duration-200 ease-in-out hover:text-[#213775] hover:scale-100 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#f6ddda] before:to-[#f6ddda] before:transition-all before:duration-200 before:ease-in-out before:z-[-1] hover:before:left-0 "
        >
          Proceed to payment
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
