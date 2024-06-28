import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Data } from '../Data';
import NewHeader from '../home/NewHeader';
import { useGlobalContext } from '../Context/Context';
import '../../App.css';
import Breadcrumbs from '../others/Breadcrumbs';
import { Footer } from '../home/Footer';
import StarRating from '../Rating';

const ProductDetails = () => {
  const { setCart, cart } = useGlobalContext();
  const [activeButton, setActiveButton] = useState('first');
  const [selectedImage, setSelectedImage] = useState(null);

  const { id } = useParams();
  const oneProduct = Data.find(
    (product) => product.id === parseInt(id)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const handleImageClick = (image) => {
    // Set selected image for the main image
    setSelectedImage(image);

    // Update additional images based on the clicked image
    const updatedProduct = { ...oneProduct };
    for (let imgIndex = 2; imgIndex <= 5; imgIndex++) {
      const additionalImage = oneProduct[`image${imgIndex}`];
      if (additionalImage) {
        updatedProduct[`image${imgIndex}`] = additionalImage.replace(
          '_1',
          `_${image}`
        );
      }
    }

    // Update the component state
    // Assuming you don't need to persist this change across renders
    console.log(updatedProduct);
  };

  const handleAddToCart = () => {
    console.log('Added to cart');
    addToCart(oneProduct);
  };

  const addToCart = (dataItem) => {
    const index = cart.findIndex(
      (object) => object.id === dataItem.id
    );

    if (index !== -1) {
      setCart((prev) => {
        const newCart = [...prev];
        newCart[index] = {
          ...newCart[index],
          amount: newCart[index].amount + 1,
        };
        return newCart;
      });
      return;
    }

    setCart((prev) => [
      ...prev,
      { ...dataItem, mainId: prev.length + 1 },
    ]);
  };

  return (
    <div
      key={id}
      className="border-none font-normal text-black font-[Calibri]"
    >
      <NewHeader />
      <section className="mt-[20px] w-full md:text-left py-6 text-center grid md:grid-cols-1">
        <div className="bg-[#F9F1E7] px-8 md:px-16 pt-5 font-sans">
          <Breadcrumbs list={['Home', 'Shop', oneProduct.name]} />
        </div>
      </section>

      <div className="px-2  md:flex sm:grid sm:grid-cols-2 ">
        <div className="w-1/4 h-[50vh] hidden xl:block lg:block md:hidden flex-col items-center justify-center">
          {[2, 3, 4, 5].map((imgIndex) => (
            <div
              key={imgIndex}
              className="w-full h-[5rem] flex items-center justify-center"
            >
              {oneProduct[`image${imgIndex}`] && (
                <img
                  src={oneProduct[`image${imgIndex}`]}
                  alt="img"
                  className="object-cover h-[4rem] w-[50%]"
                  onClick={() => handleImageClick(imgIndex)}
                />
              )}
            </div>
          ))}
        </div>

        {/* Main Image */}
        <div className="md:w-full mt-0 sm:w-full px-2 md:px-0">
          <img
            src={oneProduct.image}
            alt="Product"
            className="object-cover h-[h] w-full"
          />

          {/* Additional Images for Smaller Screens */}
          <div className="w-full lg:hidden mb-5 md:flex flex items-center justify-center">
            {[2, 3, 4, 5].map((imgIndex) => (
              <div
                key={imgIndex}
                className="w-full flex items-center justify-center"
              >
                {oneProduct[`image${imgIndex}`] && (
                  <img
                    src={oneProduct[`image${imgIndex}`]}
                    alt="middle img"
                    className="object-cover h-[4rem] w-[50%]"
                    onClick={() => handleImageClick(imgIndex)}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full text-lg text-start px-5 md:py-0 xl:py-0 lg:py-0 sm:py-20">
          <div className="">
            <h4 className="text-[#3A3A3A] px-5 font-[Calibri] leading-7 font-semibold text-[30px]">
              <span className="uppercase">
                {oneProduct.name.charAt(0)}
              </span>
              {oneProduct.name.slice(1).toLowerCase()}
            </h4>
            <div className=" text-start ">
              <h4 className="px-5 text-[16px] text-[#898989] font-sans  rounded ">
                {oneProduct.category}
              </h4>
            </div>
            <span className="flex ">
              <div className=" text-start px-5">
                <h4 className="text-[#3A3A3A] bg-green-300 px-1 font-sans font-bold text-[21px]  rounded ">
                  ₦{oneProduct.price.toLocaleString()}
                </h4>
              </div>
              <div className="">
                <h4 className="text-[#898989] font-[Calibri] font-normal line-through text-[18px] px-5 rounded ">
                  ₦{oneProduct.oldPrice.toLocaleString()}
                </h4>
              </div>
            </span>

            <div className="px-5">
              <div
                className="w-full"
                dangerouslySetInnerHTML={{
                  __html: oneProduct?.description?.replace(
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
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mb-3 pb-3 py-3 m-0 p-0" key={id}>
        {oneProduct?.relatedProducts?.map((product, idx) => (
          <div key={idx} className="text-center">
            <button
              className={`${
                activeButton === 'first'
                  ? 'active-button'
                  : 'text-[25px] text-[#9F9F9F] px-7'
              }`}
              onClick={() => handleButtonClick('first')}
            >
              Detailed Description
            </button>
            <button
              className={`${
                activeButton === 'second'
                  ? 'active-button'
                  : 'text-[25px] text-[#9F9F9F] px-7'
              }`}
              onClick={() => handleButtonClick('second')}
            >
              Additional Information
            </button>
            <button
              className={`${
                activeButton === 'third'
                  ? 'active-button'
                  : 'text-[25px] text-[#9F9F9F] px-5'
              }`}
              onClick={() => handleButtonClick('third')}
            >
              Reviews
            </button>
            {/* Content for Detailed Description */}
            <div className="flex flex-col items-center justify-center ">
              {activeButton === 'first' &&
                product?.detailedDescription && (
                  <div className="py-3 px-10 font-bold text-black box-border border-[1px] flex flex-col items-center justify-center gap-3 w-[70vw] border-gray-300">
                    {product?.detailedDescription}
                  </div>
                )}
            </div>
            {/* Content for Additional Information */}
            <div className="flex flex-col items-center justify-center">
              {activeButton === 'second' &&
                product?.additionalInformation && (
                  <div className="text-black font-bold px-10 flex flex-col items-center py-2 justify-center gap-3 w-[70vw] box-border border-gray-300 border-[1px]">
                    {product?.additionalInformation}
                  </div>
                )}
            </div>
            {/* Content for Reviews */}
            {activeButton === 'third' &&
              product?.additionalInformation && (
                <div className="text-[#828181] mx-10 px-10 flex items-center justify-center flex-col">
                  {product?.reviews?.map((prod, reviewIdx) => (
                    <div
                      key={reviewIdx}
                      className="text-start flex text-black gap-3 w-[70vw] box-border border-[1px] border-black"
                    >
                      <div className="flex-shrink-0 w-1/4 bg-gray-200 py-3 px-3">
                        <h2>{prod.user}</h2>
                        <h2 className="text-lg">{prod.title}</h2>
                      </div>
                      <div className="flex-1 py-3 px-3 font-bold">
                        <p>
                          Rating: <StarRating ratings={prod.rating} />
                        </p>
                        <p>Comment: {prod.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
          </div>
        ))}
      </div>

      <hr />
      <Footer />
    </div>
  );
};

export default ProductDetails;
