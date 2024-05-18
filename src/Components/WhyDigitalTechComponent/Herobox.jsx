import React from "react";
import ImageOne from "../../Assets/img 17.png";
import ImageTwo from "../../Assets/img 18.png";
import ImageThree from "../../Assets/img 19.png";
import { FaArrowRight } from "react-icons/fa6";

const Herobox = () => {
  return (
    <div className="w-full relative h-[150vh] bg-white">
      <div className="w-full relative h-[50%] bg-[#FFE8E0]">
        <div className="w-[55%] absolute h-[100%] overflow-hidden">
          <img
            src={ImageTwo}
            className="w-[100%] h-[100%] object-contain absolute left-[-10%]"
            alt=""
          />
          <h2 className="absolute top-[20%] font-semibold text-[#3C4858] italic text-[20px] left-[15%]">
            Why Digital Technology
          </h2>
          <h1 className="absolute text-[40px] left-[15%] top-[25%] w-[65%] font-bold text-[#3C4858] tracking-normal">
            One platform, one purchase, one login
          </h1>
          <p className="absolute top-[48%] text-[#3C4858] left-[15%] w-[60%]">
            No matter if you’re a one-person marketing shop or a whole marketing
            team, we’ve got what you need. Run display ads, social ads, and
            email ads in one place. You can't get this anywhere else.
          </p>
          <button className="bg-[#8E44AD] text-white w-[140px] tracking-wide rounded-[5px] hover:bg-[#BB408B] duration-[.8s] absolute left-[15%] top-[65%] h-[50px]">
            Get Started
          </button>
        </div>
        <div className="w-[40%] absolute right-[5%] top-[10%] h-[100%] overflow-hidden">
          <img src={ImageOne} alt="" />
        </div>
      </div>

      <div className="flex items-center flex-col w-full h-[50%]">
        <h1 className="text-[32px] font-bold w-[35%] text-center mt-[50px] text-[#3C4858]">Simplify day-to-day marketing and increase your revenue</h1>
        <p className="mt-[30px] text-[18px]">Your time and energy are precious. Digital Technology gives both back to you.</p>
        <div className="flex justify-between w-[70%] h-[40%] mt-[50px]">
          <div className="w-[42%] h-[100%] overflow-hidden"><img src={ImageThree} className="w-[100%] h-[100%] object-contain" alt="" /></div>
          <div className="w-[55%] flex flex-col justify-center h-[100%]">
            <h1 className="text-[25px] font-semibold text-[#3C4858]">Run your campaigns from one platform, get actionable insights</h1>
            <p className="mt-3 text-[18px]">AdRoll is the only marketing platform where ecommerce brands can run display ads, social media ads, and email from one place.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herobox;
