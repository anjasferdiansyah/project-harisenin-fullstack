import { Link } from 'react-router-dom';
import TopBar from '../../molecules/TopBar';
import { useEffect, useState } from 'react';

function Navbar() {
  const [isShowClick, setIsShowClick] = useState(false);
  const [isShowHover, setIsShowHover] = useState(false);
  const [isSearchClick, setIsSearchClick] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollDirection, setScrollDirection] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 0) {
        setScrollDirection(currentScrollPos > prevScrollPos ? 'down' : 'up');
        console.log(currentScrollPos);
      }
      prevScrollPos = currentScrollPos;
    };

    let prevScrollPos = window.pageYOffset;
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDivClick = () => {
    setIsShowClick(!isShowClick);
  };

  return (
    <>
      <TopBar />
      <header className="flex flex-nowrap justify-between z-10 bg-[#ffffff] w-full h-[61px] sticky top-0 border-y border-[#dee1ea] overflow-hidden">
        <div>
          {windowWidth <= 940 && isShowClick ? (
            <button
              onClick={handleDivClick}
              style={{ cursor: 'pointer' }}
              className="cursor-pointer grid place-items-center  py-[23px] px-[32px] border-r "
            >
              <span className="rotate-45 translate-x-[0px] translate-y-[4px] bg-[#213875] w-[19px] h-[2px]  relative  ease-in duration-[400ms] delay-0"></span>
              <span className="-rotate-45 translate-x-[-1px] translate-y-[2px] bg-[#213875] w-[19px] h-[2px]  relative  ease-in duration-[400ms] delay-0"></span>
              <span className="text-[8px] will-change-[opacity] ease-linear duration-[400ms] delay-0 opacity-0 ">
                MENU
              </span>
            </button>
          ) : (
            <button
              onClick={handleDivClick}
              onMouseEnter={() => setIsShowHover(true)}
              className="grid place-items-center m-0 py-[23px] px-[32px] border-r border-[#dee1ea] cursor-pointer overflow-visible "
            >
              <span className="bg-[#213875] w-[19px] h-[2px] mb-[3px] relative ease-in duration-[400ms] delay-0"></span>
              <span className="bg-[#213875] w-[19px] h-[2px] mb-[3px] relative ease-in duration-[400ms] delay-0"></span>
              <span className="text-[8px] leading-[8px] font-[400] opacity-100 will-change-[opacity] ease-in duration-[400ms] delay-0 text-center ">
                MENU
              </span>
            </button>
          )}
        </div>
        <div className="hidden min-[940px]:contents">
          <nav className="flex">
            <ListModel id="1">LADIES</ListModel>
            <ListModel id="2">GENTLEMEN</ListModel>
            <ListModel id="3">GIRLS</ListModel>
            <ListModel id="4">BOYS</ListModel>
            <ListModel id="5">TODDLERS</ListModel>
            <ListModel id="6">SALE</ListModel>
          </nav>
        </div>
        <div className="grow-[3] grid place-items-center p-[10px]">
          <Link to="/"> LogoWeb </Link>
        </div>
        <div className="flex grow shrink basis-0 h-[59px]">
          <div className="hidden min-[940px]:contents">
            <div className="flex text-center h-full">
              <Link
                className="relative border-l border-[#dee1ea] font-400 text-[16px] no-underline after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#213875] after:scale-y-0 hover:after:scale-y-[100%] after:origin-top hover:after:origin-bottom after:transition-transform after:duration-[700ms] after:ease-[cubic-bezier(0.19,1,0.22,1)] after:delay-0"
                to="/login"
              >
                <div className="relative grid place-items-center w-[100px] h-full py-0 px-[15px] text-[#213875] hover:text-[#ffffff] z-10">
                  <span className="text-center w-full overflow-hidden text-ellipsis leading-[22px]">
                    Login
                  </span>
                </div>
              </Link>
              <div className="h-full border-l">
                <label
                  htmlFor="search"
                  onClick={() => setIsSearchClick(true)}
                  onMouseOut={() => setIsSearchClick(false)}
                  className={`py-0 px-[24px] relative flex flex-col h-full ${
                    isSearchClick
                      ? 'items-start justify-center w-60 '
                      : 'justify-center items-center'
                  } cursor-pointer text-[#213875]`}
                >
                  {isSearchClick ? (
                    <>
                      <label
                        htmlFor="search"
                        className="cursor-pointer text-xs"
                      >
                        Search
                      </label>
                      <input
                        type="search"
                        id="search"
                        className="w-[50px] border-0  appearance-none outline-none cursor-pointer placeholder:text-sm "
                      />
                    </>
                  ) : (
                    <label htmlFor="search" className="cursor-pointer">
                      Search
                    </label>
                  )}
                </label>
              </div>
            </div>
          </div>
          <div className="contents min-[940px]:hidden">
            <button
              onClick={handleDivClick}
              className="flex flex-nowrap items-center justify-center h-[59px] text-[#213875] cursor-pointer max-[1310px]:py-[19px] max-[1310px]:px-[20px] border-l border-[#dee1ea]"
            >
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
            className={`flex items-center justify-center h-[59px]  ${
              windowWidth > 940 ? 'px-[35px]' : 'px-[20px] w-fit'
            } border-l border-[#dee1ea] text-[#213875] cursor-pointer`}
          >
            <span
              className={
                windowWidth <= 940 || isSearchClick
                  ? 'hidden'
                  : 'contents text-[12px] font-bold uppercase tracking-[1px]  leading-[12px] px-[35px] py-[19px]'
              }
            >
              shopping cart
            </span>
            <span
              className={
                windowWidth <= 940 || isSearchClick ? 'contents ' : 'hidden'
              }
            >
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
        </div>
      </header>

      {/* onClick menu ditampilan mobile */}
      <div
        className={windowWidth <= 940 && isShowClick ? 'contents' : 'hidden'}
      >
        <div
          className={`flex flex-col bg-white h-[calc(100vh-60px)] w-full z-[999] border-t sticky left-0 ${
            scrollDirection === 'down'
              ? 'top-0'
              : scrollDirection === 'up'
              ? 'top-[60px]'
              : 'top-[60px]'
          }  transition-[top] duration-300 bg-black/60`}
        >
          <div className="overflow-visible h-[50px] border-b flex items-center ">
            <input
              type="search"
              placeholder="what are you looking for?"
              className="w-[calc(100%-50px)] py-0 px-[1.5rem] appearance-none h-[19px] outline-none "
            />
            <button className="cursor-pointer grid place-items-center w-[50px] h-full text-[1.2em] bg-[#213875] ">
              <svg
                aria-hidden="true"
                width="1em"
                height="1em"
                viewBox="0 0 31 31"
                color="#fff"
              >
                <path
                  fill="currentColor"
                  d="M4,13.293 C4,8.169 8.169,4 13.293,4 C18.418,4 22.587,8.169 22.587,13.293 C22.587,18.418 18.418,22.587 13.293,22.587 C8.169,22.587 4,18.418 4,13.293 M29.684,26.638 L24.08,21.033 C25.65,18.851 26.587,16.182 26.587,13.293 C26.587,5.963 20.624,0 13.293,0 C5.963,0 0,5.963 0,13.293 C0,20.623 5.963,26.587 13.293,26.587 C16.294,26.587 19.056,25.576 21.283,23.893 L26.856,29.466 C27.246,29.856 27.758,30.052 28.27,30.052 C28.782,30.052 29.294,29.856 29.684,29.466 C30.465,28.685 30.465,27.419 29.684,26.638"
                ></path>
              </svg>
            </button>
          </div>
          <nav className="h-full grow-[1] shrink-[1] basis-0 ">
            <ul className="list-none p-0">
              <ListMobile1 id="1">ladies</ListMobile1>
              <ListMobile1 id="2">Gentlemen</ListMobile1>
              <ListMobile1 id="3">girls</ListMobile1>
              <ListMobile1 id="4">boys</ListMobile1>
              <ListMobile1 id="5">toddlers</ListMobile1>
              <ListMobile1 id="6">sale</ListMobile1>
              <ListMobile2 id="1">Login</ListMobile2>
              <ListMobile2 id="1">Customer Service</ListMobile2>
            </ul>
          </nav>
        </div>
      </div>

      {/* onHover menu ditampilan desktop */}
      {windowWidth > 940 && isShowHover && (
        <div
          onMouseLeave={() => setIsShowHover(false)}
          className="h-[calc(80vh-60px)] bg-white sticky z-[999] left-0 top-[61px] py-[40px] px-[80px] flex box-content"
        >
          <div className="text-[#213875] flex flex-col gap-16 border-r-2 w-fit  pr-32 ">
            <ListMenuOnHover>Customer Service</ListMenuOnHover>
            <ListMenuOnHover>Shop Address</ListMenuOnHover>
            <ListMenuOnHover>About Us</ListMenuOnHover>
            <ListMenuOnHover>Privacy Statement</ListMenuOnHover>
            <ListMenuOnHover>Terms and Conditions</ListMenuOnHover>
          </div>
          <div className="text-[#213875] pl-10 flex flex-col pr-32 border-r-2  ">
            <span className="font-semibold leading-3 text-xs mb-5 ">
              CONTACT US
            </span>

            <span className="font-bold mb-2">Our office:</span>
            <span>012 - 34567</span>
            <span className="mb-8">mon - fri: 09:00 - 17:00</span>
            <span className="font-bold mb-2">Our office:</span>
            <span>012 - 34567</span>
            <span className="mb-8">mon - fri: 09:00 - 17:00</span>
            <span className="font-bold mb-2">WathsApp:</span>
            <span className="text-blue-500">08123456789</span>
            <span className="mb-8">mon - fri: 09:00 - 17:00</span>
          </div>
          <div className="text-[#213875] pl-10 flex flex-col">
            <span className="font-semibold leading-3 text-xs mb-5">
              FOLLOW US
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

const ListMenuOnHover = ({ children }) => (
  <span className="text-2xl font-semibold  tracking-tighter leading-7 h-auto  size-0 w-fit hover:bg-[#213875]/30 cursor-pointer transition-colors ease-in-out  ">
    {children}
  </span>
);

const ListModel = ({ children, id }) => {
  const [isModelHover, setIsModelHover] = useState(false);

  return (
    <Link
      onMouseLeave={() => setIsModelHover(false)}
      onMouseEnter={() => setIsModelHover(true)}
      className={`grid place-items-center relative text-[12px] font-[700]  tracking-[1px] ${
        id == 6 ? 'text-[#ca3333] hover:text-[#213875]' : 'text-[#213875]'
      } no-underline py-0 px-[18px] h-[59px] leading-[12px] border-r border-[#dee1ea]`}
    >
      <span
        className={`relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0  ${
          isModelHover ? 'after:w-full' : 'after:w-0'
        } after:h-[1px] after:transition-[width] after:duration-[550ms] after:ease-[cubic-bezier(.19,1,.22,1)] after:delay-0 after:bg-[#213875]`}
      >
        {children}
      </span>
    </Link>
  );
};

const ListMobile1 = ({ id, children }) => (
  <li>
    <button
      className={`border-b flex ${
        id == 6 ? 'text-[#ca3333]' : 'text-[#213875]'
      } w-full font-medium uppercase tracking-[0.8px] text-[14px] items-center justify-between py-[14px] px-[10px] `}
    >
      {children}
      <svg
        aria-hidden="true"
        width="1em"
        height="1em"
        viewBox="0 0 25 38.6"
        color="#213875"
      >
        <path
          fill="currentColor"
          d="m25 19.3-19.4-19.3-5.6 5.5 13.8 13.8-13.8 13.8 5.6 5.5 15.5-15.4z"
        ></path>
      </svg>
    </button>
  </li>
);

const ListMobile2 = ({ id, children }) => (
  <li>
    <Link
      to={id == 1 && '/login'}
      className="w-full uppercase tracking-[0.8px] text-[14px] font-normal no-underline hover:underline text-[#213875] py-[14px] px-[10px] border-b flex cursor-pointer  "
    >
      {children}
    </Link>
  </li>
);
