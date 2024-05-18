import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, removeFromCart, incrementQty, decrementQty } from "../../../store/action/cartAction";
import { ToastContainer} from "react-toastify";
import useSwr from "swr";
import axios from "axios";

const fetcher = async (url) => {
  const token = sessionStorage.getItem("token");
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

export const Cart = ({ show }) => {
  const dispatch = useDispatch()
  const token = sessionStorage.getItem("token");

  const { data: cartItems, error} = useSwr(token ? `${import.meta.env.VITE_BACKEND_URL}/api/cart` : null, fetcher)
  
    // Handling loading and error states
    if (error) return <div>Failed to load cart</div>;
    if (!cartItems) return <div></div>;
  
    const total = cartItems.reduce((acc, item) =>{
      const price =item.product && item.product.price ? item.product.price : 0;
      const totalPrice = price * item.qty;
      return acc + totalPrice;
    }, 0);

  const onClickRemoveFromCart = (productId) => {
    dispatch(removeFromCart(token, productId))
  };

  const onClickIncrementQty = (productId) => {
    dispatch(incrementQty(token, productId))
  };

  const onClickDecrementQty = (productId) => {
    dispatch(decrementQty(token, productId))
  };

  const onChangeQty = (e) => {
    setQty(e.target.value);
  };

  return (
    <div
      className={`absolute w-full md:w-[470px] max-h-screen top-[60px] right-[0] ${
        show ? "" : "hidden"
      }`}
    >
      <div
        className={`flex-col bg-white w-full max-h-screen border border-t-1 right-0 top-[60px]  transition-transform   ${
          show ? "" : "translate-x-full"
        } `}
      >
        <ToastContainer />
        <ul className="p-11 bg-white overflow-y-auto md:h-[73vh] h-[45vh] scrollbar-thin scrollbar-thumb-[#4a5568] scrollbar-track-[#cbd5e0]">
          {cartItems.map((item) => (
            <li className="flex pt-5 pb-8 border-b border-gray-200" key={item.productId}>
              <div className="w-28 mr-4">
                  <img
                    src={item.product.listImage[0]}
                    alt={item.product.title}
                  />
              </div>
              <div className="flex flex-col w-full ">
                <div className="flex text-md text-[#213775]">
                  <p className="font-semibold">{item.product.title}</p>
                  <div className="mx-auto"></div>
                  <p className="font-semibold text-md">
                    Rp{item.product.price.toLocaleString("id-ID")}
                  </p>
                </div>
                <div className=" flex m-2 ">
                  <div className="flex border border-blue-200 w-max">
                    <div
                      onClick={() => onClickDecrementQty(item.productId)}
                      id="decrement"
                      className="mx-1.5  cursor-pointer font-bold"
                    >
                      -
                    </div>
                    <input
                      type="text"
                      className="w-7 text-center border"
                      id="inputQty"
                      value={item.qty}
                      onChange={onChangeQty}
                    />

                    <div
                      onClick={() => onClickIncrementQty(item.productId)}
                      id="increment"
                      className="mx-1.5  cursor-pointer font-bold"
                    >
                      +
                    </div>
                  </div>
                  <div
                    onClick={() => onClickRemoveFromCart(item.productId)}
                    className="ml-5 text-xs my-auto text-gray-500 cursor-pointer"
                  >
                    BUANG
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="my-auto"></div>
        <hr />
        <div className="p-11 text-[#213875] bg-white">
          <div className="flex my-5 text-xl mt-2 font-bold m-0">
            <p>TOTAL</p>
            <div className="mx-auto"></div>
            <p>Rp{total.toLocaleString("id-ID")}</p>
          </div>
          <Link to="/checkout">
            <button className="border text-white text-md uppercase font-semibold tracking-[0.18em] bg-[#213775] w-full p-3 relative overflow-hidden transition-all duration-200 ease-in-out hover:text-[#213775] hover:scale-100 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#f6ddda] before:to-[#f6ddda] before:transition-all before:duration-200 before:ease-in-out before:z-[-1] hover:before:left-0  ">
              PESAN SEKARANG
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
