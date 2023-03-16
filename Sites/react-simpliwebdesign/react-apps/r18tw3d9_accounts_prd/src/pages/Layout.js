import React from 'react';
import {Link} from 'react-router-dom';

function Layout({children}) {
  return (
    <div className="w-full">
    <div className="fixed z-20 w-full text-center py-3 bg-blue-900 text-white font-light">
      <span className="uppercase tracking-widest print:hidden">
      <Link to="/">Accounting App:</Link>
      </span> 

      <div 
      className="cursor-pointer mt-2 fixed bottom-0 bg-blue-900 w-full"
      onClick={()=> window.location.replace("https://simpliwebdesign.com")}>
      simpliwebdesign.com
      </div>
      
    </div>
    <div className="absolute z-0 w-full">
      <div className="mt-20 md:px-20 p-5">
        {children}
      </div>
    </div>
    </div>
  )
}

export default Layout
