import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TopBar from "../../molecules/TopBar";
import { Cart } from "../Cart";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [viewCart, setViewCart] = useState(false);
  const [clickedSearch, setClickedSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const getToken = sessionStorage.getItem("token");

  let userData;
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

  const toggleCart = () => {
    setViewCart(!viewCart);
  };

  useEffect(() => {
    if (getToken) {
      setIsLoggedIn(true);
      setUserName(userData.username);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/search", { state: { searchInput: searchInput } });
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <TopBar />
      <header className="flex flex-nowrap justify-between z-10 bg-[#ffffff] w-full h-[61px] sticky top-0 border-y border-[#dee1ea]">
        <div className="flex">
          <button className="grid place-items-center m-0 py-[23px] px-[32px] border-r border-[#dee1ea] cursor-pointer overflow-visible">
            <span className="bg-[#213875] w-[19px] h-[2px] mb-[3px] relative"></span>
            <span className="bg-[#213875] w-[19px] h-[2px] mb-[3px] relative"></span>
            <span className="text-center text-[8px] text-500 leading-[8px]">
              MENU
            </span>
          </button>
        </div>
        <div className="hidden min-[940px]:contents">
          <nav className="flex">
            <div
              onClick={() => {
                setClickedSearch(!clickedSearch);
              }}
              className={`relative flex justify-center items-center border-r border-[#dee1ea] h-full py-0 px-[15px] text-[#213875] ${
                clickedSearch
                  ? "w-[200px] transition-all duration-300 ease-in-out"
                  : "w-[100px] transition-all duration-300 ease-in-out"
              }`}
            >
              <label
                className={`absolute transition-all duration-300 ease-in ${
                  clickedSearch
                    ? "z-10 transform -translate-x-[70px] -translate-y-[13px] text-xs transition-all duration-300 ease-in"
                    : ""
                }`}
                htmlFor="search"
              >
                Search
              </label>
              <input
                onClick={(e) => e.stopPropagation()}
                disabled={!clickedSearch}
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
                className={`${
                  clickedSearch
                    ? "w-full focus:outline-none mt-3 disabled:bg-inherit"
                    : "w-0 overflow-hidden"
                }`}
                id="search"
                type="text"
              />
              <button
                onClick={(e) => handleSearch(e)}
                className={`mt-2 ${clickedSearch ? "block" : "hidden"}`}
              >
                {" "}
                <svg
                  width="1rem"
                  height="1rem"
                  className="overflow-hidden"
                  viewBox="0 0 31 31"
                >
                  <path
                    fill="currentColor"
                    fillRule="nonzero"
                    d="M4,13.293 C4,8.169 8.169,4 13.293,4 C18.418,4 22.587,8.169 22.587,13.293 C22.587,18.418 18.418,22.587 13.293,22.587 C8.169,22.587 4,18.418 4,13.293 M29.684,26.638 L24.08,21.033 C25.65,18.851 26.587,16.182 26.587,13.293 C26.587,5.963 20.624,0 13.293,0 C5.963,0 0,5.963 0,13.293 C0,20.623 5.963,26.587 13.293,26.587 C16.294,26.587 19.056,25.576 21.283,23.893 L26.856,29.466 C27.246,29.856 27.758,30.052 28.27,30.052 C28.782,30.052 29.294,29.856 29.684,29.466 C30.465,28.685 30.465,27.419 29.684,26.638"
                  ></path>
                </svg>
              </button>
            </div>
          </nav>
        </div>
        {/* Logo */}
        <div className="grow-[3] grid place-items-center p-[5px]">
          <Link to={"/"}>
            <img src="/img/LOGO.png" alt="" width={40} />
          </Link>
        </div>
        <div className="flex grow shrink basis-0 h-[59px]">
          <div className="hidden min-[940px]:contents">
            <div className="flex text-center h-full">
              <div className="relative border-l border-[#dee1ea] font-400 text-[16px] no-underline">
                {isLoggedIn ? (
                  <div
                    className="relative grid place-items-center w-[100px] h-full py-0 px-[15px] text-[#213875]"
                    onClick={toggleDropdown}
                  >
                    <span className="text-center w-full overflow-hidden text-ellipsis leading-[22px]">
                      {userName}
                    </span>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="relative grid place-items-center w-[100px] h-full py-0 px-[15px] hover:text-white text-[#213875] before:block before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#213875] before:scale-y-0 hover:before:scale-y-[100%] before:origin-top hover:before:origin-bottom before:transition-transform before:duration-[700ms] before:ease-[cubic-bezier(0.19,1,0.22,1)] before:delay-0 before:z-0"
                  >
                    <span className="relative text-center w-full overflow-hidden text-ellipsis leading-[22px]">
                      Login
                    </span>
                  </Link>
                )}
                {dropdownOpen && isLoggedIn && (
                  <div
                    className="absolute top-[59px] left-0 w-[100px] bg-[#ffffff] border border-[#dee1ea] shadow-md"
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      className="w-full py-[10px] px-[15px] text-[#213875] text-left hover:bg-[#dee1ea]"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="contents min-[940px]:hidden">
            <button className="flex flex-nowrap items-center justify-center h-[59px] text-[#213875] cursor-pointer max-[1310px]:py-[19px] max-[1310px]:px-[20px] border-l border-[#dee1ea]">
              <svg
                width="1rem"
                height="1rem"
                className="overflow-hidden"
                viewBox="0 0 31 31"
              >
                <path
                  fill="currentColor"
                  fillRule="nonzero"
                  d="M4,13.293 C4,8.169 8.169,4 13.293,4 C18.418,4 22.587,8.169 22.587,13.293 C22.587,18.418 18.418,22.587 13.293,22.587 C8.169,22.587 4,18.418 4,13.293 M29.684,26.638 L24.08,21.033 C25.65,18.851 26.587,16.182 26.587,13.293 C26.587,5.963 20.624,0 13.293,0 C5.963,0 0,5.963 0,13.293 C0,20.623 5.963,26.587 13.293,26.587 C16.294,26.587 19.056,25.576 21.283,23.893 L26.856,29.466 C27.246,29.856 27.758,30.052 28.27,30.052 C28.782,30.052 29.294,29.856 29.684,29.466 C30.465,28.685 30.465,27.419 29.684,26.638"
                ></path>
              </svg>
            </button>
          </div>
          <button
            onClick={toggleCart}
            className="flex items-center justify-center h-[59px] border-l border-[#dee1ea] text-[#213875] cursor-pointer"
          >
            <span className="w-[12rem] text-[12px] font-bold uppercase tracking-[1px] leading-[12px] max-[992px]:hidden px-[35px] py-[19px]">
              shopping cart
            </span>
            <span className="min-[992px]:hidden overflow-hidden px-[20px] py-[19px]">
              <svg
                viewBox="0 0 35.8 40"
                className=""
                width="1rem"
                height="1rem"
              >
                <path
                  fill="currentColor"
                  fillRule="nonzero"
                  d="m29.3 12.7h-2.1v-4.2c0-.2 0-.3 0-.5-.3-4.5-4.6-8-9.4-8s-9.2 3.5-9.4 8v.5 4.2h-2.1c-3.7 0-6.3 2.2-6.3 5.8v19.3c0 1.2 1 2.2 2.3 2.2h31.2c1.3 0 2.3-1 2.3-2.1v-19.5c-.2-3.6-2.7-5.7-6.5-5.7zm-16.7-4.2c0-2.4 2.8-4.1 5.2-4.1s5.2 1.7 5.2 4.1v.3 3.9h-10.5zm18.8 27.2h-27.2v-16.7c0-1.2.9-2.1 2.1-2.1h2.1v2c0 1.2.9 2.1 2.1 2.1s2.1-1 2.1-2.1v-2h10.5v2.1c0 1.2.9 2.1 2.1 2.1 1.1 0 2.1-1 2.1-2.1v-2.1h2.1c1.2 0 2.1.9 2.1 2.1v16.7z"
                ></path>
              </svg>
            </span>
          </button>
          <Cart show={viewCart} />
        </div>
      </header>
    </>
  );
}

export default Navbar;
