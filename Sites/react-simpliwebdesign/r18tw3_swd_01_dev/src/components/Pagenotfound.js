import React from 'react';
import { useNavigate, Link } from 'react-router-dom';


function Pagenotfound() {
  const navigate = useNavigate();
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div>
          <div>Sorry, This is not available</div>
          <div>
            <Link to={navigate(-1)}>Go back</Link>
          </div>
      </div>
    </div>
  )
}

export default Pagenotfound
