import React, { useEffect } from 'react';
import NewHeader from '../home/NewHeader';
import Breadcrumbs from '../others/Breadcrumbs';
import Icon from '../images/Meubel House_Logos-05.png';
import ShopHeaderImage from '../images/Rectangle 1.png';
import ShopFooter from '../shop/ShopFooter';
import { Footer } from '../home/Footer';
import LocationIcon from '../icons/LocationIcon';
import PhoneIcon from '../icons/PhoneIcon';
import TimeIcon from '../icons/TimeIcon';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="cart font-[Calibri]">
      <NewHeader />

      <div className="relative font-[Calibri]">
        <img
          src={ShopHeaderImage}
          alt="img"
          className="w-full h-[40vh] "
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
                Contact
              </h1>
              <Breadcrumbs list={['Home', 'Contact']} />
            </div>
          </section>
        </div>
      </div>

      <div className="text-center pt-7 mt-7">
        <h2 className="font-bold text-[25px]">
          Get In Touch With Us
        </h2>
        <p className="text-[#9F9F9F] text-[16px] px-4">
          For More Information About Our Product & Services.
          <br /> Please Feel Free To Drop Us An Email. Our Staff
          Always Be There <br /> To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className="flex items-center justify-center text-start font-[Calibri] mt-10 px-4">
        <div className="flex w-full ]  mb-10 sm:items-center justify-center  gap-6 sm:flex items-start sm:justify-start">
          <div className="flex  py-3 px-2"></div>

          <div className="flex items-center justify-center w-full">
            <div className="gap-5">
              <LocationIcon />

              <div className="pl-10 w-full ">
                <h3 className="text-[18px] font-bold">Address</h3>
                <p className="text-[16px] font-semibold">
                  30, Alhaji Amoo Street, Lagos Nigeria
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="gap-5">
              <PhoneIcon />

              <div className="pl-10 w-full">
                <h3 className="text-[18px] font-bold">Phone</h3>
                <p className="text-[16px] font-semibold">
                  Mobile & Hotline: +234 903 944 6158
                  {/* <br/> Hotline: +234 903 944 6158 */}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="gap-5">
              <TimeIcon />

              <div className="pl-10 w-full">
                <h3 className="text-[18px] font-bold">
                  Working Time (West African Time)
                </h3>
                <p className="text-[16px] font-semibold">
                  Monday - Friday: 9:00A.M - 22:00P.M
                  <br />
                  Saturday - Sunday: 9:00A.M - 21:00P.M
                </p>
              </div>
            </div>
          </div>
        </div>

    
      </div>

      <ShopFooter />
      <Footer />
    </section>
  );
};

export default Contact;
