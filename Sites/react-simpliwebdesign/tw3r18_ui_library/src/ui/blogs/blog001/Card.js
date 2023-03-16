import React from 'react'

function Card({date, subject, title, summary, by, image}) {
  return (
    <div className='relative md:min-h-[55em] px-6 py-4 m-2 border dark:border-slate-600 shadow-lg'>
      <div className='flex justify-between text-sm tracking-wider my-5'>

      {/** DATE */}
      <div className='font-bold text-blue-500'>{date}</div>


      {/** SUBJECT */}
        <div className='px-2 text-gray-800 dark:text-slate-50 uppercase border-b border-red-700'>{subject}</div>
      </div>

      {/** IMAGE */}
      <div>
        <img className='md:block md:w-full md:max-h-[38em] md:float-none   float-left w-56 max-h-36 object-cover pr-4 pb-4' src={image}  alt={subject} />
      </div>
      

      {/** TITLE */}
      <h3>{title}</h3>
      <div className='font-light mt-1 mb-2' dangerouslySetInnerHTML={{__html: summary}} />
      {/** BLOG BY */}
      <div className='text-sm flex justify-end pr-4 mb-10'>
          <span className='font-bold text-red-500 mr-2'>-</span>{by}
      </div>

    
      <div className='absolute bottom-0 mb-3 w-11/12'>      
      {/** READ NAVIGATION */}
        <div>
          <span className='text-sm uppercase cursor-pointer font-bold hover:border-t-4 border-blue-500'>Read</span>
        </div>
      </div>

      
    </div>
  )
}

export default Card
