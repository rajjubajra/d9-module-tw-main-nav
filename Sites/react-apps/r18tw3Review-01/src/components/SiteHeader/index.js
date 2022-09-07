import React from 'react';
import {Link} from 'react-router-dom';



function SiteHeader() {

  /** Query Result */
  const {loading, error, data} = '';
  console.log(loading, error, data);


  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>;
  return (
    <div>
      <Link to="/">
        <h1 className="text-3xl">Reviews</h1>
      </Link>
      <div>
        Filter Review by Category : 
        {/* { data.categories.data.map( item => {
            return <Link className="categories" key={item.id} to={`/category/${item.id}`}>
              {item.attributes.categories}
              </Link>
        })
        } */}
      </div>
    </div>
  )
}

export default SiteHeader
