import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./Context/Context";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import SkelentonLoader from "./others/SkelentonLoader";
import StarRating from "./Rating";

export const Product = ({ Data }) => {
  const navigate = useNavigate();
  // const { addToCart } = useGlobalContext();
  const { setCart, cart } = useGlobalContext();
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(true);

  const addToCart = (dataItem) => {
    //Get the exact index of item, note that if index = -1, it means the item doesn't exist so it just adds it to the cart direct.
    const index = cart.findIndex((object) => {
      return object.id === dataItem.id;
    });

    // increase the amount by 1 everytime the user clicks the button if the item exists

    if (index !== -1) {
      setCart((prev) => {
        const newCart = [...prev];
        newCart[index] = {
          ...newCart[index],
          amount: newCart[index].amount + 1,
        };
        return newCart;
      });
      return;
    }

    setCart((prev) => {
      return [...prev, { ...dataItem, mainId: prev.length + 1 }];
    });
    // localStorage.setItem('data', cart);
  };

  useEffect(() => {
    let timeout;
    if (showAlert) {
      timeout = setTimeout(() => {
        setShowAlert(false);
      }, 500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [showAlert]);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className=" flex">
      <div className="flex-1  sm:px-6">
        {/*I removed the overflow-y-auto h-[50rem] from the products just to make it have a seamless scroll*/}
        <div className="mx-auto px-5 py-5 grid grid-cols-2 xs:grid-cols-1 w-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {loading
            ? // Display skeleton loader while loading
              Array.from({ length: 8 }).map((_, index) => (
                <SkelentonLoader key={index} />
              ))
            : // Display actual products once data is available
              Data.map((dataItem, index) => {
                const {
                  name,
                  image,
                  price,
                  oldPrice,
                  category,
                  initialRating,
                } = dataItem;
                return (
                  <article
                    key={index}
                    className="border-none font-normal bg-gray-200 text-black font-[Calibri] hover:cursor-pointer"
                  >
                    <span
                      className="flex"
                      onClick={() => {
                        navigate(`/products/${dataItem.id}`);
                      }}
                    >
                      <div
                        className="w-full"
                        onClick={() => {
                          navigate(`/products/${dataItem.id}`);
                        }}
                      >
                        <img
                          src={image}
                          alt="img"
                          className="object-cover h-[18rem] w-full"
                        />
                      </div>
                      <div className=" relative  flex-1">
                        <button className="hover:cursor-pointer  absolute right-2 top-1 text-md font-bold mt-1  rounded">
                          {/* <FaThumbsUp color="#2EC1AC" size={17} /> */}
                        </button>
                      </div>
                    </span>
                    <div className="text-lg text-start">
                      <header
                        className="mt-3"
                        onClick={() => {
                          navigate(`/products/${dataItem.id}`);
                        }}
                      >
                        <h4 className="text-[#3A3A3A] px-2 font-[Calibri] leading-7 font-bold text-[20px]">
                          <span className="uppercase">{name.charAt(0)}</span>
                          {name.slice(1).toLowerCase()}
                        </h4>
                        <span>
                          <div className=" text-start">
                            <h4 className="px-2 text-[16px] text-[#898989] font-sans  rounded ">
                              {category}
                            </h4>
                          </div>
                        </span>
                        <span className="flex px-2 py-2">
                          <div className="text-start">
                            <h4 className="text-[#3A3A3A] font-[Calibri] font-bold bg-green-400 px-2 text-[20px]   rounded ">
                              ${price.toLocaleString()}
                            </h4>
                          </div>
                          <div className="flex-1 text-end flex items-end justify-end">
                            <h4 className="text-white font-[Calibri] font-normal bg-red-400 px-2 line-through text-[15px] rounded ">
                              ${oldPrice.toLocaleString()}
                            </h4>
                          </div>
                        </span>
                      </header>

                      <div className="px-2">
                        <StarRating ratings={initialRating} />
                      </div>

                      <div className=" flex justify-center font-[Calibri] mb-3">
                        <button
                          title="Cart updated: Repeatedly adding the same product. Check your cart for confirmation"
                          className=" w-80 font-semibold text-[17px] text-white bg-[#B88E2F] text-md font-[Calibri] hover:text-white hover:bg-slate-700 mb-1 p-2 rounded-sm mt-2"
                          onClick={() => {
                            addToCart(dataItem);
                            setShowAlert(true);
                          }}
                        >
                          Add to cart
                        </button>
                        {showAlert && (
                          <Alert
                            severity="success"
                            sx={{
                              backgroundColor: "#006400",
                              color: "#ffffff",
                              display: "flex",
                              alignItems: "center",
                            }}
                            className="fixed top-14 left-1/2 transform -translate-x-1/2 w-full"
                          >
                            <AlertTitle className="font-extrabold py-0">
                              Product successfully added to cart
                            </AlertTitle>
                          </Alert>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
        </div>
      </div>
    </div>
  );
};
