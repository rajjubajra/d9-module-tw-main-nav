import {useEffect} from 'react';
import gsap from 'gsap';
import ReCAPTCHA from "react-google-recaptcha";
import SubmitConfirmMessage from './SubmitConfirmMessage';

function ContactFormContainer({submit, submitResponse, handleSubmit, 
                              setName,setEmail,setSubject, setMessage, setCaptcha, errorMessage}) {
    


  
  /** gsap animation */
  useEffect(()=>{
    gsap.from('.fadeOut', {delay: 0.5, opacity: 0, transform: "translateY(-5rem)", duration: 1})
  },[submit])                              
  
  console.log(submit);
  console.log(submitResponse);
  
  //function onChange(value) {console.log("Captcha value:", value);}

  return (
    <div className="md:w-1/2 px-8 md:px-0 m-auto">
    <div className="h-12 w-full text-red-700 text-xs uppercase">    
      {errorMessage}
    </div>
    {
      submit
      ? <div className="fadeOut p-10 mt-20 font-light">
        <SubmitConfirmMessage response={submitResponse} />
        <p className="text-xs font-thin mt-5"> - Yellow-Website</p>
        </div>
      : <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-4 gap-8">
          <div className="lg:col-span-2 col-span-4">
            <input 
            required
            className="w-full py-2 px-1 border-b border-gray-900 placeholder:text-gray-900 placeholder:font-thin outline-none" 
            type="text" 
            placeholder="Name" 
            onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="lg:col-span-2 col-span-4">
            <input 
            required
            className="w-full py-2 px-1 border-b border-gray-900 placeholder:text-gray-900 placeholder:font-thin outline-none" 
            type="email" 
            placeholder="Email" 
            onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="col-span-4">
            <input 
            className="py-2 px-1 border-b border-gray-900 w-full placeholder:text-gray-900 placeholder:font-thin outline-none" 
            type="text" 
            placeholder="Website URL (optional)" 
            onChange={(e)=>setSubject(e.target.value)} />
          </div>
          <div className="col-span-4">
            <textarea 
            required
            className="w-full py-2 px-1 h-40 border-b border-gray-900 placeholder:text-gray-900 placeholder:font-thin outline-none"   placeholder="How can I help you."
            onChange={(e)=>setMessage(e.target.value)}
            ></textarea>
          </div> 

              <ReCAPTCHA
                sitekey="6LewezMeAAAAAJV2mVUFvf25LEO5SpFqBt9T61AA"
                onChange={(value)=>setCaptcha(value)}
              />
              
          <div className="w-full col-span-4">
            <button className="w-full py-2 text-gray-200 font-light uppercase tracking-widest bg-gray-900">Submit</button>
          </div>
        </div>
      </form>
    }
    </div>
  )
}

export default ContactFormContainer
