import { Link } from "react-router-dom";
import TopBar from "../../molecules/TopBar";

function Navbar() {
    return (
        <>
            <TopBar />
            <header
                className="flex flex-nowrap justify-between z-10 bg-[#ffffff] w-full h-[61px] sticky top-0 border-y border-[#dee1ea]"
            >
                <div className="flex">
                    <button
                        className="grid place-items-center m-0 py-[23px] px-[32px] border-r border-[#dee1ea] cursor-pointer overflow-visible"
                    >
                        <span className="bg-[#213875] w-[19px] h-[2px] mb-[3px] relative"></span>
                        <span className="bg-[#213875] w-[19px] h-[2px] mb-[3px] relative"></span>
                        <span className="text-center text-[8px] text-500 leading-[8px]"
                        >MENU</span>
                    </button>
                </div>
                <div className="hidden min-[940px]:contents">
                    <nav className="flex">
                        <a
                            className="grid place-items-center relative text-[12px] font-[700] text-[#213875] tracking-[1px] no-underline py-0 px-[18px] h-[59px] leading-[12px] border-r border-[#dee1ea]"
                            href="#"
                        >
                            <span
                                className="relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 hover:after:w-[100%] after:h-[1px] after:transition-[width] after:duration-[550ms] after:ease-[cubic-bezier(.19,1,.22,1)] after:delay-0 after:bg-[#213875]"
                            >
                                LADIES
                            </span>
                        </a>
                        <a
                            className="grid place-items-center relative text-[12px] font-bold text-[#213875] tracking-[1px] no-underline py-0 px-[18px] h-[59px] leading-[12px] border-r border-[#dee1ea]"
                            href="#"
                        >
                            <span
                                className="relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 hover:after:w-[100%] after:h-[1px] after:transition-[width] after:duration-[550ms] after:ease-[cubic-bezier(.19,1,.22,1)] after:delay-0 after:bg-[#213875]"
                            >
                                GENTLEMEN
                            </span>
                        </a>
                        <a
                            className="grid place-items-center relative text-[12px] font-bold text-[#213875] tracking-[1px] no-underline py-0 px-[18px] h-[59px] leading-[12px] border-r border-[#dee1ea]"
                            href="#"
                        >
                            <span
                                className="relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 hover:after:w-[100%] after:h-[1px] after:transition-[width] after:duration-[550ms] after:ease-[cubic-bezier(.19,1,.22,1)] after:delay-0 after:bg-[#213875]"
                            >
                                GIRLS
                            </span>
                        </a>
                        <a
                            className="grid place-items-center relative text-[12px] font-bold text-[#213875] tracking-[1px] no-underline py-0 px-[18px] h-[59px] leading-[12px] border-r border-[#dee1ea]"
                            href="#"
                        >
                            <span
                                className="relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 hover:after:w-[100%] after:h-[1px] after:transition-[width] after:duration-[550ms] after:ease-[cubic-bezier(.19,1,.22,1)] after:delay-0 after:bg-[#213875]"
                            >
                                BOYS
                            </span>
                        </a>
                        <a
                            className="grid place-items-center relative text-[12px] font-bold text-[#213875] tracking-[1px] no-underline py-0 px-[18px] h-[59px] leading-[12px] border-r border-[#dee1ea]"
                            href="#"
                        >
                            <span
                                className="relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 hover:after:w-[100%] after:h-[1px] after:transition-[width] after:duration-[550ms] after:ease-[cubic-bezier(.19,1,.22,1)] after:delay-0 after:bg-[#213875]"
                            >
                                TODDLERS
                            </span>
                        </a>
                        <a
                            className="grid place-items-center relative text-[12px] font-bold text-[#ca3333] hover:text-[#213875] tracking-[1px] no-underline py-0 px-[18px] h-[59px] leading-[12px] border-r border-[#dee1ea]"
                            href="#"
                        >
                            <span
                                className="relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 hover:after:w-[100%] after:h-[1px] after:transition-[width] after:duration-[550ms] after:ease-[cubic-bezier(.19,1,.22,1)] after:delay-0 after:bg-[#213875]"
                            >
                                SALE
                            </span>
                        </a>
                    </nav>
                </div>
                <div className="grow-[3] grid place-items-center p-[10px]">
                    <a href="./index.html"> LogoWeb </a>
                </div>
                <div className="flex grow shrink basis-0 h-[59px]">
                    <div className="hidden min-[940px]:contents">
                        <div className="flex text-center h-full">
                            <Link
                                className="relative border-l border-[#dee1ea] font-400 text-[16px] no-underline after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#213875] after:scale-y-0 hover:after:scale-y-[100%] after:origin-top hover:after:origin-bottom after:transition-transform after:duration-[700ms] after:ease-[cubic-bezier(0.19,1,0.22,1)] after:delay-0"
                                to="/login"
                            >
                                <div
                                    className="relative grid place-items-center w-[100px] h-full py-0 px-[15px] text-[#213875] hover:text-[#ffffff] z-10"
                                >
                                    <span
                                        className="text-center w-full overflow-hidden text-ellipsis leading-[22px]"
                                    >Login</span>
                                </div>
                            </Link>
                            <div
                                className="flex items-center h-full border-l mb-[1em] py-0 px-[24px] cursor-pointer text-[#213875]"
                            >
                                Search
                            </div>
                        </div>
                    </div>
                    <div className="contents min-[940px]:hidden">
                        <button
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
                        className="flex items-center justify-center h-[59px] border-l border-[#dee1ea] text-[#213875] cursor-pointer"
                    >
                        <span
                            className="w-[12rem] text-[12px] font-bold uppercase tracking-[1px] leading-[12px] max-[992px]:hidden px-[35px] py-[19px]"
                        >
                            shopping cart
                        </span>
                        <span className="min-[992px]:hidden overflow-hidden px-[20px] py-[19px]">
                            <svg viewBox="0 0 35.8 40" className="" width="1rem" height="1rem">
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
        </>
    );
}

export default Navbar;