import React from 'react';
import {TfiEmail} from 'react-icons/tfi';
import {IconContext} from 'react-icons';

function ContactEmail() {
  return (  
    <div className='flex flex-wrap'>
      <div className='md:py-1 pr-3'>
      <IconContext.Provider value={{ color: "rgb(59 130 246)", size: "1.5em"}} >
        <TfiEmail />
      </IconContext.Provider>
        
      </div>

      <div className='font-bold text-blue-500 md:text-xl text-sm '>
        info@simpliwebdesign.com
      </div>
    </div>
  )
}

export default ContactEmail
