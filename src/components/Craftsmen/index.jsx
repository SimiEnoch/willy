import React, { useEffect, useState } from "react";
import NewHeader from "../home/NewHeader";
import Breadcrumbs from "../others/Breadcrumbs";
import ShopHeaderImage from "../images/Rectangle 1.png";
import MilloxiLogo from "../images/Meubel House_Logos-05.png";
import ShopFooter from "../shop/ShopFooter";
import { Footer } from "../home/Footer";
import { StoresData } from "../Stores/StoresData";
import AdminIcon from "../icons/AdminIcon";
import TagsIcon from "../icons/TagsIcon";
import DateAndTimeIcon from "../icons/DateAndTimeIcon";

const Craftsmen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [mystoreData, setStoreData] = useState(StoresData);

  return (
    <section className="cart font-[Calibri]">
      <NewHeader />

      <div className="relative font-[Calibri]">
        <img src={ShopHeaderImage} alt="img" className="transform scale-y-[-1] w-[100vw] relative h-[40vh]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <section className="mt-[70px] px-8 md:px-16 md:text-left py-6 text-center grid md:grid-cols-1 items-center justify-center">
            <div>
              <div className="flex items-center justify-center">
                <img
                  src={MilloxiLogo}
                  alt=""
                  className="transform scale-y-[-1]"
                />
              </div>
              <h1 className="font-[Calibri] text-[2rem] font-extrabold text-center">
                Craftsmen
              </h1>
              <Breadcrumbs list={["Home", "Craftsmen"]} />
            </div>
          </section>
        </div>
      </div>

      <div className="text-center pt-7 mt-7">
        <h2 className="font-bold text-[25px]">
          {" "}
          Discover a World of Craftsmanship...{" "}
        </h2>
        <p className="text-[#9F9F9F] text-[16px]">
          Tried Looking for someone around to get that job done for you? <br />{" "}
          exciting and thrilling experience. Here are a list of craftsmen around
          you with a <br /> very good working experience & stores...
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 px-7 py-10">
        {mystoreData.map((dataItem, index) => {
          const { seller, image, category, storeName, inspirationAndAbout } =
            dataItem;
          return (
            <article
              key={index}
              className="border-none font-normal py-3 bg-gray-100 rounded text-black font-[Calibri] hover:cursor-pointer"
            >
              <span
                className="flex"
                // onClick={() => {
                //   navigate(`/products/${dataItem.id}`);
                // }}
              >
                <div
                  className="flex"
                  // onClick={() => {
                  //   navigate(`/products/${dataItem.id}`);
                  // }}
                >
                  <img
                    src={image}
                    alt="img"
                    className="object-cover h-[18rem] w-full"
                  />
                </div>
              </span>
              <div className="text-lg w-full text-start">
                <header className="py-1 flex gap-1 px-1">
                  <div className="mt-1">
                    <AdminIcon />
                  </div>
                  <h4 className="text-[#898989]  font-[Calibri] leading-7 font-semibold text-[16px]">
                    {seller}
                  </h4>
                  <span className="flex  items-center justify-center  ml-auto">
                    <div className="flex items-end justify-between  ml-auto ">
                      <div className="m-1">
                        <DateAndTimeIcon />
                      </div>
                      <h4 className=" text-[12px] text-[#898989] font-sans  rounded ">
                        14 Oct 2022
                      </h4>
                    </div>
                  </span>

                  <span className="flex items-end  justify-between  mld-auto">
                    <div className="flex items-end justify-between  ml-auto ">
                      <div className="m-1">
                        <TagsIcon />
                      </div>
                      <h4 className=" text-[12px] text-[#898989] font-sans  rounded ">
                        {category}
                      </h4>
                    </div>
                  </span>
                </header>

                <div className="">
                  <div className=" text-start">
                    <h4 className="text-[#3A3A3A] font-sans font-bold text-[21px] px-3 rounded ">
                      {storeName}
                    </h4>
                  </div>
                  <div className=" text-start">
                    <h4 className="text-[#898989] leading-5 font-[Calibri] font-normal  text-[14px] px-2 rounded ">
                      {inspirationAndAbout}
                    </h4>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <ShopFooter />
      <Footer />
    </section>
  );
};

export default Craftsmen;
