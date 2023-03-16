import React from 'react'
import Card from './Card';

function Blog001({data, images}) {
  
  console.log(data.blogs);

  return (
    <div className='md:grid md:grid-cols-12 flex flex-col w-full min-h-screen my-20'>
      {
        data?.blogs.map((item, i)=> {
          return (
                <div key={i} className={`md:grid col-span-${item.colspan}`}>
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

export default Blog001