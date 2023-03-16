import {AiFillStar} from 'react-icons/ai'

function Reviews005({data}) {
  
  console.log(data);

  return (
    <div className='w-full md:w-7/12 h-screen md:flex flex-col justify-center items-center '>

    {/** STARS */}
      <div className='flex my-10 gap-2  pr-10'>
        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
      </div>

    {/** FEEDBACK */}
      <div className='md:text-3xl text-2xl py-20 md:px-10 font-light tracking-wider sm:border-l-8' dangerouslySetInnerHTML={{__html: data?.data[9].feedback}} />
    
      {/** BY AND ROLE */}
      <div className='w-full text-right'>
        <div>{data.data[9].by}</div>
        <div className='text-slate-400 ml-3 text-xs'>CEO Company Name</div>
      </div>
    

    </div>
  )
}

export default Reviews005
