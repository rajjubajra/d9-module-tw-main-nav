import {useEffect}from 'react';
import {gsap} from 'gsap';
import Logo from '../../components/Logo';
import TitleOnTop from '../../components/TitleOnTop';
import ContactEmail from './ContactEmail';
import ContactPhone from './ContactPhone';

function Contact(){

  useEffect(()=>{
    gsap.from('.fade',{duration:2, opacity: 0, stagger:0.5});
  });

  return(
    <div className="container m-auto my-10">

    {/** PAGE TITLE */}
    <div className="my-12">
        <div className="relative md:flex w-full">
          <div className="fade w-full">
            <div className="lg:w-96">
              <TitleOnTop title="Ask me anything" />
            </div>
          </div>

        </div>
    </div>


    <div className="lg:grid lg:grid-cols-3 md:mr-10">

      {/** CONTACCT FORM */}
    <div className="fade col-span-2 lg:mb-0 mb-12">
       {/** <ContactForm /> **/}
      <div className="w-full flex flex-col md:ml-20">
        <div className='my-10'>
          <Logo />
        </div>

        <div>
          <ContactEmail />
        </div>

        <div className='my-5'>
          <ContactPhone />
        </div>
      
      </div> 
    </div>    
    </div>
    </div>
    
  )
}

export default Contact;