import React from 'react';
import {Link} from 'react-router-dom';
import {useQuery, gql} from '@apollo/client';



const CATEGORIES = gql`
query getCategories {
  categories{
    data{
      id
      attributes{
        categories
      }
    }
  }
    
}`

function SiteHeader() {

  /** Query Result */
  const {loading, error, data} = useQuery(CATEGORIES);
  console.log(loading, error, data);



  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>;
  return (
    <div className="site-header">
      <Link to="/"><h1>Reviews</h1></Link>
      <div>
        Filter Review by Category : 
        {
          data.categories.data.map( item => {
            return <Link className="categories" key={item.id} to={`/category/${item.id}`}>
              {item.attributes.categories}</Link>
        })
        }
      </div>
    </div>
  )
}

export default SiteHeader
