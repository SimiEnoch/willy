import React, { useState, useEffect } from 'react';
import { Categories } from '../Categories';
import { Product } from '../Product';

function OurProducts() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(['All']);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        const productCategories = [
          'All',
          ...new Set(data.products.map((item) => item.category)),
        ];
        setProducts(data.products);
        setCategories(productCategories);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const filterItems = (category) => {
    if (category === 'All') {
      fetch('https://dummyjson.com/products')
        .then((response) => response.json())
        .then((data) => setProducts(data.products))
        .catch((error) => console.error('Error fetching products:', error));
      return;
    }

    const newItems = products.filter(
      (product) => product.category === category
    );
    setProducts(newItems);
  };

  return (
    <div className=" ">
      <div className="" id="shop">
        <div className="bg-[#F9F1E7]">
          <h1 className="text-center pt-6 font-bold text-3xl font-[Calibri]">
            Our Products
          </h1>
          <div className="pb-6 overflow-x-auto">
            {/* Filters by category */}
            <Categories
              categories={categories}
              filterItems={filterItems}
            />
          </div>
        </div>
        <div className="text-center font-bold text-4xl mt-7">
          {/* Renders the product component */}
          <Product Data={products} />
        </div>
      </div>
    </div>
  );
}

export default OurProducts;
