import React from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {FiPhoneCall} from 'react-icons/fi';
import ContactForm02 from './ContactForm02';


function Contact02() {
  return (
    <div className="w-full max-w-screen-xl m-auto p-10">
      {/** TITLE */}
      <div>
        <h2 className="text-2xl py-6">Please send your enquiry</h2>
      </div>

      {/** FORM */}
      <div className="pb-16">
        <ContactForm02 />
      </div>

           {/** ROW THREE */}
      <div>
        <div className="grid
        grid-flow-row gap-10
        md:grid-cols-2 md:grid-row-1 font-extralight border-t border-gray-300 pt-10">
          <div>
            <h1 className="text-3xl tracking-wider ">YW MUSIC TWO</h1>
          </div>
          <div>
            <div className="w-full tracking-wider md:flex md:flex-col  text-base md:items-end">
              
                <div className="flex w-full">
                  <div className="mt-1 px-2"><AiOutlineMail /></div>
                  <div>email@example.com</div> 
                </div>   
                <div className="flex w-full">
                  <div className="mt-1 px-2"><FiPhoneCall /></div>
                  <div>(UUU) 5555-5555</div>
                </div>   
            </div>
          </div>          
        </div>
      </div>

      
    </div>
  )
}

export default Contact02
