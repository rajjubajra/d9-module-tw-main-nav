import {people01} from '../../../assets';
import {AiFillStar} from 'react-icons/ai'

function Reviews001({data}) {
  
  console.log(data);

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <div className='flex my-10 gap-2'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
      <div className='md:w-1/2 text-center text-2xl font-light tracking-wider' dangerouslySetInnerHTML={{__html: data?.data[0].feedback}} />

      <div className='my-10'>
        <img className='w-16' src={people01} alt="person" />
      </div>

      <div>{data.data[0].by} | <span className='text-slate-400'>CEO Company Name</span></div>
      

    </div>
  )
}

export default Reviews001
