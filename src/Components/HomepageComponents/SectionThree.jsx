import React from 'react'
import Image from "../../Assets/img 5.png"
import { FaArrowRight } from "react-icons/fa6";

const SectionThree = () => {
  return (
    <div className='relative w-screen h-[70vh] bg-white'>
        <div className='absolute right-[15%] flex items-center justify-center w-[30%] h-[80%]'>
            <img src={Image} alt="" />
        </div>
        <div className='absolute left-[15%] w-[45%] h-[80%]'>
            <h2 className='text-[30px] font-semibold w-[70%] mt-10'>Save time and energy by running all your campaigns across millions of websites and mobile apps — from one place</h2>
            <p className='w-[70%] mt-3 text-[18px]'>When we say one-stop shop, we mean one-stop. Launch, pause, and edit ad campaigns across all the places you want to advertise, plus use that data to see your campaigns holistically and make improvements.</p>
            <a href="#" className='flex items-center text-[18px] text-[#BF6E9D] mt-5'>Explore social ads manager <FaArrowRight className='text-[13px] mx-2 mt-1' /></a>
        </div>
    </div>
  )
}

export default SectionThree