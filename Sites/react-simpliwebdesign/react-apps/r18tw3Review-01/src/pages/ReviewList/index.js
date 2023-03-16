import React from 'react';
import Listing from './Listing';
import useAxios from '../../useAxios';
import localData from './data.json';


function ReviewList() {


  /** FETCH DATA */
  const {loading, error, data} = useAxios(`/jsonapi/node/product_review?include=field_product_review_category`);
  console.log(data);




  if(loading){ return "Loading...."}
  if(error){console.log(error)}
  return (
    <Listing data={window.location.origin === "http://localhost:3000" ? localData : data} />
  )
}

export default ReviewList