import {Link} from 'react-router-dom';

function Cta002({data}) {

  console.log(data.cta);

  return (
    <div className='w-full h-screen px-2 md:flex justify-center items-center'>

      <div className='md:w-1/2 md:order-2'>
        <div className='md:text-4xl text-2xl first-letter:font-bold first-letter:text-6xl first-letter:text-blue-500 text-right font-serif'>{data.cta[0].title}</div>
        <div className='font-sans  font-extralight mt-10 sm:border-r-8 border-blue-500 sm:pr-10' dangerouslySetInnerHTML={{__html: data.cta[0].body}}  />
      </div>

      <div className='md:w-1/2 flex justify-center md:mt-0 mt-20 md:order-1'>
        <div>
            <Link 
            className='md:animate-bounce md:h-32 md:w-32 w-20 h-20 text-sm flex justify-center items-center rounded-full bg-blue-500 font-bold text-slate-100'
            to={data.cta[0].path_1}>{data.cta[0].link_1}</Link>
        </div>
      </div>
    </div>
  )
}

export default Cta002
