import React from 'react'
import Image from "../../Assets/img 6.png"
import { FaArrowRight } from "react-icons/fa6";

const SectionFour = () => {
  return (
    <div className='relative w-screen h-[70vh] bg-white'>
    <div className='absolute left-[10%] flex items-center justify-center w-[30%] h-[80%]'>
        <img src={Image} alt="" />
    </div>
    <div className='absolute right-[10%] w-[45%] h-[80%]'>
        <h2 className='text-[30px] font-semibold w-[80%] mt-10'>Our retargeting and brand awareness ads make billions of correct choices every day</h2>
        <p className='w-[70%] mt-3 text-[18px]'>Our AI does what even the most savvy marketer alone cannot. Our powerful machine learning makes more predictions per second than the NASDAQ to attract the right customers to your site and get them buying again and again.</p>
        <a href="#" className='flex items-center text-[18px] text-[#BF6E9D] mt-5'>Explore retargeting ads <FaArrowRight className='text-[13px] mx-2 mt-1' /></a>
        <a href="#" className='flex items-center text-[18px] text-[#BF6E9D] mt-2'>Explore brand awareness ads <FaArrowRight className='text-[13px] mx-2 mt-1' /></a>
    </div>
</div>
  )
}

export default SectionFour