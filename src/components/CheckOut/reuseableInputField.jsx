import React from "react";

const ReuseableInputField = (props) => {
  return (
    <div>
      <label  className="font-bold text-[14px]">{props?.label}</label> <br />
      <input
        type="text"
        placeholder={props?.placeholder}
        required
        className={`${props.className} border-2 p-4 w-full sm:w-full md:w-[32vw]  rounded-lg border-gray-300` } 
      />{" "}
    </div>
  );
};

export default ReuseableInputField;
