import React from 'react';
import {useParams} from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

function ReviewDetails() {

  const {id} = useParams();
  console.log(id);

  const { loading, error, data } = useFetch('http://localhost:1337/api/reviews/' + id)
  console.log(loading, error, data);


  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>;


  return (
    <div key={data.id} className="review-card">
      <div className="rating">{data.attributes.rating}</div>
      <h2>{data.attributes.title}</h2>
          
      <small>console list</small>

      <p>{data.attributes.body}</p>
    </div>
  )
}

export default ReviewDetails