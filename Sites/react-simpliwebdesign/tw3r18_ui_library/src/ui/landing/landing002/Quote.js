import React from 'react'

function Quote({data}) {
  return (
    <div className='relative z-50 md:w-5/6 md:border-r-8 border-sky-700 md:px-56 px-4 lg:text-5xl text-xl font-light tracking-widerbor border-r md:first-letter:text-6xl  first-letter:text-3xl first-letter:text-sky-700 first-letter:font-bold'>
      {data.welcome.text}
    </div>
  )
}

export default Quote
