import React from "react";
import dinnerImage from "../images/image 106.png";
import livingRoom from "../images/image 100.png";
import bedRoom from "../images/image 101.png";

const BrowsetheRange = () => {
  return (
    <div className="py-10 w-screen">
      <h1 className="text-center mt-10 font-bold text-3xl">Browse The Range</h1>
      <p className="text-center font-light tracking-wide py-3 px-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="md:flex md:items-center md:justify-center sm:grid sm:grid-cols-1 px-6 xs:grid xs:grid-cols-2 text-center font-[Calibri] gap-10 mt-2">
        <div className="flex flex-col items-center justify-center ">
          <img
            src={dinnerImage}
            alt=""
            className="w-[22rem] h-[22rem] flex items-center justify-center rounded"
          />
          <p className="py-5 text-start font-semibold text-[19px]">
            Dining Delights
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            src={livingRoom}
            alt=""
            className="w-[22rem] h-[22rem] flex items-center justify-center rounded"
          />
          <p className="text-start py-5 font-semibold text-[19px]">
            Cozy Living Space
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            src={bedRoom}
            alt=""
            className="w-[22rem] h-[22rem] flex items-center justify-center rounded"
          />
          <p className="text-start py-5 font-semibold text-[19px]">
            Tranquil Bedroom
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrowsetheRange;
