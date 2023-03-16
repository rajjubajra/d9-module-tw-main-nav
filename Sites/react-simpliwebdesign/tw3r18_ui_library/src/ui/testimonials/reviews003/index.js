import {people08} from '../../../assets';
import {AiFillStar} from 'react-icons/ai'

function Reviews003({data}) {
  
  console.log(data);

  return (
    <div className='w-full h-screen md:flex justify-center items-center '>

  {/** BLOCK ONE */}
    <div className='order-2 md:w-1/2 md:border-l-8 dark:border-slate-500 md:pl-6'>
    {/** STARS */}
      <div className='flex my-10 gap-2 justify-end pr-10'>
        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
      </div>

    {/** FEEDBACK */}
      <div className='text-2xl md:h-72 md:px-10 font-light tracking-wider' dangerouslySetInnerHTML={{__html: data?.data[0].feedback}} />
    </div>  

{/** BLOCK TWO */}
    <div className='order-1 md:w-1/2 flex flex-col justify-center items-center'>

        {/** PHOTO */}
          <div className='my-10'>
            <img className='md:w-26 md:h-26 w-24 h-24 bg-gray-200 rounded-full' src={people08} alt="person" />
          </div>

        {/** BY AND ROLE */}
          <div>{data.data[0].by} | 
          <span className='text-slate-400 ml-3 text-sm'>CEO Company Name</span>
          </div>

    </div>  

    </div>
  )
}

export default Reviews003
