import React from "react";
import { useTypewriter } from 'react-simple-typewriter'
import { FaArrowRightLong } from "react-icons/fa6";
import Graphic from "../../Assets/img 3.png";
import logo1 from "../../Assets/img 8.png"
import logo2 from "../../Assets/img 9.png"
import logo3 from "../../Assets/img 10.png"
import logo4 from "../../Assets/img 11.png"
import logo5 from "../../Assets/img 12.png"
import logo6 from "../../Assets/img 13.png"

const SectionOne = () => {

 const [typeEffect] = useTypewriter({
    words : ['established marketer','marketing newbie','big marketing department'],
    loop : {},
 })


  return (
    <div className="relative w-screen h-[80vh] bg-white">
      <div className="absolute left-[10%] w-[30%] h-[75%]">
        <h1 className="text-[32px] font-semibold">
          Digital Technology work for the
        </h1>
        <h1 className="text-[32px] underline font-semibold">
          {typeEffect}
        </h1>
        <p className="mt-5">Our industry-first automation builder gives you full control of campaigns across display, social, and email — all from one place.</p>
        <a href="#" className="flex items-center mt-10 text-[20px] text-[#BB6CAD] hover:underline">Explore automation builder <FaArrowRightLong className="mt-2 text-[13px] mx-2" /></a>
      </div>
      <div className="absolute right-[10%] w-[40%] h-[75%]">
        <img src={Graphic} alt="Graphical Image Here" />
      </div>
      <div className="absolute w-[80%] left-[50%] translate-x-[-50%] flex justify-between h-[15%] bottom-[5%]">
        <div className="w-[16%] h-[100%] overflow-hidden"><img src={logo1} className="w-[100%] h-[55%] object-contain" alt="" /></div>
        <div className="w-[16%] h-[100%] overflow-hidden"><img src={logo2} className="w-[100%] h-[55%] object-contain" alt="" /></div>
        <div className="w-[16%] h-[100%] overflow-hidden"><img src={logo3} className="w-[100%] h-[55%] object-contain" alt="" /></div>
        <div className="w-[16%] h-[100%] overflow-hidden"><img src={logo4} className="w-[100%] h-[55%] object-contain" alt="" /></div>
        <div className="w-[16%] h-[100%] overflow-hidden"><img src={logo5} className="w-[100%] h-[55%] object-contain" alt="" /></div>
        <div className="w-[16%] h-[100%] overflow-hidden"><img src={logo6} className="w-[100%] h-[55%] object-contain" alt="" /></div>
      </div>
    </div>
  );
};

export default SectionOne;
