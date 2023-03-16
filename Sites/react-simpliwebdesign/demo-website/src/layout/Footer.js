import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='w-full h-10 fixed bottom-0 bg-blue-500'>
        <div className='w-full flex justify-center mt-2'>
        <Link href="https://simpliwebdesign.com" 
          target="_blank"
          className='text-sm text-white font-thin tracking-wider'>
          simpliwebdesign.com</Link>
        </div>
      </div>
  )
}

export default Footer
