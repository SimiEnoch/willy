import React, { useEffect } from 'react';
import NewHeader from '../home/NewHeader';
import Breadcrumbs from '../others/Breadcrumbs';
import LasuIcon from '../images/lasuIcon.jpg';
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
                <img src={LasuIcon} alt="" className="w-24 h-24" />
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

      <div className="flex flex-col md:flex-row text-start font-[Calibri] mt-10 px-4">
        <div className="flex w-full  sm:order-1 order-2 md:order-1  md:w-[50%] flex-col mb-10 sm:items-center justify-center  gap-6 sm:flex items-start sm:justify-start">
          <div className="flex  py-3 px-2"></div>

          <div className="flex items-center justify-center w-full">
            <div className="gap-5">
              <LocationIcon />

              <div className="pl-10 w-full ">
                <h3 className="text-[18px] font-bold">Address</h3>
                <p className="text-[16px] font-semibold">
                  Lasu Main Rd, Ojo, Lagos 102101, Lagos
                  <br /> Nigeria
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

        <div className="rounded font-[Calibri] w-full md:w-[50%] mx-auto h-full py-6 mb-2 gap-20 overflow-y-auto  top-20">
          <div className="mb-5">
            <label className="text-[14px] font-bold">Your Name</label>{' '}
            <br />
            <input
              type="text"
              required
              placeholder="e.g John Doe"
              className="border-2 p-4 w-[100%] lg:w-[40vw] rounded-lg border-gray-300"
            />
          </div>

          <div className="mb-5">
            <label className="text-[14px] font-bold">
              Email Address
            </label>{' '}
            <br />
            <input
              type="email"
              required
              placeholder="e.g johndoe@gmail.com"
              className="border-2 p-4 w-[100%]  lg:w-[40vw] rounded-lg border-gray-300"
            />
          </div>

          <div className="mb-5">
            <label className="text-[14px] font-bold">Subject </label>{' '}
            <br />
            <input
              type="text"
              required
              placeholder="This is Optional"
              className="border-2 p-4 w-[100%]  lg:w-[40vw] rounded-lg border-gray-300"
            />
          </div>

          <div className="mb-5">
            <label className="text-[14px] font-bold">Message </label>{' '}
            <br />
            <textarea
              className="border-2 p-4 w-[100%]  lg:w-[40vw] rounded-lg border-gray-300"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <div className="">
            <button
              className="bg-[#B88E2F] px-14 py-2 text-white  rounded font-[Calibri]"
              onClick={() => alert('Details Submitted')}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <ShopFooter />
      <Footer />
    </section>
  );
};

export default Contact;
