import React from 'react';
import {Link} from 'react-router-dom';

function Layout({children}) {
  return (
    <div className="w-full">
    <div className="fixed z-20 w-full text-center py-3 bg-gray-600 text-white font-light">
      <span className="uppercase tracking-widest">
      <Link to="/">CSV Demo App:</Link>
      </span> 
      <br />yellow-website.com
      <br />
      
      <Link 
      className="text-xs" 
      to="\dev.yellow-website.com/yw-d9/user" 
      target="_blank">Login</Link>

    </div>
    <div className="absolute z-0 w-full p-10">
      <div className="mt-20">
        {children}
      </div>
    </div>
    </div>
  )
}

export default Layout