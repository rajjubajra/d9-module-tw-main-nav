import React from 'react'

function Title({title}) {
  return (
    <div className="">
      <div className="flex items-center h-screen">            
        <h2 className="md:text-9xl text-6xl 
        text-blue-600
        rotate-90 
        -translate-y-32
        md:translate-y-0
        md:-translate-x-8 
        font-bold">
        {title}</h2>
      </div>       
    </div>
  )
}

export default Title