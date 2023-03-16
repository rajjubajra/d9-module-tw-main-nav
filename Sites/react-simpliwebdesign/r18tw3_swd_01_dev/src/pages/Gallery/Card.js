import React from 'react'
import {Link} from 'react-router-dom';

function Card({item}) {

  const btn = "w-full px-4 py-2 block"

  const link = item.url.replace("internal:","");
  
  console.log(item)

  return (
    <div className="md:p-10 py-4 bg-gray-300">
    <div className="md:h-60 w-full flex flex-col justify-center items-center drop-shadow-sm border">
      <div>
        <img className="w-16 grayscale" src={item.icon} alt={item.title} />
      </div>
      <div className="md:p-10 p-5">
          <div className="font-light text-sm" dangerouslySetInnerHTML={{__html: item.text}} />
          <div className="w-48 h bg-gray-600 text-gray-50 font-light text-xs uppercase tracking-widest cursor-pointer text-center">
            {
              item.urlInternal
              ? <Link className={btn} to={link}>
                {item.title}</Link>
              : <div className={btn} onClick={()=> window.open(item.url)}>
                {item.title}</div>
            }
          </div>
      </div> 
    </div>
    </div>
  )
}

export default Card
