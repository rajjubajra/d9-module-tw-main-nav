import React from 'react'

function TitleOnTop({title}) {
  return (
    <h2 className="md:text-5xl text-3xl lg:text-right tracking-widest font-light my-10 md:mx-20">
    {title}</h2>
  )
}

export default TitleOnTop