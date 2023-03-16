import React from 'react';
import useTotal from './useGrTotal';


function GrTotal({data}) {

  const {total, totaling} = useTotal(data);

  //console.log("For Gr Total",data);

  if(totaling) 
  return  <div className="my-2 mx-1 text-sm w-full text-right">
            <div>Calculating total....</div>
          </div>
  return (
    <div className="my-2 mx-1 text-sm uppercase w-full text-right">
      <div>Gr Total Amount: {total}</div>
    </div>
  )
}

export default GrTotal
