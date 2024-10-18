import React, { useEffect } from 'react';
import { useGlobalContext } from '../Context/Context';
import {
  BsFillTrash3Fill,
  BsFillPlusSquareFill,
  BsFillFileMinusFill,
} from 'react-icons/bs';

export const Cart = ({
  id,
  mainId,
  name,
  title,
  price,
  image,
  thumbnail,
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
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <article className="flex w-full sm:px-1 font-[Calibri] items-center justify-between bg-white py-2">
      {/* Product Thumbnail and Name */}
      <div className="w-1/2 flex items-center">
        <img
          src={thumbnail}
          alt={name}
          className="object-cover h-20 w-20 rounded border-separate"
        />
        <h4 className="ml-4 text-[12px] text-black font-bold">
          {title}
        </h4>
      </div>

      {/* Product Price */}
      <div className="w-1/4 text-center">
        <h4 className="text-sm font-bold text-black">
          ${price.toLocaleString()}
        </h4>
      </div>

      {/* Quantity Controls */}
      <div className="w-1/4 flex items-center justify-center gap-2">
        <button className="p-2" onClick={decrease}>
          <BsFillFileMinusFill />
        </button>
        <p>{amount}</p>
        <button className="p-2" onClick={increase}>
          <BsFillPlusSquareFill />
        </button>
      </div>

      {/* Remove Button */}
      <div className="text-end font-bold">
        <BsFillTrash3Fill
          className="text-[#B88E2F] text-[11px] hover:cursor-pointer"
          onClick={remove}
        />
      </div>
    </article>
  );
};

export default Cart;
