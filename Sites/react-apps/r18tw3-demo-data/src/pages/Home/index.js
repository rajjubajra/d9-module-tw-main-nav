import React from 'react';
import data from '../../data/nav.json';
import {Link} from 'react-router-dom';



function Home() {

  console.log(data);

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="grid md:grid-cols-3 md:text-sm grid-cols-2 text-xs gap-5">
      {
        data?.map((item)=> {
          return <div key={item.id}>
            <Link to={item.path}
            className="md:w-36 md:h-36 w-24 h-24 text-center flex justify-center items-center border border-gray-100 hover:bg-gray-200 p-3">
            {item.title}
            </Link>
          </div>
        })
      }
      </div>
    </div>
  )
}

export default Home