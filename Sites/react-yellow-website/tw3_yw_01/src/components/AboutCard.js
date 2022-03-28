import React from 'react'

function AboutCard({title, text}) {
  return (
    <div className="my-3">
        <h3 className="about uppercase pb-2 tracking-widest font-light">{title}</h3>
        <div className="text opacity-0 font-thin">{text}</div>
    </div>
  )
}

export default AboutCard
