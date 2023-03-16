import React from 'react'
import Card from './Card';

function Blog003({data, images}) {
  
  console.log(data.blogs);

  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 my-20 px-2'>
      {
        data?.blogs.map((item, i)=> {
          return (
                <div key={i}>
                <Card 
                  date={item.date}
                  image={images[i]}
                  subject={item.subject}
                  title={item.title}
                  summary={item.summary}
                  by={item.by}
                />
                </div>
          )
        })
      }
    </div>
  )
}

export default Blog003