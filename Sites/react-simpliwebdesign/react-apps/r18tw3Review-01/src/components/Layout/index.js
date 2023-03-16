import React from 'react';
import SiteHeader from '../SiteHeader';
import LoginBtn from '../LoginBtn';

function Layout({children}) {

  return (
    <div className="w-full md:p-10">
      <div className="mb-5">
        <div className="w-full flex justify-end">
          <LoginBtn /> 
        </div>
        <SiteHeader />
      </div>
      
      <div>{children}</div>
    </div>
  )
}

export default Layout