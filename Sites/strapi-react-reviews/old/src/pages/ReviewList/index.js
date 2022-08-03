import React from 'react';
import { Link } from 'react-router-dom';
import {useQuery, gql} from '@apollo/client';


const REVIEWS = gql`
      query GetReviews {
        reviews{
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

export default function ReviewList() {

  const {loading, error, data} = useQuery(REVIEWS);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>;

  console.log(data.reviews.data)

  return (
    <div>
      {data.reviews.data.map(review => {

        const {rating, title, body, categories} = review.attributes;

        return <div key={review.id} className="review-card">
          <div className="rating">{rating}</div>
          <h2>{title}</h2>
          
      
            {
              categories.data.map( cat => <small>{cat.attributes.categories}</small>)
            }

          <p>{body.substring(0, 200)}...</p>
          <Link to={`/details/${review.id}`}>Read more</Link>
        </div>
      })}
    </div>
  )
}