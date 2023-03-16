import React from 'react';
import { Link } from 'react-router-dom';


function Pagenotfound() {
  
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div>
          <div>Sorry, This is not available</div>
          <div>
            <Link to="/">Go back</Link>
          </div>
      </div>
    </div>
  )
}

export default Pagenotfound
