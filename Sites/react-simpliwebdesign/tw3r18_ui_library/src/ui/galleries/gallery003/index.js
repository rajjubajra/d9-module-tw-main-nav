import React from 'react'

function Gallery003({data}) {

  console.log(data);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 p-4 gap-1">
      {data?.map((item, i)=>{
        return (<div key={i} className="grid grid-cols-2 h-96 bg-slate-100">

          {/** TEXT */}
            <div className="gird grid-cols-6">
              <div>
                <div className="py-20 px-4 text-right text-2xl font-thin uppercase">{item.title}</div>
              </div>
              <div className='px-4 text-right text-sm'>{item.desc}</div>
              <div className='px-2 text-right text-sm font-thin mt-20'>
              <span className='w-20 py-1 px-4 hover:border-b border-black cursor-pointer'>Read</span>
              </div>
            </div>

          {/** IMAGE */}

            <div className='flex justify-center items-center'>
            <img className='w-56 h-72 object-cover border-4 border-white shadow-md'  src={item.image} alt={item.title} />
            </div>
          
          </div>)
      })}
    </div>
  )
}

export default Gallery003
