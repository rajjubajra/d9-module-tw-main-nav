import React from 'react'

function GroupList({data,handleGroup}) {
  console.log("Group list",data.data);

  return (
    <div>
    <div className="ml-2">Data Type</div>
      <div className="flex text-sm uppercase font-extralight">
        <div 
        className="m-2 border-b-2 cursor-pointer" onClick={()=>handleGroup(null)}>
        All</div>

        {data?.data?.length > 0 && data?.data?.map((item, i) => 
        <div 
        key={i}
        className="m-2 border-b-2 cursor-pointer" 
        onClick={()=> handleGroup(item.id)}>
        {item.attributes.name}</div>)}
      </div>
      </div>
  )
}

export default GroupList