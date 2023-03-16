import Card from './Card';




function Reviews002({data, people}) {
  
  
  console.log(data);

  return (
    <div className='my-12'>
    <div className='w-full text-center my-10'> 
    <h2>We have worked with many amazing people</h2>
    </div>
    <div className='w-full min-h-screen flex flex-wrap justify-center items-center'>
      {
        data?.data.map((item, i)=> {
          return <Card 
          feedback={item.feedback} 
          people={people[i]} 
          by={item.by} 
          role={item.role}  
          />
        })
      }
    </div>
    </div>
  )
}

export default Reviews002
