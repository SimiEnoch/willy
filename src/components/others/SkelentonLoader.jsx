import React from "react";

const SkelentonLoader = () => {
  return (
    <div className="border-none bg-gray-200 animate-pulse">
      <div className="w-full h-[18rem] bg-gray-300"></div>
      <div className="flex items-center justify-between p-5">
        <div className="w-3/4 h-4 bg-gray-300"></div>
        <div className="w-1/4 h-4 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default SkelentonLoader;
