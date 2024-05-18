import React from 'react'
import ImageOne from "../../Assets/img 14.png"
import ImageTwo from "../../Assets/img 15.png"
import ImageThree from "../../Assets/img 16.png"
import ImageFour from "../../Assets/img 17.jpg"
import ImageFive from "../../Assets/img 18.jpg"
import ImageSix from "../../Assets/img 19.jpg"
import ImageSeven from "../../Assets/img 20.jpg"
import ImageEight from "../../Assets/img 21.jpg"


const SectionSix = () => {
  return (
    <div className='relative w-screen h-[120vh] bg-white'>
        <div className='w-[35%] h-[50%] absolute right-[10%]'>
            <img src={ImageOne} className='w-[100%] h-[100%] object-cover' alt="" />
        </div>
        <div className='w-[60%] absolute flex justify-between left-[20%] top-[15%] h-[50%] border-[8px] border-[#303273]'>
            <div className='w-[40%] h-[100%] relative'>
                <div className='absolute left-[10%] top-[10%] w-[200px] h-[150px]'><img src={ImageTwo} alt="" /></div>
                <p className='absolute text-[18px] top-[60%] left-[10%]'>"Since last year, <span className='font-bold'>our revenue has increased 191%, our attributed conversions 177%</span>, and our <span className='font-bold'>engagement 33%</span>. We’re reaching and converting customers higher in the funnel."</p>
            </div>
            <div className='relative w-[50%] h-[100%]'>
                <img className='absolute bottom-[0%] h-[90%]' src={ImageThree} alt="" />
                <h3 className='absolute top-[35%] right-[5%] text-[30px]'><span className='font-bold text-[#3C4858]'>Digital Tech customers</span> make</h3>
                <h1 className='absolute text-[90px] right-[20%] top-[40%] font-bold text-[#3C4858]'>$165B</h1>
                <h3 className='absolute top-[70%] right-[20%] text-[30px]'>in sales <span className='font-bold text-[#3C4858]'>every year</span></h3>
            </div>
        </div>
        <div className='w-[50%] flex justify-between h-[18%] absolute left-[25%] bottom-[8%]'>
            <div className='w-[18%] h-[100%] overflow-hidden'><img src={ImageFour} className='w-[100%] h-[100%] object-contain' alt="" /></div>
            <div className='w-[18%] h-[100%] overflow-hidden'><img src={ImageFive} className='w-[100%] h-[100%] object-contain' alt="" /></div>
            <div className='w-[18%] h-[100%] overflow-hidden'><img src={ImageSix} className='w-[100%] h-[100%] object-contain' alt="" /></div>
            <div className='w-[18%] h-[100%] overflow-hidden'><img src={ImageSeven} className='w-[100%] h-[100%] object-contain' alt="" /></div>
            <div className='w-[18%] h-[100%] overflow-hidden'><img src={ImageEight} className='w-[100%] h-[100%] object-contain' alt="" /></div>
        </div>
    </div>
  )
}

export default SectionSix