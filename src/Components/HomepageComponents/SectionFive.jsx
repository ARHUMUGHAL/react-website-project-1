import React from "react";
import Image from "../../Assets/img 7.png";
import { FaArrowRight } from "react-icons/fa6";

const SectionFive = () => {
  return (
    <div className="relative w-screen h-[60vh] bg-white">
      <div className="absolute right-[15%] flex items-center justify-center w-[30%] h-[80%]">
        <img src={Image} alt="" />
      </div>
      <div className="absolute left-[15%] w-[45%] h-[80%]">
        <h2 className="text-[30px] font-semibold w-[70%] mt-10">
          Experts to manage your advertising
        </h2>
        <p className="w-[70%] mt-3 text-[18px]">
          Want to run effective campaigns but don’t have the bandwidth to manage
          different platforms? AdRoll managed services can be an extension of
          your marketing team, providing you with a dedicated platform expert to
          partner with, helping you and your team achieve your marketing goals
          and maximize return from your campaigns.
        </p>
        <a
          href="#"
          className="flex items-center text-[18px] text-[#BF6E9D] mt-5"
        >
          Get the support you deserve{" "}
          <FaArrowRight className="text-[13px] mx-2 mt-1" />
        </a>
      </div>
    </div>
  );
};

export default SectionFive;
