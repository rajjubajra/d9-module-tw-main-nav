import Right from './Right';
import Left from './Left';
import data from '../data.json';


function Aboutus004() {

  return (
    <div className='relative w-full min-h-screen mt-5'>
    {/** LEFT */}
      <div className='w-2/3 my-5 m-auto md:text-4xl text-2xl tracking-wide border-l-2 border-blue-400 pl-10 first-letter:text-sky-500 first-letter:font-bold first-letter:text-6xl order-2'>{data.data[0].title}</div>
      <div className=''><Left /></div> 

    {/** RIGHT */}
      <div className='relative z-50  my-5'>
        <Right data={data} />
      </div>
    </div>
  )
}

export default Aboutus004