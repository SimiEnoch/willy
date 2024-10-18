import React, { useEffect, useState } from 'react';
import NewHeader from '../home/NewHeader';
import Breadcrumbs from '../others/Breadcrumbs';
import ShopHeaderImage from '../images/Rectangle 1.png';
import Icon from '../images/Meubel House_Logos-05.png';
import ShopFooter from '../shop/ShopFooter';
import { Footer } from '../home/Footer';
import { useGlobalContext } from '../Context/Context';
import ReuseableInputField from '../CheckOut/reuseableInputField';
import Select from 'react-select';
import { CountriesData } from './countryData';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const CheckOut = () => {
  const { cart } = useGlobalContext();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [deliveryFee, setDeliveryFee] = useState(0);
  let transferDirectly = false;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    calculateDeliveryFee();
  }, [cart]);

  const placeOrder = () => {
    alert('Order placed');
    navigate('/');
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert('Your order is being processed');
    console.log(data);
    navigate('/auth/login');
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
      newFee = (totalPrice * 0.01).toFixed(2);
    }

    setDeliveryFee(Number(newFee));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.amount * item.price, 0);
  };

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <section className="cart font-sans">
      <NewHeader />
      <div className="relative">
        <img
          src={ShopHeaderImage}
          alt="Checkout Banner"
          className="w-full h-[40vh] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <section className="px-6 md:px-16 py-6 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold">Checkout</h1>
            <Breadcrumbs list={['Home', 'Checkout']} />
          </section>
        </div>
      </div>

      <div className="container flex items-center justify-center mx-auto py-5 px-4 md:px-8 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 md:grid-cols-2">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold">Billing details</h3>
          </div>

          {/* First Name */}
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              className="border p-2 w-full rounded-md"
              {...register('firstName', {
                required: 'First Name is required',
              })}
            />
            {errors.firstName && (
              <span className="text-red-600 text-xs">{errors.firstName.message}</span>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              className="border p-2 w-full rounded-md"
              {...register('lastName', {
                required: 'Last Name is required',
              })}
            />
            {errors.lastName && (
              <span className="text-red-600 text-xs">{errors.lastName.message}</span>
            )}
          </div>

          {/* Company Name */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium">
              Company Name (Optional)
            </label>
            <input
              type="text"
              className="border p-2 w-full rounded-md"
              {...register('companyName')}
            />
          </div>

          <ReuseableInputField label="Street address" register={register} />
          <ReuseableInputField label="Town / City" register={register} />

          {/* Zip Code */}
          <div>
            <label className="block text-sm font-medium">Zip code</label>
            <input
              type="number"
              className="border p-2 w-full rounded-md"
              {...register('zipCode', {
                required: 'Zip code is required',
              })}
            />
            {errors.zipCode && (
              <span className="text-red-600 text-xs">{errors.zipCode.message}</span>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <input
              type="number"
              className="border p-2 w-full rounded-md"
              {...register('phoneNumber', {
                required: 'Phone Number is required',
                minLength: {
                  value: 10,
                  message: 'Phone Number must be at least 10 digits',
                },
              })}
            />
            {errors.phoneNumber && (
              <span className="text-red-600 text-xs">{errors.phoneNumber.message}</span>
            )}
          </div>

          {/* Email Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              className="border p-2 w-full rounded-md"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && (
              <span className="text-red-600 text-xs">{errors.email.message}</span>
            )}
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold">Order Summary</h3>
            <div className="flex justify-between mt-4">
              <div>
                <p className="text-sm font-bold">Products Ordered</p>
                {cart.map((item) => (
                  <p key={item.title} className="text-sm text-gray-600">
                    {item.title} x {item.amount}
                  </p>
                ))}
              </div>
              <div className="text-right">
                <p className="text-lg font-bold">Total: ${getTotalPrice().toLocaleString()}</p>
                <p className="text-sm text-gray-600">+ Delivery: ${deliveryFee}</p>
                <p className="text-lg font-bold">
                  Grand Total: ${(getTotalPrice() + Number(deliveryFee)).toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md w-full"
          >
            Order
          </button>
        </form>
      </div>

      <ShopFooter />
      <Footer />
    </section>
  );
};

export default CheckOut;
