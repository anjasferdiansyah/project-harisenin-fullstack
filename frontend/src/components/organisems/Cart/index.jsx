import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../../store/reducer/cartSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Cart = ({ show }) => {
  const [showDiscount, setShowDiscount] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const totalPrice = (items) => {
    let total = 0;
    for (const item of items) {
      total += item.price * item.quantity;
    }
    return total;
  };
  const price = totalPrice(cartItems);

  const onClickRemoveFromCart = (index) => {
    dispatch(removeFromCart(index));
  };

  const onClickShowDiscount = () => {
    setShowDiscount(!showDiscount);
  };

  const incrementQty = () => {
    setQty(qty + 1);
  };

  const decrementQty = () => {
    if (qty == 1) {
      setQty(1);
    } else {
      setQty(qty - 1);
    }
  };

  const onChangeQty = (e) => {
    setQty(e.target.value);
  };

  return (
    <div
      className={`absolute w-full md:w-[470px] md:h-[850px] top-[60px] right-[0] overflow-hidden ${
        show ? "" : "hidden"
      }`}
    >
      <div
        className={`flex-col bg-white w-full h-[90vh] md:w-[470px] md:h-[850px] border border-t-1 right-0 top-[60px]  transition-transform   ${
          show ? "" : "translate-x-full"
        } `}
      >
        <ul className="p-11 bg-white overflow-y-auto  scrollbar-thin scrollbar-thumb-[#4a5568] scrollbar-track-[#cbd5e0]">
          {cartItems.map((item, index) => (
            <li className="flex pt-5 pb-8 border-b border-gray-200" key={index}>
              <div className="w-56 mr-4">
                <img src={item.listImage[0]} alt="" />
              </div>
              <div className="flex flex-col w-full ">
                <div className="flex text-md text-[#213775]">
                  <p className="font-semibold">{item.title}</p>
                  <div className="mx-auto"></div>
                  <p className="font-semibold text-md">
                    Rp{item.price.toLocaleString("id-ID")}
                  </p>
                </div>
                <div className=" flex m-2 ">
                  <div className="flex border border-blue-200 w-max">
                    <div
                      onClick={decrementQty}
                      id="decrement"
                      className="mx-1.5  cursor-pointer font-bold"
                    >
                      -
                    </div>
                    <input
                      type="text"
                      className="w-7 text-center border"
                      id="inputQty"
                      value={item.quantity}
                      onChange={onChangeQty}
                    />

                    <div
                      onClick={() => incrementQty(index)}
                      id="increment"
                      className="mx-1.5  cursor-pointer font-bold"
                    >
                      +
                    </div>
                  </div>
                  <div
                    onClick={() => onClickRemoveFromCart(index)}
                    className="ml-5 text-xs my-auto text-gray-500 cursor-pointer"
                  >
                    REMOVED
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="my-auto"></div>
        <hr />
        <div className="p-11 text-[#213875] bg-white">
          <div className="flex font-semibold text-sm tracking-wider">
            <p>DELIVERY</p>
            <div className="mx-auto"></div>
            <p>$0.00</p>
          </div>
          <div className="flex font-semibold text-sm tracking-wider mb-2 mt-1">
            <p>Vat (INCLUDING)</p>
            <div className="mx-auto"></div>
            <p>$0.00</p>
          </div>
          <div>
            <p
              onClick={onClickShowDiscount}
              className={`font-semibold text-sm tracking-wide cursor-pointer ${
                showDiscount ? "hidden" : ""
              }`}
            >
              Use a dicount code
            </p>
            <div
              className={`grid grid-rows-1 grid-flow-col gap-1 mt-8 ${
                showDiscount ? "" : "hidden"
              }`}
            >
              <input
                type="text"
                placeholder="Dou you have a dicsount code?"
                className="col-span-2 p-3 w-full border border-gray-400"
              />
              <button className="border row-span-3 text-[#213775] text-xs font-bold uppercase tracking-[0.18em] bg-white h-16 relative overflow-hidden transition-all duration-200 ease-in-out hover:text-white hover:scale-100 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#213775] before:to-[#213775] before:transition-all before:duration-200 before:ease-in-out before:z-[-1] hover:before:left-0  ">
                ADD <br /> TO
              </button>
              <i
                onClick={onClickShowDiscount}
                className="absolute text-xl bottom-[260px] right-8 fa-regular fa-circle-xmark cursor-pointer"
              ></i>
            </div>
          </div>
          <div className="flex my-5 text-xl mt-2 font-bold m-0">
            <p>TOTAL</p>
            <div className="mx-auto"></div>
            <p>Rp{price.toLocaleString("id-ID")}</p>
          </div>
          <Link to="/checkout">
            <button className="border text-white text-md uppercase font-semibold tracking-[0.18em] bg-[#213775] w-full p-3 relative overflow-hidden transition-all duration-200 ease-in-out hover:text-[#213775] hover:scale-100 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#f6ddda] before:to-[#f6ddda] before:transition-all before:duration-200 before:ease-in-out before:z-[-1] hover:before:left-0  ">
              CONTINUE TO ORDER
            </button>
          </Link>
          <button className="mt-2 text-md uppercase font-semibold text-[#213775] w-full p-3 ">
            CONTINUE SHOPPING
          </button>
        </div>
      </div>
    </div>
  );
};
