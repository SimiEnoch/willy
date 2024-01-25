import React from "react";
import TrophyIcon from "../icons/TrophyIcon";
import SuccessIcon from "../icons/SuccessIcon";
import ShippingIcon from "../icons/ShippingIcon";
import CustomerSupportIcon from "../icons/CustomerSupportIcon";

const ShopFooter = () => {
  return (
    <div className="bg-[#FAF3EA] font-[Calibri] px-10 py-10 grid grid-cols-1 mx-auto   gap-8 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 w-full h-auto ">
      <div className="flex gap-2">
        <TrophyIcon />
        <div>
          <h1 className="font-bold">High Quality</h1>
          <p className="text-sm text-[#898989]">crafted from top materials</p>
        </div>
      </div>
      <div className="flex gap-2">
        <SuccessIcon />
        <div>
          <h1 className="font-bold">Warranty Protection</h1>
          <p className="text-sm text-[#898989]">Over 2 years</p>
        </div>
      </div>{" "}
      <div className="flex gap-2">
        <ShippingIcon />
        <div>
          <h1 className="font-bold">Free Shipping</h1>
          <p className="text-sm text-[#898989]">Order over 150 $</p>
        </div>
      </div>{" "}
      <div className="flex gap-2">
        <CustomerSupportIcon />
        <div>
          <h1 className="font-bold">24 / 7 Support</h1>
          <p className="text-sm text-[#898989]">Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default ShopFooter;
