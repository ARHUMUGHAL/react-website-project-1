import React from 'react'
import Shape from "../../Assets/img 2.png"
import Graphic from "../../Assets/img 1.png"

const Herobox = () => {
  return (
    <div className='w-screen h-[80vh] flex justify-between bg-white overflow-hidden'>
        <div className='relative w-[40%] h-[100%]'>
            <h1 className='absolute top-[12%] left-[10%] text-[40px] font-bold w-[65%] text-[#3C4858]'>Smaller budgets need smarter dollars</h1>
            <p className='text-[20px] absolute left-[10%] top-[35%]'>Create, manage, and analyze your display, Facebook, Instagram, Pinterest, TikTok, and email campaigns from a single platform. AdRoll helps marketers do more with less.</p>
            <a href="#" className='flex w-[150px] absolute left-[10%] top-[55%] h-[50px] rounded-[5px] hover:bg-[#9EDDF6] duration-[.5s] items-center justify-center text-white bg-[#00AEEF]'>Get in Touch</a>
        </div>
        <div className='relative w-[55%] h-[100%]'>
            <img src={Shape} className='w-[100%] h-[100%] absolute' alt="Blue Shape Here" />
            <img src={Graphic} className='w-[110%] h-[110%] top-[-25%] right-[0%] object-contain absolute' alt="Blue Shape Here" />
        </div>
    </div>
  )
}

export default Herobox