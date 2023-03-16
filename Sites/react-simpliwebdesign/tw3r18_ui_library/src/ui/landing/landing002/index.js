import data from '../data.json';
import { music_bg01, music_sign1 } from "../../../assets";

/** Components */
import Quote from './Quote';
import CallToActionBtn from './CallToActionBtn';


function Landing002() {
  return (
    <div className='relative w-full min-h-screen flex flex-col justify-center items-center'>
      <img className='w-16 mb-20' src={music_sign1} alt="sign" />
      <img className="absolute w-full h-screen object-cover opacity-10 grayscale z-0" src={music_bg01} alt="music"  />
      
      
      <Quote data={data} />

      <div className="relative z-50 ml-10 md:ml-0 mt-20">
        <CallToActionBtn />
      </div>
      

    </div>
  )
}

export default Landing002
