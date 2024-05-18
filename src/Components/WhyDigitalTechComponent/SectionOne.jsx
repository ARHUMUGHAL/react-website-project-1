import React from "react";
import ImageOne from "../../Assets/img 7.png";
import ImageTwo from "../../Assets/img 20.png";

const SectionOne = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-[80vh] bg-white">
      <div className="flex justify-between w-[70%] h-[40%] mt-[50px]">
        <div className="w-[55%] h-[100%] overflow-hidden">
        <h1 className="text-[25px] font-semibold text-[#3C4858]">
        Proven, trusted, and effective
          </h1>
          <p className="mt-3 text-[18px] w-[85%]">
          Digital Technology has been trusted by over 120,000 brands over 15 years to deliver marketing results and revenue. Our customers commonly see $3 to $10 or more for every $1 spent with Digital Technology.
          </p>

        </div>
        <div className="w-[42%] flex flex-col justify-center h-[100%]">
        <img
            src={ImageOne}
            className="w-[100%] h-[100%] object-contain"
            alt=""
          />
        </div>
      </div>

      <div className="flex justify-between w-[70%] h-[40%] mt-[50px]">
        <div className="w-[35%] h-[100%] overflow-hidden">
        <img
            src={ImageTwo}
            className="w-[100%] h-[100%] object-contain"
            alt=""
          />
        </div>
        <div className="w-[55%] flex flex-col justify-center h-[100%]">
        <h1 className="text-[25px] font-semibold text-[#3C4858]">
        Proven, trusted, and effective
          </h1>
          <p className="mt-3 text-[18px] w-[85%]">
          Digital Technology has been trusted by over 120,000 brands over 15 years to deliver marketing results and revenue. Our customers commonly see $3 to $10 or more for every $1 spent with Digital Technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
