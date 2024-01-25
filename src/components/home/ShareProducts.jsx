import React from "react";
import firstProduct from "../images/Rectangle 36.png";
import secondProduct from "../images/Rectangle 38.png";
import thirdProduct from "../images/Rectangle 37.png";
import fourthProduct from "../images/Rectangle 39.png";
import fifthProduct from "../images/Rectangle 40.png";
import sixthProduct from "../images/Rectangle 43.png";
import seventhProduct from "../images/Rectangle 41.png";
import eighthProduct from "../images/Rectangle 44.png";
import ninthProduct from "../images/Rectangle 45.png";
import "../../App.css";

const ShareProducts = () => {
  return (
    <div className="w-screen">
      <h4 className="text-center mt-5  font-[Calibri] text-[1.5rem] font-bold  text-gray-600 leading-8">
        Share your new product, setup, furniture, apartment, ideas <br /> et
        cetera with &nbsp;
        <span className="font-extrabold text-[2rem] text-black">
          #NewProduct
        </span>
      </h4>

      <div className="mb-10 pb-10 py-5 grid md:grid-cols-3 grid-cols-1 xs:grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 gap-x-4 gap-y-4 text-center  items-center justify-center">
        <div className="grid grid-cols-2 " data-aos="flip-left">
          <div className="relative mx-5">
            <img
              src={firstProduct}
              alt=""
              className=" w-24 h-72 mb-2 md:block hidden"
            />
          </div>
          <div className="relative mx-5 md:top-[3rem]  md:right-[8.5rem]  xl:top-[3rem] xl:right-[8.5rem] lg:top-[3rem] lg:right-[8.5rem] sm:top-0 sm:right-0 xs:top-0 xs:right-0 top-0 right-0 mb-2 ">
            <img src={secondProduct} alt="" className=" w-custom" />
          </div>
          <div className="col-span-2"></div>
          <div>
            <img src={thirdProduct} alt="" className="mx-5 w-[30rem] h-60" />
          </div>
          <div className="  relative">
            <img src={fourthProduct} alt="" className="pl-5 ml-5" />
          </div>
        </div>
        <div className="" data-aos="fade-zoom-in">
          <img src={fifthProduct} alt="" className="mx-5 w-[29rem] h-[60vh]" />
        </div>
        <div className="grid grid-cols-2" data-aos="flip-right">
          <div className="relative top-[2.5rem] right-[0.4rem]">
            <img src={sixthProduct} alt="" className="w-96  h-60" />
          </div>
          <div>
            <img src={ninthProduct} alt="" className="w-72 pr-5 h-72" />
          </div>
          <div className="col-span-2"></div>
          <div className="relative  ">
            <img src={seventhProduct} alt="" className="" />
          </div>
          <div className="relative right-[3.7rem]">
            <img src={eighthProduct} alt="" className="mt-2 pr-5" />
          </div>
        </div>
      </div>
      <div className="font-bold">
        <hr />
      </div>
    </div>
  );
};

export default ShareProducts;
