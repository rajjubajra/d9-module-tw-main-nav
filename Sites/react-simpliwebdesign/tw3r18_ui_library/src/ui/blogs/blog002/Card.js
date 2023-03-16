import React from 'react'

function Card({date, subject, title, summary, by}) {
  return (
    <div className='w-72 px-6 py-4 m-2 border dark:border-slate-600 shadow-lg'>
      <div className='flex justify-between text-sm tracking-wider my-5'>
        <div className='font-bold text-blue-500'>{date}</div>
        <div className='px-2 text-gray-800 dark:text-slate-50 uppercase border-b border-red-700'>{subject}</div>
      </div>
      
      <h3 className='h-32'>{title}</h3>
      <div className='font-light my-5 h-52 text-sm' dangerouslySetInnerHTML={{__html: summary}} />

      <div className='flex justify-between'>
        <div>
          <span className='text-sm uppercase cursor-pointer font-bold hover:border-t-4 border-blue-500'>Read</span>
        </div>
        <div className='text-sm flex justify-end pr-2'>
          <span className='font-bold text-red-500 mr-2'>-</span>{by}
        </div>
      </div>
      
    </div>
  )
}

export default Card
