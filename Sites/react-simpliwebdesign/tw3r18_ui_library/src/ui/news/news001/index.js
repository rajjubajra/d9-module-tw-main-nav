import {Link} from 'react-router-dom';
import SubscriptionFrom from './SubscriptionFrom';


function News001(data) {
  
  console.log(data.data);
  

  return (
    <div className="relative w-full flex justify-center">
      <div className='lg:w-8/12'>
      {/** FIRST ROW */}
        <div className='mb-32 mt-20'>
        <h2>{data?.data?.mar2023[0].title}</h2>
        <div className='first-letter:text-5xl first-letter:float-left first-letter:mr-2'
        dangerouslySetInnerHTML={{__html: data?.data?.mar2023[0].news.substring(0,400)}} />
        <Link  to="details" className='text-xs uppercase cursor-pointer'>Read more...</Link>
        </div>

        {/** READ MORE CIRCLE */}
        <div className='w-full flex justify-center'>
        <div className='absolute -translate-y-20 flex justify-center items-center rounded-full bg-red-400 w-40 h-40'>More news</div>
        </div>


      {/** SECOND ROW */}
        <div className="w-full grid md:grid-cols-2 gap-4">
          <div className='h-96 p-6 flex justify-center items-center border'>
            <div className='font-light text-2xl trakcing-wider font-serif' 
            dangerouslySetInnerHTML={{__html: data?.data?.old[0].title }} />
          </div>
          <div className='h-96 p-6 flex justify-center items-center border'>
            <div className='font-bold font-sans text-2xl tracking-wider text-center' dangerouslySetInnerHTML={{__html: data?.data?.old[1].title }} />
          </div>
        </div>

        {/** THIRD ROW */}
        <div className='my-4'>
          <div className='w-full border'>
            <div className='text-2xl font-mono text-center py-20 md:px-10 px-5 tracking-wider'
            dangerouslySetInnerHTML={{__html: data?.data?.old[2].title }} />
          </div>
        </div>

        {/** FOURTH ROW */}
        <div className='w-full grid md:grid-cols-6 gap-4'>
          <div className='border md:col-span-4'>
            <div className='text-2xl text-center py-20 md:px-10 px-5 tracking-wider'
            dangerouslySetInnerHTML={{__html: data?.data?.old[3].title }} />
          </div>
          <div className='border md:col-span-2'>
            <div className='text-2xl font-thin text-center py-20 md:px-10 px-5 tracking-wider'
            dangerouslySetInnerHTML={{__html: data?.data?.old[4].title }} />
          </div>
        </div>


        <div className='my-4 border flex justify-center items-center h-40 bg-slate-300'>
        
        <div>
          <div className='py-3 font-light'>Want product news and updates ? Sign up for our newsletters</div>
          <SubscriptionFrom />
        </div>
        
        </div>
        
      </div>
    
      
    </div>
  )
}

export default News001
