import React from 'react';
import useTotal from './useTotal';


function TotalAmount({data}) {

  const {total, totaling} = useTotal(data);


  if(totaling) 
  return  <div className="my-2 mx-1 text-sm w-full text-right">
            <div>Calculating total....</div>
          </div>
  return (
    <div className="my-2 mx-1 text-sm uppercase w-full text-right">
      <div>Total Amount: {total}</div>
    </div>
  )
}

export default TotalAmount
