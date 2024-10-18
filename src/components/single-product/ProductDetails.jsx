import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewHeader from '../home/NewHeader';
import { useGlobalContext } from '../Context/Context';
import '../../App.css';
import Breadcrumbs from '../others/Breadcrumbs';
import { Footer } from '../home/Footer';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Loader from '../others/Loader';

const ProductDetails = () => {
  const { setCart, cart } = useGlobalContext();
  const [activeButton, setActiveButton] = useState('first');
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [oneProduct, setOneProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        );
        const product = await response.json();
        setOneProduct(product);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  useEffect(() => {
    let timeout;
    if (showAlert) {
      timeout = setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [showAlert]);

  const handleAddToCart = () => {
    if (oneProduct) {
      addToCart(oneProduct);
      setShowAlert(true);
    }
  };

  const addToCart = (product) => {
    const existingProduct = cart.find(
      (item) => item.id === product.id
    );
    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, amount: item.amount + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, amount: 1 }]);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader loading={loading} />
      </div>
    );
  }

  if (!oneProduct) {
    return <div>Product not found</div>;
  }

  const oldPrice = (
    oneProduct.price /
    (1 - oneProduct.discountPercentage / 100)
  ).toFixed(2);

  return (
    <div
      key={id}
      className="border-none font-normal text-black font-[Calibri]"
    >
      <NewHeader />
      <section className="mt-[20px] w-full md:text-left py-6 text-center grid md:grid-cols-1">
        <div className="bg-[#F9F1E7] px-8 md:px-16 pt-5 font-sans">
          <Breadcrumbs list={['Home', 'Shop', oneProduct.title]} />
        </div>
      </section>

      <div className="px-2 md:flex sm:grid sm:grid-cols-2">
        <div className="md:w-full mt-0 sm:w-full px-2 md:px-0">
          <img
            src={oneProduct.thumbnail}
            alt="Product"
            className="object-cover h-[h] w-full"
          />
        </div>

        <div className="w-full text-lg text-start flex justify-center items-center px-5 md:py-0 xl:py-0 lg:py-0 sm:py-20">
          <div>
            <h4 className="text-[#3A3A3A] px-5 font-[Calibri] leading-7 font-semibold text-[30px]">
              <span className="uppercase">
                {oneProduct.title.charAt(0)}
              </span>
              {oneProduct.title.slice(1).toLowerCase()}
            </h4>
            <div className="text-start">
              <h4 className="px-5 text-[16px] text-[#898989] font-sans rounded">
                {oneProduct.category}
              </h4>
            </div>
            <span className="flex">
              <div className="text-start px-5">
                <h4 className="text-[#3A3A3A] bg-green-300 px-1 font-sans font-bold text-[21px] rounded">
                  ${oneProduct.price.toLocaleString()}
                </h4>
              </div>
              <div>
                <h4 className="text-[#898989] font-[Calibri] font-normal line-through text-[18px] px-5 rounded">
                  ${oldPrice}
                </h4>
              </div>
            </span>

            <div className="px-5">
              <div
                className="w-full"
                dangerouslySetInnerHTML={{
                  __html: oneProduct.description.replace(
                    /\n/g,
                    '<br />'
                  ),
                }}
              />
            </div>

            <div className="px-5 mt-5 font-[Calibri] mb-3">
              <button
                className="w-44 cursor-pointer font-normal text-[17px] border-[1px] border-black bg-white text-md font-[Calibri] hover:text-white hover:bg-slate-700 mb-1 p-2 rounded-[12px] mt-2"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
              {showAlert && (
                <Alert
                  severity="success"
                  sx={{
                    backgroundColor: '#006400',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  className="fixed top-14 left-1/2 transform -translate-x-1/2 w-full"
                >
                  <AlertTitle className="font-extrabold py-0">
                    Cart updated: Please check the quantities of items
                    in your cart
                  </AlertTitle>
                </Alert>
              )}
            </div>
          </div>
        </div>
      </div>

      <hr />
      <Footer />
    </div>
  );
};

export default ProductDetails;
