import React from 'react';
import Form from './Form';
import LoginBtn from '../../components/LoginBtn';
import SiteHeader from '../../components/SiteHeader';


function PostReview() {

  return (
    <div>
        <div>
            <div className="flex align-right">
              <LoginBtn />
            </div>
            <SiteHeader />
        </div>
      <Form />
    </div>
  )
}

export default PostReview
