import React from 'react';
import styles from '../style'
import {discount} from '../assets';
import GetStarted from './GetStarted';


function Hero() {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div>
          <div className='flex'>
            <span>
            <img src={discount} alt="discount" className="w-[32px] h-[32px] mb-1" />
            </span>
            <span className='text-gray-50 font-light text-sm boldspan mt-1'>
              <span>20%</span> Discount for <span>1 Month</span> Account
            </span>
          </div>
          <div>
            <div>
              <div>The next</div>
              <div>Generation</div>
            </div>
            <div>
              <GetStarted />
            </div> 
          </div>
      </div>
    </section>
  )
}

export default Hero