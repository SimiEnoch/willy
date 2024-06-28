import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import React, { useState } from 'react';
import { useGlobalContext } from '../Context/Context';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../config/Firebase1';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import Personicon from '../icons/Personicon';
import SearchIcon from '../icons/SearchIcon';
import LikeIcon from '../icons/LikeIcon';
import CartIcon from '../icons/CartIcon';
import Logo from '../images/Meubel House_Logos-05.png';

const NewHeader = () => {
  const { cart } = useGlobalContext();
  const [hamburger, setHamburger] = useState(false);

  // // const [userState, setUserState] = useState(null);

  // // const [user] = useAuthState(auth);

  // // const logOut = async () => {
  // //   await signOut(auth);
  // };

  const buttonHandler = () => {
    setHamburger(!hamburger);
  };

  const navigate = useNavigate();

  return (
    <header className="fixed flex z-10 top-0 w-screen shadow items-center font-[Calibri] justify-between bg-white h-[60px] sm:px-0 md:px-10 text-black ">
      <div className="flex gap-1 ">
        <img
          src={Logo}
          alt=" Logo"
          className="w-10 mt-[7px] h-10 transform scale-y-[-1]"
        />
        <h1 className="text-lg font-bold py-3 tracking-wide font-sans">
          Willy.
        </h1>
      </div>
      <nav
        className={`absolute bg-white text-black  ${
          hamburger ? 'top-[-1000%]' : 'top-[50px]'
        } w-full left-0 z-[-1] p-8 duration-2000 md:left-auto md:w-auto shadow md:shadow-none md:top-0 md:relative md:bg-transparent md:p-0 md:z-[0]`}
      >
        <ul className="flex gap-12 text-[14px] md:text-[16px] font-semibold  flex-col md:flex-row ">
          <li className="color: [#000]  ">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-slate-800 duration-500">
            <Link to="/shop/all-products">Shop</Link>
          </li>

          <li className="hover:text-slate-800 duration-500">
            <Link to="/contact-us">Contact</Link>
          </li>

          <li className="">
            <Link to="/stores">Stores</Link>
            <li />
          </li>
        </ul>
      </nav>

      <div className="hover:text-yellow-500 flex gap-5">
        <div className="pt-6">
          <Personicon />
        </div>
        <div className="pt-6">
          <SearchIcon />
        </div>
        {/* <div className="pt-6 ">
          <LikeIcon />
        </div> */}
        <li className="text-slate-800 duration-500 mb-4  order-none relative">
          <Link to="/cart">
            <CartIcon />
            <div className=" object-cover left-[17px]  absolute top-[9.5px] font-[Calibri] rounded-[50%] p-0">
              <p className=" text-white rounded-[50%] bg-red-600 text-[14.5px] font-bold px-[1.8px]">
                {cart.length}
              </p>
            </div>
          </Link>
        </li>
        {/* {user && (
    <div className="user">
      <img
        src={user.photoURL || ""}
        width="20"
        height="20"
        alt="User Profile"
      />
      <p>{user.displayName}</p>
    </div>
  )} */}
      </div>

      <div className="md:hidden block ">
        <button
          onClick={buttonHandler}
          className={`${
            hamburger ? 'block' : 'hidden'
          } duration-500 w-8`}
        >
          <AiOutlineMenu />
        </button>
        <button
          onClick={buttonHandler}
          className={`${
            hamburger ? 'hidden' : 'block'
          } duration-500 w-8`}
        >
          <AiOutlineClose />
        </button>
      </div>
    </header>
  );
};

export default NewHeader;
