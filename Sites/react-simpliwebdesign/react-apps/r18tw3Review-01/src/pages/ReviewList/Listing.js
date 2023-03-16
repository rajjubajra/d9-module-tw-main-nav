import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function Listing({data}) {

  const [normalizedData, setnormalizedData] = useState([])
  console.log(normalizedData)


  useEffect(()=>{

    /** included Data */
    const includeData = (included,data) => {
      console.log("INCLUDED",included, data);
      return included.map(inc => 
        data.some((e)=> e.id === inc.id)
        && { "id": inc.id, "title": inc.attributes.title, "body": inc.attributes.body.value}
      )
    }
  
    /** Drupal JSONAPI normalisation */
    const arrangedata = () => {
      let arr = [];
      console.log("object" , arr)
  
      data && data?.data.map(item=>{
        const {title, field_product_review, field_product_review_rating} = item.attributes
        return arr.push({
          "id": item.id,
          "title": title,
          "rating": field_product_review_rating,
          "body": field_product_review.value,
          "categories": includeData(data.included, item.relationships.field_product_review_category.data)
        })
      })
      setnormalizedData(arr);
    }
  
    /** RUN FUNCTION to set normalizedData */
    arrangedata();
    
    },[data])


  return (
    <div>
    {
      normalizedData && normalizedData.map((item,i) => 
      <div key={i} className="mb-10 border p-10">
        <h2 className="text-2xl">{item.title}</h2>
        <div>
          {item.categories.map((ct, index) => <small key={index} className="border mr-2 p-1"> {ct.title} </small> )}
        </div>
        <div className="p-4 border w-20 text-center mt-10 text-3xl bg-gray-500 text-white">{item.rating}</div>
        <div  className="py-5" 
              dangerouslySetInnerHTML={{__html: item.body.substring(0, 200)+'...'}} />
        <Link className="px-4 py-3 bg-gray-600 text-white font-light text-sm" to={`/details/${item.id}`}>Read more</Link>
      </div>
      )
    }  
    
    </div>
  )
}

export default Listing
