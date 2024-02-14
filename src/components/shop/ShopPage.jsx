import React, { useEffect } from 'react';
import NewHeader from '../home/NewHeader';
import ShopHeaderImage from '../images/Rectangle 1.png';
import Breadcrumbs from '../others/Breadcrumbs';
import LasuIcon from '../images/lasuIcon.jpg';
import OurProducts from '../home/OurProducts';

const ShopPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NewHeader />
      <div className="relative">
        <img
          src={ShopHeaderImage}
          alt="img"
          className="  w-[100vw] relative h-[40vh]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <section className="mt-[70px] px-8 md:px-16 md:text-left py-6 text-center grid md:grid-cols-1 items-center justify-center">
            <div>
              <div className="flex items-center justify-center">
                <img src={LasuIcon} alt="" className="h-24 w-24" />
              </div>
              <h1 className="font-[Calibri] text-[2rem] font-extrabold text-center">
                Shop
              </h1>
              <Breadcrumbs list={['Home', 'Shop']} />
            </div>
          </section>
        </div>
      </div>
      <OurProducts />
    </div>
  );
};

export default ShopPage;
