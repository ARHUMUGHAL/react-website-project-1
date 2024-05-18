import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const AnnouncementBar = () => {
  return (
    <div className="w-screen flex items-center justify-center h-[60px] bg-[#CC66A0]">
      <p className="flex text-white">
        🍪 Third-party cookies will go away in Chrome by the end of 2024. Get
        your guide to alternative solutions to 3pc powered marketing!{" "}
        <a href="#" className="mx-2 flex items-center text-gray-300">
          Learn More <FaArrowRightLong className="mx-2 text-[12px]" />
        </a>
      </p>
    </div>
  );
};

export default AnnouncementBar;
