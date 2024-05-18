import React from "react";
import navLogo from "../../Assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="w-[100%] h-[90px] flex justify-between px-10">
      <div className="w-[60%] h-[100%] flex justify-between items-center">
        <Link to="/" className="w-[180px] flex items-center overflow-hidden h-[100%]">
          <img
            className="w-[100%] h-[100%] object-contain"
            src={navLogo}
            alt="Logo Here"
          />
        </Link>
        <ul className="flex justify-between w-[75%]">
          <li>
            <Link to="/why-adroll-digital-marketing-platform" className="flex items-center">
              Why Digital Technology
            </Link>
          </li>
          <li>
            <Link to="#" className="flex items-center text-gray-300">
              Marketing Platform
            </Link>
          </li>
          <li>
            <Link to="#" className="flex items-center text-gray-300">
              For Ecommerce
            </Link>
          </li>
          <li>
            <Link to="#" className="flex items-center text-gray-300">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="#" className="flex items-center text-gray-300">
              Resources
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-[15%] h-[100%] flex justify-between items-center">
        <a href="#">Log in</a>
        <button className="bg-[#8E44AD] text-white w-[140px] tracking-wide rounded-[5px] hover:bg-[#BB408B] duration-[.8s] h-[50px]">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
