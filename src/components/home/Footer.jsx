import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="  bg-white  mt-16 ">
      <div className="grid  pt-5 justify-start items-start px-10  w-full gap-6 mb-3 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        <div className="flex flex-col">
          <h3 className="text-black text-3xl mb-10 font-bold font-sans">
            Willy ST.
          </h3>
          <p className="font-[Calibri] text-[#9F9F9F] text-md">
            30, Alhaji Amoo Street Lagos, <br /> Nigeria
          </p>
        </div>
        <div className="grid grid-cols-1">
          <h3 className="text-[#9F9F9F] mb-7 text-1xl font-normal underline font-[Calibri]">
            Links
          </h3>

          <Link
            to="/"
            className="font-[Calibri] py-5 text-black font-semibold text-md"
          >
            Home
          </Link>

          <Link
            to="/shop/all-products"
            className="font-[Calibri] py-5 text-black font-semibold text-md"
          >
            Shop
          </Link>
          <Link
            to="/stores"
            className="font-[Calibri] py-5 text-black font-semibold text-md"
          >
            Stores
          </Link>
          <Link
            to="/contact-us"
            className="font-[Calibri] py-5 text-black font-semibold text-md"
          >
            Contact
          </Link>
        </div>

        <div className="grid grid-cols-1">
          <h3 className="text-[#9F9F9F] mb-7 text-1xl underline font-normal font-[Calibri]">
            Help
          </h3>
          <a
            href=""
            className="font-[Calibri] font-semibold py-5 text-black text-md"
          >
            Payment Options
          </a>
          <a
            href=""
            className="font-[Calibri] font-semibold py-5 text-black text-md"
          >
            Returns
          </a>
          <a
            href=""
            className="font-[Calibri] font-semibold py-5 text-black text-md"
          >
            Privacy Policies
          </a>
        </div>

        <div className="grid grid-cols-1">
          <h3 className="text-[#9F9F9F] mb-7 underline text-1xl font-normal font-[Calibri]">
            Newsletter
          </h3>
          <div className="">
            <input
              className="mr-4 border-black border-b-2"
              placeholder="Enter Your Email Address"
              type="text"
            />
            <span>
              <button className="border-black border-b-2">SUBSCRIBE</button>
            </span>
          </div>
        </div>
      </div>
      <p className="text-center text-black text-[35px] font-bold mt-16">
        Willy ST.
      </p>
      <p className="text-center text-black text-[10px] font-sm mt-2">
        © 2023 Willy ST. INC. All rights reserved
      </p>
    </div>
  );
};
