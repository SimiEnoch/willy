import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';
import { useGlobalContext } from '../Context/Context';
import { Link } from 'react-router-dom';
import NewHeader from '../home/NewHeader';
import Breadcrumbs from '../others/Breadcrumbs';
import ShopHeaderImage from '../images/Rectangle 1.png';
import Icon from '../images/Meubel House_Logos-05.png';
import ShopFooter from '../shop/ShopFooter';
import { Footer } from '../home/Footer';

const CartContainer = () => {
  const { cart, clearCart, setCart } = useGlobalContext();
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, [setCart]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Calculate total price whenever cart changes
  useEffect(() => {
    const totalPrice = cart.reduce(
      (acc, item) => acc + item.price * item.amount,
      0
    );
    setTotal(totalPrice);
  }, [cart]);

  const handleCheckOut = () => {
    navigate('/checkout');
  };

  if (cart.length === 0) {
    return (
      <section className="">
        <NewHeader />
        <div className="relative">
          <img
            src={ShopHeaderImage}
            alt="img"
            className="w-full h-[40vh]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <section className="mt-[20px] px-8 md:px-16 md:text-left text-center grid md:grid-cols-1 items-center justify-center">
              <div>
                <div className="flex items-center justify-center">
                  <img
                    src={Icon}
                    alt=""
                    className="transform scale-y-[-1]"
                  />
                </div>
                <h1 className="font-[Calibri] text-[2rem] font-extrabold text-center">
                  Cart
                </h1>
                <Breadcrumbs list={['Home', 'Cart']} />
              </div>
            </section>
          </div>
        </div>
        <header className="font-bold text-center py-5 text-2xl text-zinc-950 ">
          <h2 className="mt-5">Your Cart</h2>
          <h4 className="pt-3">is currently empty...</h4>
        </header>
        <div className="flex items-center justify-center pt-3">
          <Link
            to="/"
            className=" text-green-800 text-center p-2 rounded"
          >
            Back to home page?
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="cart font-[Calibri]">
      <NewHeader />
      <div className="relative font-[Calibri]">
        <img
          src={ShopHeaderImage}
          alt="img"
          className="w-full h-[40vh]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <section className="mt-[70px] px-8 md:px-16 md:text-left py-6 text-center grid md:grid-cols-1 items-center justify-center">
            <div>
              <div className="flex items-center justify-center">
                <img
                  src={Icon}
                  alt=""
                  className="transform scale-y-[-1]"
                />
              </div>
              <h1 className="font-[Calibri] text-[2rem] font-extrabold text-center">
                Cart
              </h1>
              <Breadcrumbs list={['Home', 'Cart']} />
            </div>
          </section>
        </div>
      </div>

      <div className="md:flex flex-col sm:grid sm:grid-cols-2 font-[Calibri] mt-5 py-5 sm:px-2 md:px-0">
        <div className="lg:flex flex-col flex-grow w-full  px-6 gap-6">
          {/* Table Headers */}
          <div className="flex bg-[#F9F1E7] p-3 font-sans justify-between items-center">
            <div className="w-1/2">
              <h3 className="text-[12px] font-bold">Product(s)</h3>
            </div>
            <div className="w-1/4 text-center">
              <h3 className="text-[12px] font-bold">Price</h3>
            </div>
            <div className="w-1/4 text-center">
              <h3 className="text-[12px] font-bold">Quantity</h3>
            </div>
          </div>

          {/* Cart Items */}
          {cart.map((carts) => {
            return <Cart key={carts.id} {...carts} />;
          })}
        </div>

        {/* Cart Total Section */}
        <div className="flex items-center justify-center ">
          <div className="bg-[#F9F1E7] rounded font-[Calibri] max-w-xl sm:mt-5 md:mt-0 text-center p-6">
            <div className="pb-8 text-[15px] ">
              <h3 className="mb-2 font-bold">Cart Total</h3>
              <h4 className="pb-5 text-sm">
                ${total.toLocaleString()}
              </h4>
              <hr />
            </div>
            <button
              className="bg-green-900 text-white rounded p-2 w-full text-center text-[14px]"
              onClick={handleCheckOut}
            >
              Checkout
            </button>
            <button
              className="bg-[#3B3B3B] text-white mt-3 rounded p-2 w-full text-center text-[12px]"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>

      <ShopFooter />
      <Footer />
    </section>
  );
};

export default CartContainer;
