import React from 'react';
import {Link} from 'react-router-dom';
import {actionLogin} from '../../redux/loginSlice';
import {useDispatch, useSelector} from 'react-redux';

function LoginBtn() {  

  const dispatch = useDispatch();
  const {status} = useSelector(state => state.login_user);


  return (
    <small className="m-5">
      {
        status 
        ? <Link to='/login' >
            {/** empty actionLogin for Logout user */}
            <small onClick={()=> dispatch(actionLogin())}>Logout</small>
          </Link>
        : <Link to="/login">Login</Link>
      }
    </small>
  )
}

export default LoginBtn
