import React from 'react';
import Form from './Form';
import ReviewList from '../ReviewList';



function Login() {  

  
  const status = false;
  

  return (
    <div>
    {
      status 
      ? <div>   
          <div className="m-10">
            Welcome, You are logged in   
          </div>
          <ReviewList />            
        </div>
      : <div>
            <div className="center-middle">
              <Form />
            </div>
        </div>
    }
    </div>
  )
}

export default Login