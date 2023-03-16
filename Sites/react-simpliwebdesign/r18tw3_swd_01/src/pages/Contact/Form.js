import React,{useState, useEffect} from "react";
//import useRecaptch from "./useRecaptch";
import {useForm} from 'react-hook-form';
import { submitPostData } from "./submitPostData";


const Form = () => {



/** Google reCaptcha custom-hook */
//const {recaptchaToken} = useRecaptch('6Lft-6IUAAAAAKmJFdrBcgQjOTknjiFqOTSu3JuS')


  /** react-hook-form objects */
  const { register, handleSubmit, formState: {errors} } = useForm();
  
  const onSubmit = (data) => submitPostData(data);


  return(
    <div className="md:w-1/2 px-8 md:px-0 m-auto">
    <div className="h-12 w-full text-red-700 text-xs uppercase">    
      {/* errorMessage*/}
    </div>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-4 gap-8">

          {/** NAME */}
          <div className="lg:col-span-2 col-span-4">
          <input 
          {...register("name", { required: "This is required"})} 
          className="w-full py-2 px-1 border-b border-gray-900 placeholder:text-gray-900 placeholder:font-thin outline-none" 
          placeholder="Name"
          />
          <p class="text-sm text-red-500">{errors.name?.message}</p>
          </div>

           {/** EMAIL */}
          <div className="lg:col-span-2 col-span-4">
          <input 
            {...register("email", 
            { required: "This is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 
                message: 'Not an valid email'}
            })}
            className="w-full py-2 px-1 border-b border-gray-900 placeholder:text-gray-900 placeholder:font-thin outline-none" 
            placeholder="Email"
          />
          <p  class="text-sm text-red-500">{errors.email?.message}</p>
          </div>

           {/** WEBSITE URL (OPTIONAL) */}
          <div  className="col-span-4">
            <input 
            {...register("url")} placeholder="Website Url (optional)"
            className="py-2 px-1 border-b border-gray-900 w-full placeholder:text-gray-900 placeholder:font-thin outline-none"
            />
          </div>


           {/** MESSAGE */}
          <div  className="col-span-4">
            <textarea 
            {...register("message", 
                { required: "This is required",
                  minLength: {value: 10, message: 'Min length is 10'}})} 
            placeholder="Message" 
            className="w-full py-2 px-1 h-40 border-b border-gray-900 placeholder:text-gray-900 placeholder:font-thin outline-none" 
            />
          <p  class="text-sm text-red-500">{errors.message?.message}</p>
          </div>

          {/* <div>
            <div className="g-recaptcha" data-sitekey="6Lft-6IUAAAAAKmJFdrBcgQjOTknjiFqOTSu3JuS"></div>
            {recaptchaToken ? (
              <p>reCAPTCHA token: {recaptchaToken}</p>
            ) : (
              <p>Loading reCAPTCHA...</p>
            )}
          </div> */}
          
          <div className="w-full col-span-4">
              <input
              className="w-full py-2 text-gray-200 font-light uppercase tracking-widest bg-gray-900" 
              type="submit" 
              value="under construction"
              />
          </div>  
          
        </form>
      </div>
  );
    
};

export default Form;
