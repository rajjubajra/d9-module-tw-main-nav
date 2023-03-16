import {AiFillStar} from 'react-icons/ai'


function Card({feedback, people, by, role}) {
  return (
    <div className='w-96 md:h-[27rem] p-2 m-2 shadow-lg dark:border-slate-600 dark:border'>

    {/** STARS */}
      <div className='flex justify-center my-10 gap-2'>
        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
      </div>


    {/** FEEDBACK */}
      <div className='text-center md:h-36 px-4 text-xl font-light tracking-wider' dangerouslySetInnerHTML={{__html: feedback}} />

    {/** PHOTO */}
      <div className='my-10 flex justify-center'>
        <img className='w-16 h-16 rounded-full bg-gray-200' src={people} alt="person" />
      </div>
      
    {/** NAME AND ROLE */}
    <div className='flex justify-center'>
      <span>{by}</span>
      <span className='text-slate-400 text-xs mt-1 ml-2'>{role}</span>
    </div>
      
      
    
    </div>
  )
}

export default Card
