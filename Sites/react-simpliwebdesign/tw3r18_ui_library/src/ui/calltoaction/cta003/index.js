import {Link} from 'react-router-dom';
import {VscArrowCircleRight} from 'react-icons/vsc';

function Cta003({data}) {

  console.log(data.cta);

  return (
    <div className='w-full h-screen  px-2 md:flex flex-col justify-center items-center'>

{/** LEFT BLOCK */}
      <div className='md:w-1/2'>
        <div className='md:text-4xl text-2xl first-letter:font-bold first-letter:text-6xl first-letter:text-blue-500 text-right font-serif'>{data.cta[0].title}</div>
        <div className='font-sans  font-extralight mt-10 sm:border-r-8 border-blue-500 sm:pr-10' dangerouslySetInnerHTML={{__html: data.cta[0].body}}  />
      </div>


{/** RIGHT BLOCK */}
      <div className='md:w-1/2 flex justify-center mt-20 md:mt-0'>
        <div>
            <Link 
            className='md:h-32 md:w-32 h-20 w-20 flex justify-center items-center rounded-full bg-blue-500 font-bold text-slate-100 text-sm'
            to={data.cta[0].path_1}>{data.cta[0].link_1}</Link>
        </div>
        <div className='md:ml-20 md:h-32 ml-10 w-46 flex justify-center items-center'>
          <Link className='px-4 py-1 border-b font-light flex'
          to="#">Learn more <span className='mt-1 ml-2'><VscArrowCircleRight /></span></Link>
        </div>
      </div>
    </div>
  )
}

export default Cta003
