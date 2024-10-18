import React, { useEffect, useState } from 'react';
import { useGlobalContext } from './Context/Context';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import SkelentonLoader from './others/SkelentonLoader';
import StarRating from './Rating';

export const Product = ({ Data }) => {
  const navigate = useNavigate();
  const { setCart, cart } = useGlobalContext();
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(true);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, amount: item.amount + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, amount: 1 }]);
    }
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
    <div className="flex">
      <div className="flex-1 sm:px-6">
        <div className="mx-auto px-5 py-5 grid grid-cols-2 xs:grid-cols-1 w-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {loading
            ? Array.from({ length: 8 }).map((_, index) => (
                <SkelentonLoader key={index} />
              ))
            : Data.map((dataItem, index) => {
                const {
                  title,
                  images,
                  price,
                  discountPercentage,
                  category,
                  rating,
                } = dataItem;

                const oldPrice = (
                  price /
                  (1 - discountPercentage / 100)
                ).toFixed(2);

                return (
                  <article
                    key={index}
                    className="border-none font-normal bg-gray-200 text-black font-[Calibri] hover:cursor-pointer"
                  >
                    <span
                      className="flex"
                      onClick={() =>
                        navigate(`/products/${dataItem.id}`)
                      }
                    >
                      <div className="w-full">
                        <img
                          src={images[0]} // Use the first image in the array
                          alt={title}
                          className="object-cover h-[18rem] w-full"
                        />
                      </div>
                    </span>
                    <div className="text-lg text-start">
                      <header
                        className="mt-3"
                        onClick={() =>
                          navigate(`/products/${dataItem.id}`)
                        }
                      >
                        <h4 className="text-[#3A3A3A] px-2 font-[Calibri] leading-7 font-bold text-[20px]">
                          <span className="uppercase">
                            {title.charAt(0)}
                          </span>
                          {title.slice(1).toLowerCase()}
                        </h4>
                        <div className="text-start">
                          <h4 className="px-2 text-[16px] text-[#898989] font-sans rounded">
                            {category}
                          </h4>
                        </div>
                        <div className="flex px-2 py-2">
                          <div className="text-start">
                            <h4 className="text-[#3A3A3A] font-[Calibri] font-bold bg-green-400 px-2 text-[20px] rounded">
                              ${price.toLocaleString()}
                            </h4>
                          </div>
                          <div className="flex-1 text-end flex items-end justify-end">
                            <h4 className="text-white font-[Calibri] font-normal bg-red-400 px-2 line-through text-[15px] rounded">
                              ${oldPrice.toLocaleString()}
                            </h4>
                          </div>
                        </div>
                      </header>
                      <div className="px-2">
                        <StarRating ratings={rating} />
                      </div>
                      <div className="flex justify-center font-[Calibri] mb-3">
                        <button
                          title="Cart updated"
                          className="w-80 font-semibold text-[17px] text-white bg-[#B88E2F] hover:bg-slate-700 mb-1 p-2 rounded-sm mt-2"
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
                              backgroundColor: '#006400',
                              color: '#ffffff',
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
