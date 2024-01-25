import React, { useState } from "react";
import { Data } from "../Data";
import { Categories } from "../Categories";
import { Product } from "../Product";

const allCategories = ["All", ...new Set(Data.map((data) => data.category))];
console.log(allCategories);

function OurProducts() {
  const [products, setProducts] = useState(Data);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "All") {
      setProducts(Data);
      return;
    }

    const newItems = Data.filter((data) => data.category === category);
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
            <Categories categories={categories} filterItems={filterItems} />
          </div>
        </div>
        <div className=" text-center  font-bold text-4xl mt-7">
          <Product Data={products} />
        </div>
      </div>
    </div>
  );
}
export default OurProducts;
