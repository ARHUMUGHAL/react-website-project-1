import React from 'react'
import Image from "../../Assets/img 4.png"
import { FaArrowRight } from "react-icons/fa6";

const SectionTwo = () => {
  return (
    <div className='relative w-screen h-[70vh] bg-white'>
        <div className='absolute left-[10%] top-[10%] flex items-center justify-center w-[30%] h-[80%]'>
            <img src={Image} alt="" />
        </div>
        <div className='absolute right-[10%] top-[10%] w-[45%] h-[80%]'>
            <h2 className='text-[30px] font-semibold w-[70%] mt-10'>For 15 years, we've been the leader in helping our customers find their best customers</h2>
            <p className='w-[70%] mt-3 text-[18px]'>The AdRoll platform is powered by 15+ years of data from hundreds of thousands of brands and billions of shoppers. Let our expertise find the right customers for your business.</p>
            <a href="#" className='flex items-center text-[18px] text-[#BF6E9D] mt-5'>Learn More <FaArrowRight className='text-[13px] mx-2 mt-1' /></a>
        </div>
    </div>
  )
}

export default SectionTwo