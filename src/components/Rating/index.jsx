import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../Rating/style.css";

const StarRating = ({ ratings }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="flex gap-1">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label className="flex ">
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              onMouseOver={() => setHover(ratingValue)}
              onMouseOut={() => setHover(null)}
            />
            <FaStar
              className="cursor-pointer"
              color={index < ratings ? "#ffc107" : "#e4e5e9"}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
