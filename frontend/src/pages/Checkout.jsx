import Footer from "../components/organisems/Footer";
import Navbar from "../components/organisems/Navbar";

const Checkout = () => {
  return (
    <div>
        <Navbar/>
      <div className="bg-gray-100 text-[#213775] px-4 md:px-10 lg:px-20 xl:px-20 py-10 md:py-20 xl:py-14 rounded-md shadow-md mb-4 mt-10 md:mt-20 md:mx-28 lg:mt-40">
        <h2 className="pb-2 mb-4 text-2xl md:text-xl lg:text-xl xl:text-2xl font-bold">
          1. Billing information
        </h2>
        <div className="my-4 md:my-8">
          <div className="flex items-center space-x-4">
            <label className="font-bold text-xs">
              <input type="radio" value="husband" className="mr-2" />
              HUSBAND
            </label>
            <label className="font-bold text-xs">
              <input type="radio" value="wife" className="mr-2 md:ml-8" />
              WIFE
            </label>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-xs md:text-sm font-semibold">
          <div className="flex-1">
            <label>First Name*</label>
            <input
              type="text"
              className="border p-2 w-full border-blue-900 mt-1 mb-3 h-10"
              placeholder="First Name"
            />
            <label className="">E-mail Address*</label>
            <input
              type="email"
              className="border p-2 w-full border-blue-900 mt-1 mb-3 h-10"
              placeholder="E-mail Address"
            />
            <label>Zip Code*</label>
            <input
              type="text"
              className="border p-2 w-full border-blue-900 mt-1 mb-3 h-10"
              placeholder="Zip Code"
            />
            <label>Street Name*</label>
            <input
              type="text"
              className="border p-2 w-full border-blue-900 mt-1 mb-3 h-10"
              placeholder="Street Name"
            />
            <label>Land</label>
            <input
              type="text"
              className="border p-2 w-full border-blue-900 mt-1 mb-3 h-10"
              placeholder="Land"
            />
          </div>
          <div className="flex-1">
            <label>Surname*</label>
            <input
              type="text"
              className="border p-2 w-full border-blue-900 mt-1 mb-3 h-10"
              placeholder="Surname"
            />
            <label>Telephone Number*</label>
            <input
              type="tel"
              className="border p-2 w-full border-blue-900 mt-1 mb-3 h-10"
              placeholder="Telephone Number"
            />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-2 lg:mb-0">
              <div>
                <label>House Number*</label>
                <input
                  type="text"
                  className="border p-2 w-full border-blue-900 mt-1 mb-3 h-10"
                  placeholder="House Number"
                />
              </div>
              <div>
                <label>Addition</label>
                <input
                  type="text"
                  className="border p-2 w-full border-blue-900 mt-1 mb-3 h-10"
                  placeholder="Addition"
                />
              </div>
            </div>
            <label>Place</label>
            <input
              type="text"
              className="border p-2 w-full border-blue-900 mt-1 mb-3 h-10"
              placeholder="Place"
            />
          </div>
        </div>
        <div className="text-xs md:text-sm font-extrabold uppercase py-4 md:py-10 tracking-[0.18em]">
          SEND TO DIFFERENT ADDRESS ?
        </div>
        <button
          type="submit"
          className="border text-white text-xs uppercase font-extrabold tracking-[0.18em] bg-[#213775] w-full md:w-52 p-3 relative overflow-hidden transition-all duration-200 ease-in-out hover:text-[#213775] hover:scale-100 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#f6ddda] before:to-[#f6ddda] before:transition-all before:duration-200 before:ease-in-out before:z-[-1] hover:before:left-0 ">
          Proceed to payment
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default Checkout;
