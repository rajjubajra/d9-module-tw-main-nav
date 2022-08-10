import React,{useEffect, useState} from 'react';


function Review({data}) {

  console.log(data);

  const {title, field_product_review, field_product_review_rating} = data.data.attributes;
  
  return (
    <div>
      <div className="mb-10 border p-10">
        <h2 className="text-2xl">{title}</h2>
        { 
        <div>
          {data.included.map((inc, index) => 
          <small key={index} className="border mr-2 p-1"> {inc.attributes.title} </small> 
          )}
        </div> 
        }
        <div className="p-4 border w-20 text-center mt-10 text-3xl bg-gray-500 text-white">{field_product_review_rating}
        </div>
        <div  className="py-5" 
              dangerouslySetInnerHTML={{__html: field_product_review.value}} />
      </div>  
    </div>
  )

}

export default Review