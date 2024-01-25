import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
import { useGlobalContext } from "../Context/Context";
import { Link } from "react-router-dom";
import NewHeader from "../home/NewHeader";
import Breadcrumbs from "../others/Breadcrumbs";
import ShopHeaderImage from "../images/Rectangle 1.png";
import MilloxiLogo from "../images/Meubel House_Logos-05.png";
import ShopFooter from "../shop/ShopFooter";
import { Footer } from "../home/Footer";
import { useMediaQuery } from "react-responsive";

const CartContainer = ({ cartContainer }) => {
  // const { amount } = useGlobalContext();
  const { cart, clearCart } = useGlobalContext();

  const isLargeScreen = useMediaQuery({ minWidth: 1100 });
  const isMediumScreen = useMediaQuery({ minWidth: 375, maxWidth: 1099 });

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCheckOut = () => {
    navigate("/checkout");
  };

  if (cart.length === 0) {
    return (
      <section className="">
        <NewHeader />

        <div className="relative">
          <img src={ShopHeaderImage} alt="img" className="w-full h-[40vh] " />
          <div className="absolute inset-0 flex items-center justify-center">
            <section className="mt-[20px] px-8 md:px-16 md:text-left text-center grid md:grid-cols-1 items-center justify-center">
              <div>
                <div className="flex items-center justify-center">
                  <img
                    src={MilloxiLogo}
                    alt=""
                    className="transform scale-y-[-1]"
                  />
                </div>
                <h1 className="font-[Calibri] text-[2rem] font-extrabold text-center">
                  Cart
                </h1>
                <Breadcrumbs list={["Home", "Cart"]} />
              </div>
            </section>
          </div>
        </div>
        <header className="font-bold text-center py-5 text-2xl text-zinc-950 ">
          <h2 className="mt-5">Your Cart</h2>
          <h4 className="pt-3">is currently empty...</h4>
        </header>
        <div className="flex items-center justify-center pt-3">
          <Link to="/" className=" text-green-800 text-center p-2 rounded">
            Back to home page ?
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="cart font-[Calibri]">
      <NewHeader />

      <div className="relative font-[Calibri]">
        <img src={ShopHeaderImage} alt="img" className="w-full h-[40vh]" />
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
                Cart
              </h1>
              <Breadcrumbs list={["Home", "Cart"]} />
            </div>
          </section>
        </div>
      </div>

      <div className="md:flex text-start sm:grid sm:grid-cols-2 font-[Calibri] mt-5 py-5 sm:px-2 md:px-0">
        <div className="lg:flex order-1 flex-col flex-grow md:w-5/6 w-full md:flex-glow-3 px-6 gap-6 sm:grid sm:grid-cols-1 md:grid-cols-1 md:grid">
          <div className="flex bg-[#F9F1E7]  p-3  font-sans ">
            <div className="w-[50%]">
              <h3 className="text-[12px] font-bold">Product(s)</h3>
            </div>
            <div className="w-[30%]">
              <h3 className="text-[12px] font-bold text-start px-0 sm:px-2 md:px-8 xl:px-0.5 lg:px-3 lg:text-start">Price</h3>
            </div>
            <div className="w-[30%] lg:block hidden">
              <h3 className="text-[12px] font-bold px-0 md:px-5 xl:px-5 lg:px-0.5 text-start">Old Price</h3>
            </div>
            <div className="w-[25%]">
              <h3 className="text-[12px] font-bold px-0  md:px- xl:px-5 lg:px-0.5 lg:text-start xl:text-center text-start">
                Quantity
              </h3>
            </div>
          </div>

          {cartContainer.map((carts) => {
            return <Cart {...carts}></Cart>;
          })}
        </div>

        <div className="bg-[#F9F1E7] order-2 rounded font-[Calibri] px-6 sm:mt-5 md:mt-0 text-center md:w-[20vw] sm:w-[100%] h-[16rem] py-1 mb-2 my-10 mx-3 font-bold gap-20 text-2xl overflow-y-auto sticky top-20">
          <h4 className="underline font-[Calibri] text-[20px]">Cart Totals</h4>
          <div className="py-7">
            <div className="flex text-center py-2 items-center gap-4 justify-center">
              <p className="text-[12px]">Subtotal</p>
              <div className="text-gray-400 font-normal text-[16px]">
                $
                {cart
                  .map((item) => item.price * item.amount)
                  .reduce(
                    (accumulator, currentValue) => accumulator + currentValue,
                    0
                  )
                  .toLocaleString()}
                .00
              </div>
            </div>
            <div className="flex text-center items-center gap-4 justify-center">
              <p className="text-[18px] font-extrabold">Total</p>
              <div className="text-[#B88E2F] text-[20px] font-semibold">
                $
                {cart
                  .map((item) => item.price * item.amount)
                  .reduce(
                    (accumulator, currentValue) => accumulator + currentValue,
                    0
                  )
                  .toLocaleString()}
                .00
              </div>
            </div>

            <div className="mt-4">
              <button
                onClick={handleCheckOut}
                className="border-[1px] border-black px-auto p-2 py-1 rounded-lg font-normal text-[17px]"
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="flex justify-center items-center mb-5">
          <button
            className="bg-[#F9F1E7] border-2 text-black p-2 rounded-lg hover:scale-100 text-xl font-[700]"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>

        <div className="flex justify-center items-center mb-5">
          <span>
            <Link to="/" className=" text-green-800 text-center p-2 rounded">
              Back to home page ?
            </Link>
          </span>
        </div>
      </footer>

      <ShopFooter />
      <Footer />
    </section>
  );
};

export default CartContainer;
