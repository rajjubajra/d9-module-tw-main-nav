import React from 'react';
import Form from './Form';
import LoginBtn from '../../components/LoginBtn';
import PostReviewBtn from '../../components/PostReviewBtn';
import SiteHeader from '../../components/SiteHeader';
import {useSelector} from 'react-redux';
import ReviewList from '../ReviewList';



function Login() {  

  
  const {status} = useSelector(state => state.login_user);
  
  

  return (
    <div className="relative">
    {
      status 
      ? <div>
            <div className="flex align-right">
            <PostReviewBtn /> <LoginBtn /> 
            </div>
            <SiteHeader />
          <div className="m-10">
            Welcome, You are logged in   
          </div>
          <ReviewList />            
        </div>
      : <div>
            <SiteHeader />
              <div className="center-middle">
              <Form />
            </div>
        </div>
    }
    </div>
  )
}

export default Login