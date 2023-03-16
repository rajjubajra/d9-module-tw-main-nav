import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {useQuery, gql} from '@apollo/client';
import LoginBtn from '../../components/LoginBtn';
import SiteHeader from '../../components/SiteHeader';


const CATEGORY = gql`
query getCategories($id: ID!) {
  category(id: $id){
    data{
      id
      attributes{
        categories
        reviews{
          data{
            id
            attributes{
              title,
              body,
              rating,
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
      }
      
    }
  }   
}`  

function Category() {

  const {id} = useParams();

  const {loading, error, data} = useQuery(CATEGORY,{
    variables: {id: id}
  });

  console.log(loading, error, data);


  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>;

  return (
    <div>
      <div className="flex align-right">
        <LoginBtn />
      </div>
      <SiteHeader />
      <h2>{data.category.data.attributes.categories}</h2>
      {data.category.data.attributes.reviews.data.map(review => {
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

export default Category
