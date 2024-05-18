import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Cart } from "../Cart";
import { useNavigate } from "react-router-dom";
import { Menu, Search, ShoppingCartIcon, X } from "lucide-react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [viewCart, setViewCart] = useState(false);
  const [clickedSearch, setClickedSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search`, {
      state: { searchInput: searchInput },
    });
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <header className="flex px-8 flex-nowrap justify-between z-10 bg-[#ffffff] h-[61px] items-center sticky top-0 border-y border-[#dee1ea]">
        {/* Search Button */}
        <div className=" hidden md:flex h-full">
          <div
            onClick={() => {
              setClickedSearch(!clickedSearch);
            }}
            className={`relative flex justify-center items-center border-r border-[#dee1ea] h-full py-0 px-[15px] text-[#213875] ${
              clickedSearch
                ? "w-[220px] transition-all duration-300 ease-in-out"
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
              Cari
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
        </div>
        {/* Logo */}
        <div className="">
          <Link to={"/"}>
            <svg
              width="90"
              height="50"
              viewBox="0 0 600 148"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M459.942 2.41231V142.872H495.101V58.8266L563.112 142.872H600V2.41231H563.112L566.571 87.6094L495.101 2.41231H459.942Z"
                fill="#213875"
              />
              <path
                d="M368.3 2.41231V142.872H447.262V114.665H403.458V87.6094H447.262V58.8266H403.458V32.3464H447.262V2.41231H368.3Z"
                fill="#213875"
              />
              <path
                d="M277.233 2.41231V32.3464H310.086L264.553 142.872H300.288L358.501 2.41231H277.233Z"
                fill="#213875"
              />
              <path
                d="M200.576 2.41231L255.331 127.905L273.199 87.6094L236.311 2.41231H200.576Z"
                fill="#213875"
              />
              <path
                d="M114.121 2.41231V142.872H193.084V114.665H151.009V87.6094H193.084V58.8266H151.009V32.3464H193.084V2.41231H114.121Z"
                fill="#213875"
              />
              <path
                d="M83.5735 38.6786C73.391 32.5383 51.5274 23.1359 45.5331 34.649C39.5389 46.1622 53.7944 54.0295 61.6715 56.524C75.5043 60.1698 102.939 73.6785 102.017 98.5469C100.865 129.632 80.1153 146.902 55.3314 147.478C35.5043 147.938 10.1825 136.924 0 131.359L14.9856 103.728C20.5572 108.333 34.4668 117.544 45.5331 117.544C59.366 117.544 64.5533 108.909 65.1297 103.728C65.7061 98.5469 61.6715 89.912 45.5331 87.6094C29.3948 85.3068 5.18732 64.5832 5.18732 48.4648C5.18732 32.3464 17.2911 -2.19294 51.8732 0.109684C79.5389 1.95178 93.756 8.93641 97.4063 12.1985L83.5735 38.6786Z"
                fill="#213875"
              />
            </svg>
          </Link>
        </div>

        <div className="relative hidden md:flex gap-2 h-full justify-center">
          {/* Login */}
          <div className="h-full border-l border-r border-[#dee1ea]">
            {isLoggedIn ? (
              <div
                className="flex justify-items-center px-2 h-full py-0 text-[#213875]"
                onClick={toggleDropdown}
              >
                <span className="text-center flex justify-center items-center w-full overflow-hidden text-ellipsis leading-[22px]">
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
          {/* Cart */}
          <div
            className="h-full w-[50px] justify-center flex items-center text-[#213875] cursor-pointer"
            onClick={toggleCart}
          >
            <ShoppingCartIcon />
            <Cart show={viewCart} />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="flex h-full overflow-hidden md:hidden justify-center items-center gap-3">
          <div
            className="h-full w-[50px] justify-center flex items-center text-[#213875] cursor-pointer border-l border-r border-[#dee1ea]"
            onClick={toggleCart}
          >
            <ShoppingCartIcon />
            <Cart show={viewCart} />
          </div>
          <div
            className="cursor-pointer md:hidden text-[#213875]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {!isMenuOpen ? <Menu /> : <X />}
          </div>
        </div>

        {isMenuOpen && (
          <div className="fixed top-[60px] left-0 w-full h-[200px] bg-[#213875] z-[-1]">
            <div>
              <div className="p-5 text-white space-y-4">
                <div className="flex flex-col">
                  <label htmlFor="">Cari</label>
                  <div className="flex items-center w-full">
                    <input
                      className="text-black w-full"
                      type="text"
                      value={searchInput}
                      onChange={(e) => {
                        setSearchInput(e.target.value);
                      }}
                    />
                    <button
                      onClick={(e) => handleSearch(e)}
                      className="border p-1  border-white rounded-tr-md rounded-br-md"
                    >
                      <Search size={16} />
                    </button>
                  </div>
                </div>
                {isLoggedIn ? (
                  <div className="flex flex-col">
                    <h1 className="text-center">
                      Hi, Selamat Datang {userName}!
                    </h1>
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <Link
                      to="/login"
                      className="border border-white rounded-md p-2"
                    >
                      Login
                    </Link>
                  </div>
                )}

                {isLoggedIn && (
                  <button
                    className="border w-full border-white rounded-md p-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
