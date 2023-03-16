import {useEffect, useState} from 'react';
import gsap from 'gsap';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {baseurl} from '../../redux/config';
import ReCAPTCHA from "react-google-recaptcha";




function Form() {
    

  const [post, setPost] = useState(false);
  const [submitResponse, setSubmitResponse] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [counter, setCounter] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    recaptcha: "",
  });


  const handleVerify = (value) => {
    setFormData({
      ...formData,
      recaptcha: value,
    });
  };
  
  const {register, handleSubmit} = useForm();

  const onSubmit = async (d) => {

    window.location.origin === 'http://localhost:3000' 
    ? console.log(d)
    :

    setCounter(counter + 1);

    /** GET SESSION TOKEN  */
    await axios({
      method: 'GET',
      url: `${baseurl.URL}/session/token`,
      headers: {
        'Accept': 'application/vnd.api+json',
      }
    })
    .then(response => {
      submitMsg(response.data)
      console.log("console - 1 restapi ", response)
    })
    .catch(err => console.log("Token Err", err))

    /** POST FORM DATA */
      function submitMsg(token){
        axios({
          method: 'post',
          url: `${baseurl.URL}/webform_rest/submit?_format=json`,
          headers:{
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/json',
            'X-CSRF-Token': token
          },
          data:  {
            "webform_id": "ask_me_form",
            "name": d.name,
            "email": d.email,
            "subject": d.subject,
            "message": d.message,
            "captch": d.captch
          }
        })
        .then((res)=> {
          res.status === 200 && setPost(true)
          setSubmitResponse(res)
        })
        .catch(err => console.log("SUBMIT FAIL ERROR ",err))
      }
  }


  console.log("SUBMIT RESPONSE", submitResponse);


  useEffect(()=>{
    setSuccessMessage("Thank you. Message has been submitted successfully");
  },[])


    /** gsap animation */
  useEffect(()=>{
    gsap.from('.fadeOut', {delay: 0.5, opacity: 0, transform: "translateY(-5rem)", duration: 1})
  },[])                              
  
  
  
  //function onChange(value) {console.log("Captcha value:", value);}

  return (
    <div className="md:w-1/2 px-8 md:px-0 m-auto">
    <div className="h-12 w-full text-red-700 text-xs uppercase">    
      {/* errorMessage*/}
    </div>
    { /** if post is true show message else show Form */
      post ? <div className="text-center">{successMessage}</div> :
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-4 gap-8">
          <div className="lg:col-span-2 col-span-4">
            <input 
            className="w-full py-2 px-1 border-b border-gray-900 placeholder:text-gray-900 placeholder:font-thin outline-none" 
            type="text" 
            placeholder="Name" 
            {...register("name", {required: true})}
            />
          </div>
          <div className="lg:col-span-2 col-span-4">
            <input 
            className="w-full py-2 px-1 border-b border-gray-900 placeholder:text-gray-900 placeholder:font-thin outline-none" 
            type="email" 
            placeholder="Email" 
            {...register("email",{ required: true})}
            />
          </div>
          <div className="col-span-4">
            <input 
            className="py-2 px-1 border-b border-gray-900 w-full placeholder:text-gray-900 placeholder:font-thin outline-none" 
            type="text" 
            placeholder="Website URL (optional)" 
            {...register("subject")}
            />
          </div>
          <div className="col-span-4">
            <textarea 
            className="w-full py-2 px-1 h-40 border-b border-gray-900 placeholder:text-gray-900 placeholder:font-thin outline-none"   placeholder="How can I help you."
            {...register("message", { required: true})}
          ></textarea>
          </div> 

          <div class="flex justify-center ml-20 mr-20">
          <ReCAPTCHA
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        action="contact_form"
        verifyCallback={handleVerify}
          />
          
          </div>
          <div className="w-full col-span-4">
            <div>Cnt : {counter}</div>
            <button 
            className="w-full py-2 text-gray-200 font-light uppercase tracking-widest bg-gray-900">Submit</button>
          </div>
        </div>
      </form>
    }
    </div>
  )
}

export default Form
