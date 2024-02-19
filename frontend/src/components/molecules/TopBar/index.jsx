function TopBar() {
    return (
        <>
            <div
                className="bg-[#213875] w-full h-[35px] px-0 pt-[5px] pb-[6px] text-white text-[16px] font-400 leading-[25.6px] text-center"
            >
                <div
                    className="max-w-[1880px] px-[20px] min-[992px]:px-[40px] min-[1310px]:px-[60px]"
                >
                    <div className="flex min-[768px]:justify-center">
                        <div
                            className="pl-[20px] min-[768px]:my-0 min-[768px]:mx-[10px] min-[992px]:pl-[26px] min-[992px]:mt-[-1px] min-[992px]:mb-0 min-[992px]:mx-[20px] max-w-[calc(100% - 20px)] relative max-[768px]:mx-[auto]"
                        >
                            <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 13 10"
                                className="w-14px h-14px min-[992px]:w-[16px] min-[992px]:h-[16px] min-[992px]:top-[3px] absolute left-0 top-[4px] align-middle overflow-hidden"
                            >
                                <polygon
                                    fill="currentColor"
                                    fillRule="nonzero"
                                    points="4.4,9.4 0.3,5.6 1.7,4.1 4.4,6.6 11.3,0.3 12.7,1.7 "
                                ></polygon>
                            </svg>
                            <div
                                className="text-[14px] min-[992px]:text-[16px] leading-[24px] w-full tracking-[0.3px] whitespace-nowrap overflow-hidden text-ellipsis"
                            >
                                Free shipping from &euro;25
                            </div>
                        </div>
                        <div
                            className="pl-[20px] min-[768px]:my-0 min-[768px]:mx-[10px] min-[992px]:pl-[26px] min-[992px]:mt-[-1px] min-[992px]:mb-0 min-[992px]:mx-[20px] max-w-[calc(100% - 20px)] relative max-[768px]:hidden"
                        >
                            <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 13 10"
                                className="w-14px h-14px min-[992px]:w-[16px] min-[992px]:h-[16px] min-[992px]:top-[3px] absolute left-0 top-[4px] align-middle overflow-hidden"
                            >
                                <polygon
                                    fill="currentColor"
                                    fillRule="nonzero"
                                    points="4.4,9.4 0.3,5.6 1.7,4.1 4.4,6.6 11.3,0.3 12.7,1.7 "
                                ></polygon>
                            </svg>
                            <div
                                className="text-[14px] min-[992px]:text-[16px] leading-[24px] w-full tracking-[0.3px] whitespace-nowrap overflow-hidden text-ellipsis"
                            >
                                Order now = delivered on Tuesday
                            </div>
                        </div>
                        <div
                            className="pl-[20px] min-[768px]:my-0 min-[768px]:mx-[10px] min-[992px]:pl-[26px] min-[992px]:mt-[-1px] min-[992px]:mb-0 min-[992px]:mx-[20px] max-w-[calc(100% - 20px)] relative max-[768px]:hidden"
                        >
                            <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 13 10"
                                className="w-14px h-14px min-[992px]:w-[16px] min-[992px]:h-[16px] min-[992px]:top-[3px] absolute left-0 top-[4px] align-middle overflow-hidden"
                            >
                                <polygon
                                    fill="currentColor"
                                    fillRule="nonzero"
                                    points="4.4,9.4 0.3,5.6 1.7,4.1 4.4,6.6 11.3,0.3 12.7,1.7 "
                                ></polygon>
                            </svg>
                            <div
                                className="text-[14px] min-[992px]:text-[16px] leading-[24px] w-full tracking-[0.3px] whitespace-nowrap overflow-hidden text-ellipsis"
                            >
                                Easy payment afterwards
                            </div>
                        </div>
                        <div
                            className="pl-[20px] min-[768px]:my-0 min-[768px]:mx-[10px] min-[992px]:pl-[26px] min-[992px]:mt-[-1px] min-[992px]:mb-0 min-[992px]:mx-[20px] max-w-[calc(100% - 20px)] relative max-[768px]:hidden"
                        >
                            <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 13 10"
                                className="w-14px h-14px min-[992px]:w-[16px] min-[992px]:h-[16px] min-[992px]:top-[3px] absolute left-0 top-[4px] align-middle overflow-hidden"
                            >
                                <polygon
                                    fill="currentColor"
                                    fillRule="nonzero"
                                    points="4.4,9.4 0.3,5.6 1.7,4.1 4.4,6.6 11.3,0.3 12.7,1.7 "
                                ></polygon>
                            </svg>
                            <div
                                className="text-[14px] min-[992px]:text-[16px] leading-[24px] w-full tracking-[0.3px] whitespace-nowrap overflow-hidden text-ellipsis"
                            >
                                Trusted shops of 9.2
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopBar;