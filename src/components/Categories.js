import React, { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const Categories = ({ categories, filterItems }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCategories, setVisibleCategories] = useState(categories);

  const itemsPerPage = 5;

  const handleLeftArrowClick = () => {
    const newStartIndex = Math.max(0, startIndex - itemsPerPage);
    setStartIndex(newStartIndex);
  };

  const handleCategoryClick = (category) => {
  // Toggle the active state when a category button is clicked
  const updatedCategories = categories.map((c) =>
    c.id === category.id ? { ...c, active: !c.active } : c
  );
  filterItems(category); // Pass the clicked category to the filterItems function
};


  const handleRightArrowClick = () => {
    const newStartIndex = Math.min(
      categories.length - itemsPerPage,
      startIndex + itemsPerPage
    );
    setStartIndex(newStartIndex);
  };

  useEffect(() => {
    setVisibleCategories(
      categories.slice(startIndex, startIndex + itemsPerPage)
    );
  }, [categories, startIndex]);

  return (
    <div className="flex justify-start md:justify-center">
      {startIndex > 0 && (
        <button className="px-2 mt-1" onClick={handleLeftArrowClick}>
          <AiOutlineLeft />
        </button>
      )}
      {visibleCategories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleCategoryClick(category)}
          className={`px-3 py-2 mx-1 bg-gray-200 font-bold font-sans mt-3 hover:bg-gray-300 rounded-md ${
            category.active ? "bg-[#282881]" : "bg-gray-200"
          }`}
        >
          {category} 
        </button>
      ))}
      {startIndex + itemsPerPage < categories.length && (
        <button className="px-2 mt-2" onClick={handleRightArrowClick}>
          <AiOutlineRight />
        </button>
      )}
    </div>
  );
};

