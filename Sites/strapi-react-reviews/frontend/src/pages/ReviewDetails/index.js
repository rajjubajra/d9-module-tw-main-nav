import React from 'react';
import {useParams} from 'react-router-dom';
import {useQuery, gql} from '@apollo/client';
import ReactMarkdown from 'react-markdown';
import LoginBtn from '../../components/LoginBtn';
import PostReviewBtn from '../../components/PostReviewBtn';
import SiteHeader from '../../components/SiteHeader';


const REVIEW = gql`
query GetReview($id: ID!) {
  review(id: $id){
    data{
      id
      attributes{
        title,
        rating,
        body,
        categories{
          data{
            id
            attributes{
              categories
            }
          }
        }
      }
    }
  }
}`



function ReviewDetails() {

  const {id} = useParams();
  console.log("id: ",id);

  const { loading, error, data } = useQuery(REVIEW,{
    variables: { id: id }
  });

  console.log("query : ",loading, error, data);


  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>;


  return (
    <>
        <div className="flex align-right">
          <PostReviewBtn /> <LoginBtn />
        </div>
        <SiteHeader />
    <div key={data.review.data.id} className="review-card">

      <div className="rating">{data.review.data.attributes.rating}</div>
      <h2>{data.review.data.attributes.title}</h2>
      
      <small>console list</small> 

      <div>
        <ReactMarkdown>{data.review.data.attributes.body}</ReactMarkdown>
      </div>
      
    </div>
    </>
  )
}

export default ReviewDetails