import React from 'react'
import Card from './Card';

function Blog002({data}) {
  
  console.log(data.blogs);

  return (
    <div className='flex flex-wrap my-20'>
      {
        data?.blogs.map((item, i)=> {
          return (
                <Card 
                  date={item.date}
                  subject={item.subject}
                  title={item.title}
                  summary={item.summary}
                  by={item.by}
                />
          )
        })
      }
    </div>
  )
}

export default Blog002