import React from "react";
import "./style.css";
import { IoIosArrowForward } from "react-icons/io";

const Breadcrumbs = (props) => {
  return (
    <div className=" my-3 lg:px-4  flex">
      {props.list.map((item, index) => (
        <span
          key={index}
          className={`${index > props.list.length - 2 && "breadcrumb "} flex items-center`}
        >
          {item}
          {index < props.list.length - 1 && (
            <span className="px-1 text-black mt-1 text-[13px]">
              <IoIosArrowForward />
            </span>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
