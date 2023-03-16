import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className='w-full h-10 fixed top-0 bg-blue-500'>
    <div className='w-full flex justify-center mt-2 text-white tracking-wider font-light'>
        <Link to="/">Demo site</Link>
    </div>
  </div>
  )
}

export default Header
