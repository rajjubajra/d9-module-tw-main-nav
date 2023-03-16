import React from 'react'
import {Link} from 'react-router-dom';

function Card({item}) {

  const btn = "w-full px-4 py-2 block"
  

  console.log(item.url)
  return (
    <div className="md:p-10 py-4 border border-1">
    <div className="md:h-60 w-full flex justify-center items-center drop-shadow-sm border">
      <div className="md:p-10 px-2">
          <div className="font-light text-sm" dangerouslySetInnerHTML={{__html: item.text}} />
          
          <div className="w-48 font-light text-xs uppercase tracking-widest cursor-pointer text-center">
            {
              item.urlType === 'internal'
              ? <Link className={btn} to={item.url}>
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
