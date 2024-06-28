import React, { useEffect } from 'react';
import { useGlobalContext } from '../Context/Context';
import {
  BsFillTrash3Fill,
  BsFillPlusSquareFill,
  BsFillFileMinusFill,
} from 'react-icons/bs';
import ShopFooter from '../shop/ShopFooter';

export const Cart = ({
  id,
  mainId,
  name,
  price,
  image,
  amount,
  oldPrice,
}) => {
  const { cart, setCart } = useGlobalContext();

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const increase = () => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const decrease = () => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.amount > 1) {
        return { ...item, amount: item.amount - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const remove = () => {
    const newCart = cart.filter((item) => item.mainId !== mainId);
    setCart(newCart);
  };

  return (
    <article className="flex w-full sm:px-1 font-[Calibri]">
      <div className="grid w-[50%]">
        <img
          src={image}
          alt={name}
          className="border-separate object-cover h-20 sm:h-30 w-20 rounded"
        />
        <h4 className="text-[10px] text-[#9F9F9F] font-bold w-auto align-start justify-start text-start ">
          {name}
        </h4>
      </div>
      <div className="flex justify-center  items-center md:mx-14 lg:mx-14  xl:mx-14 mx-0 sm:mx-14 w-full">
        <h4 className="pr-0 mr-auto text-sm font-bold w-full text-center lg:text-start text-black mb-3 rounded mt-1">
          ₦{price.toLocaleString()}.00
        </h4>
        <div className="w-full lg:block hidden">
          <h4 className="text-[13px] line-through  w-full text-[#9F9F9F] mb-3 p-1 rounded mt-1">
            ₦{oldPrice.toLocaleString()}.00
          </h4>
        </div>

        <div className="flex items-start  justify-start ml-auto lg:gap-3 gap-2">
          <button className="p-2 " onClick={decrease}>
            <BsFillFileMinusFill />
          </button>
          <p className="text-end">{amount}</p>
          <button className="p-2 " onClick={increase}>
            <BsFillPlusSquareFill />
          </button>
        </div>
        <div className="text-end font-bold">
          <BsFillTrash3Fill
            className="text-[#B88E2F]  text-[11px] hover:cursor-pointer"
            onClick={() => {
              console.log(mainId);
              remove();
            }}
          />
        </div>
      </div>
    </article>
  );
};

export default Cart;
