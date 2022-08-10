import React from 'react';
import {useParams} from 'react-router-dom';
import useAxios from '../../useAxios';
import Review from './Review';
// import LoginBtn from '../../components/LoginBtn';
// import PostReviewBtn from '../../components/PostReviewBtn';
// import SiteHeader from '../../components/SiteHeader';





function ReviewDetails() {

  const {id} = useParams();
  console.log("id: ",id);


  /** FETCH DATA */
  const {loading, error, data} = useAxios(`/jsonapi/node/product_review/${id}?include=field_product_review_category`);
  console.log(loading, error, data);

  


  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>;
  return (
    <Review data={data} />
  )
}

export default ReviewDetails