import React from 'react';
import LoginBtn from '../../components/LoginBtn';
import SiteHeader from '../../components/SiteHeader';
import ReviewList from '../ReviewList';
import PostReviewBtn from '../../components/PostReviewBtn';



export default function Homepage() {


  return (
    <div>
      
      <div className="flex align-right">
        <PostReviewBtn /> <LoginBtn />
      </div>
      {/** SITE HEADER */}
      <div>
        <SiteHeader />
      </div>
      
      <ReviewList />
    </div>
  )
}