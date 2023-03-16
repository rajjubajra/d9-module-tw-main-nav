import { useEffect } from 'react';
import Curve from './Curve';
import gsap from 'gsap';

function Hero005() {

  useEffect(()=>{
    gsap.to(".moveT", { xPercent:-50, duration: 5, opacity: 0, repeat:-1, delay:1 } )
    gsap.to(".moveF", { xPercent:50, duration: 5, opacity: 0, repeat:-1, delay:1 } )
  },[])

  return (
    <div className='relative w-full h-screen flex flex-col justify-center'>

      {/** HEALINE */}
      <div className='text-6xl md:w-1/2 font-thin tracking-wider mb-6'>Empower Your Life with Knowledge</div>

      {/** SUMMARY */}
      <div className='text-xl md:w-3/4 my-6 tracking-wider font-light'>
      Our platform offers a vast array of courses and resources to help you expand your knowledge and achieve your goals, no matter your background or experience.
      </div>

      {/** BUTTON */}
      <div className='w-32 py-2 text-center bg-slate-700 text-gray-100 border border-black cursor-pointer hover:bg-gray-900'>Learn more</div>
    
    
      {/** CURVE BACKGROUND */}
      <Curve />

      {/** ANIMATION BACKGROUND */}
      <div className='absolute top-20 flex gap-20'>
        <div className='moveT w-48 h-48 bg-red-400 blur-3xl bg-blend-multiply rounded-full opacity-30'></div>
        <div className='moveF w-48 h-48 top-5 right-48 blur-3xl bg-blue-800  bg-blend-multiply rounded-full opacity-30'></div>
      </div>
    </div>
  
  )
}

export default Hero005
