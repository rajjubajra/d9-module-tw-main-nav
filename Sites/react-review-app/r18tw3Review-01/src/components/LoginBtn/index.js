import React from 'react';
import {Link} from 'react-router-dom';


function LoginBtn() {  

  
  const {status} = ''


  return (
    <small className="m-5">
      {
        status 
        ? <Link to='/login' >
            {/** empty actionLogin for Logout user */}
            <small>Logout</small>
          </Link>
        : <Link to="/login">Login</Link>
      }
    </small>
  )
}

export default LoginBtn
