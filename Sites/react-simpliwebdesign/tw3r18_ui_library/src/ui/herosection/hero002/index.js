import Left from './Left';
import Right from './Right';
import Back from '../../../components/Back';


function Hero002() {




  return (
    <>
    <div className="w-full sm:h-screen grid sm:grid-cols-2">  
      <div className="order-last sm:order-first"><Left /></div>
      <div className="flex">
        <Right />
        <div className='mt-20 m-4 sm:block hidden'>
          <ul>
            <li className="bullets">1</li>
            <li className="bullets">2</li>
            <li className="bullets">3</li>
            <li className="bullets">4</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero002
