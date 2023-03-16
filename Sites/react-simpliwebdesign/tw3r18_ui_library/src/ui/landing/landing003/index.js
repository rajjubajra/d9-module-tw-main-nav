import data from '../data.json';
import { music_bg01, music_sign1 } from "../../../assets";


import Quote from './Quote';
import CallToActionBtn from './CallToActionBtn';

function Landing003() {

//console.log(data.welcome.text);

  return (
    <div className='relative w-full min-h-screen flex flex-col justify-center items-center'>
      <img className="absolute w-full h-screen object-cover opacity-10 grayscale z-0" src={music_bg01} alt="music"  />

      <div className="w-full sm:grid sm:grid-cols-2">
      <img className='w-16 mb-20 md:translate-x-56 translate-x-24 md:translate-y-10 translate-y-12' src={music_sign1} alt="sign" />

      
      <div className='relative z-50'>
        <Quote data={data} />
        <div className="mt-20 ml-12">
          <CallToActionBtn />
        </div>
        
      </div>

      </div>
    

    </div>
  )
}

export default Landing003
