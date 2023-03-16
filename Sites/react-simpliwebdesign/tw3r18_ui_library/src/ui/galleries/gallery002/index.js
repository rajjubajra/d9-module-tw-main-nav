import React from 'react'

function Gallery002({data}) {

  console.log(data);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 p-4 gap-1">
      {data?.map((item, i)=>{
        return (<div key={i} className="grid grid-cols-2 h-96 border dark:border-slate-900">

          {/** TEXT */}
            <div className="order-2 gird grid-cols-6">
              <div>
                <div className="py-20 px-2 text-center text-2xl font-thin uppercase">
                  <span className="py-2 px-4 bg-slate-300 border-r-4 border-sky-600">{item.title}</span>
                </div>
              </div>
              <div className='px-6 text-right text-sm'>{item.desc}</div>
              <div className='flex justify-center text-center text-sm font-light uppercase px-6 pt-20'>
                <div 
                className='px-4 py-1 w-20 bg-sky-600 text-white cursor-pointer border-l-4
                hover:border-sky-900'>
                Read</div>
              </div>
            </div>

          {/** IMAGE */}

            <div className='order-1 flex justify-center items-center'>
            <img className='w-56 h-72 object-cover border-4 border-white shadow-md'  src={item.image} alt={item.title} />
            </div>

            
          
          </div>)
      })}
    </div>
  )
}

export default Gallery002
