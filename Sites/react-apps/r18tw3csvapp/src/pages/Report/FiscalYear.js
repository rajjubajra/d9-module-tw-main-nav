import React from 'react';


function FiscalYear({data}) {
  
  /** FISCAL YEAR */
  console.log("FY Data: ",data?.data);
  
  /** FISCAL YEAR ROW ON TITLE */
  return (
    <div className="flex">
    {
      data?.data?.length > 0 && data?.data?.map((item,i) => 
      <div 
        key={i} 
        className="block text-center">
        {item.attributes.name}
      </div>
      )
    }
    </div>
  )
}

export default FiscalYear