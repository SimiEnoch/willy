import React from 'react';
import HerOBackground from '../images/Hero-Background.png';
import { Navigate, useNavigate } from 'react-router-dom';

const NewHero = () => {
  const navigate = useNavigate();

  const buyItemNow = () => {
    navigate('/shop/all-products');
  };
  return (
    <div className="relative">
      <img
        src={HerOBackground}
        alt="my-hero"
        className="w-[100vw] relative h-[90vh]"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <section
          id="home"
          className="mt-[70px] px-8 md:px-16 md:text-left py-6 text-center grid md:grid-cols-2 gap-5 items-center justify-center"
        >
          <div></div>
          <div className="flex flex-col gap-5 mb-5 md:mb-0 bg-[#FFF3E3] p-8">
            <p className=" tracking-wider font-bold">New Arrivals </p>
            <h2 className="text-[#B88E2F] text-[2rem] font-bold">
              Bringing Comfort to Your Home
            </h2>
            Discover a world of convenience and sophistication at your
            fingertips. Enhance yourlifestyle with our curated
            selection of high-quality products. Whether you're in
            search of fashion essentials or state-of-the-art
            technology, we have everything you need to elevate your
            experience.
            <div>
              <button
                className="bg-[#B88E2F] p-4 px-10 text-white text-md font-bold tracking-wider"
                onClick={buyItemNow}
              >
                BUY NOW
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewHero;
