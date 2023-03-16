import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useLogout} from '../../hooks/useLogout';



function LoginBtn() {  

  const {response} = useSelector(state => state.login_user);
  const {status} = '';
  console.log(response, "status : ",status);




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
