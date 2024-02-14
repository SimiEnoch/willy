import React, { useEffect, useState } from 'react';
import NewHeader from '../home/NewHeader';
import Breadcrumbs from '../others/Breadcrumbs';
import ShopHeaderImage from '../images/Rectangle 1.png';
import LasuIcon from '../images/lasuIcon.jpg';
import ShopFooter from '../shop/ShopFooter';
import { Footer } from '../home/Footer';
import { useGlobalContext } from '../Context/Context';
import ReuseableInputField from '../CheckOut/reuseableInputField';
import Select from 'react-select';
import { CountriesData } from './countryData';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
  const { cart } = useGlobalContext();
  const [country, setCountry] = useState(CountriesData);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [deliveryFee, setDeliveryFee] = useState(0); // State to store the delivery fee
  const [toggleCurrency, setToggleCurrency] = useState(true);

  let transferDirectly = false;

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    calculateDeliveryFee();
  }, [cart]);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const placeOrder = () => {
    alert('Order placed');
    navigate('/');
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: '1px solid gray',
      paddingTop: '16px',
      paddingBottom: '16px',
    }),
  };

  const calculateDeliveryFee = () => {
    const totalPrice = getTotalPrice();
    let newFee = 0;

    if (totalPrice < 1000) {
      newFee = 0;
    } else if (totalPrice > 1000 || totalPrice < 10000) {
      newFee = (totalPrice * 0.01).toFixed(2);
      transferDirectly = true;
    } else {
      // Set the delivery fee to be 10% of the total price
      newFee = (totalPrice * 0.01).toFixed(2);
    }

    setDeliveryFee(Number(newFee));
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.amount * item.price,
      0
    );
  };

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

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
                <img src={LasuIcon} alt="" className="h-24 w-24" />
              </div>
              <h1 className="font-[Calibri] text-[2rem] font-extrabold text-center">
                Checkout
              </h1>
              <Breadcrumbs list={['Home', 'Checkout']} />
            </div>
          </section>
        </div>
      </div>

      <div className="md:flex xl:flex lg:flex sm:grid grid-cols-1 text-start font-[Calibri] mt-5 py-5 px-1 mx-1 md:gap-0 sm:gap-5">
        <div className="flex flex-col  w-full md:flex-glow-3 sm:px-0 lg:px-14 lg:mx-14 gap-6">
          <div className="flex  py-3 px-2">
            <div className="w-full">
              <h3 className="text-[22px]  font-semibold">
                Billing details
              </h3>
            </div>
          </div>

          {/*Billing details  */}
          <div>
            <div className="sm:block lg:flex gap-7">
              <div>
                <label className="text-[14px] font-bold">
                  First Name
                </label>{' '}
                <br />
                <input
                  type="text"
                  required
                  className="border-2 p-4 w-full md:w-[32vw] lg:w-full rounded-lg border-gray-300"
                />
              </div>

              <div>
                <label className="text-[14px] font-bold">
                  Last Name
                </label>{' '}
                <br />
                <input
                  type="text"
                  required
                  className="border-2 p-4 w-full lg:w-full md:w-[32vw] rounded-lg border-gray-300"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="text-[14px] font-bold">
              Company Name (Optional)
            </label>{' '}
            <br />
            <input
              type="text"
              className="border-2 p-4 w-full sm:w-full md:w-[32vw]  rounded-lg border-gray-300"
            />{' '}
          </div>

          <div className="">
            <label className="text-[14px] font-bold">
              Country/Region
            </label>
            <Select
              id="countryCode"
              name="countryCode"
              options={country}
              value={selectedCountry}
              onChange={handleCountryChange}
              placeholder="Please select your Country"
              className="w-full sm:w-full md:w-[32vw]   rounded-lg border-2"
              styles={customStyles}
            />
          </div>

          <ReuseableInputField label="Street address" />

          <ReuseableInputField label="Town / City" />

          <div>
            <label className="text-[14px] font-bold">Zip code</label>{' '}
            <br />
            <input
              type="number"
              className="border-2 p-4 w-full sm:w-full md:w-[32vw]  rounded-lg border-gray-300"
            />{' '}
          </div>

          <div>
            <label className="text-[14px] font-bold">
              Phone Number
            </label>{' '}
            <br />
            <input
              type="number"
              className="border-2 p-4 w-full sm:w-full md:w-[32vw]  rounded-lg border-gray-300"
            />{' '}
          </div>

          <div>
            <label className="text-[14px] font-bold ">
              Email Address
            </label>{' '}
            <br />
            <input
              type="email"
              className="border-2 p-4 w-full sm:w-full md:w-[32vw]  rounded-lg border-gray-300"
            />{' '}
          </div>

          <div>
            <label className="text-[14px] font-bold">
              Additional Information
            </label>{' '}
            <br />
            <input
              type="text"
              className="border-2 p-4 w-full sm:w-full md:w-[32vw]  rounded-lg border-gray-300"
            />{' '}
          </div>
        </div>

        <div className="rounded font-[Calibri] lg:w-[100%] lg:px-14 sm:w-full h-full py-1 mb-2 gap-20 overflow-y-auto sticky top-20">
          <div className="flex justify-between">
            <div>
              <div className="font-bold text-xl">
                Products Ordered
              </div>
              <div className="flex flex-col  py-2  gap-0 ">
                {cart.map((item) => (
                  <div className="text-gray-500 font-bold text-[14px]">
                    {item.name} x {item.amount}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center">
              <div className="py-2 text-[#B88E2F] font-bold md:text-[20px] xl:text-[30px]">
                ₦
                {cart
                  .map((item) => item.price * item.amount)
                  .reduce(
                    (accumulator, currentValue) =>
                      accumulator + currentValue,
                    0
                  )
                  .toLocaleString()}
              </div>
            </div>
          </div>

          <div className="flex justify-between font-[Calibri]">
            <div className="flex items-center">
              <h2 className="font-bold md:text-[15px] md:py-0 lg:py-5 xl:py-10 lg:text-lg">
                Total Plus Delivery:{' '}
              </h2>
            </div>
            <div className="flex justify-between">
              <p className="py-2 font-bold">Delivery: </p>
              <div className="py-2 text-[#B88E2F] font-bold md:text-[20px] xl:text-[30px]">
                <p className="text-[16px] font-[Calibri] text-gray-700 m-0 p-0 text-end">
                  + ₦{deliveryFee.toLocaleString()}
                </p>
                <hr />
                NGN ₦
                {(
                  getTotalPrice() + Number(deliveryFee)
                ).toLocaleString()}
              </div>
            </div>
          </div>

          <hr />

          <div className="font-[Calibri] ">
            <div className="py-3 ">
              <div className="flex gap-3">
                <input type="radio" className="cursor-pointer " />
                <label className="text-[22px] ">
                  Direct Bank Transfer
                </label>
              </div>
              <p className="text-[18px] text-black">
                Make your payment directly into our bank account.
                Please use your Order ID as the payment reference.
                Your order will not be shipped until the funds have
                cleared in our account.
              </p>
            </div>

            {transferDirectly && (
              <div className="py-3">
                <div className="flex gap-3">
                  <input type="radio" className="cursor-pointer" />
                  <label className="text-[22px] ">
                    Cash On Delivery
                  </label>
                </div>
                <p className="text-[17px] text-black">
                  Pay with cash when your order is delivered to your
                  doorstep. Please have the exact amount ready for a
                  smooth transaction.
                </p>
              </div>
            )}
            <p className="py-5 text-[#9F9F9F]">
              Your personal data will be used to support your
              experience throughout this website, to manage access to
              your account, and for other purposes described in our{' '}
              <button className=" underline text-blue-500">
                privacy policy.
              </button>
            </p>

            <div className="text-center items-center justify-center mt-1 pt-1 flex">
              <button
                className="border-2 border-black px-14 py-4 rounded"
                onClick={placeOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>

      <ShopFooter />
      <Footer />
    </section>
  );
};

export default CheckOut;
