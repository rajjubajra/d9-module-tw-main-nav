import React from 'react'

function ContactForm() {


  

  return (
    <div className="w-full p-10">
      <form action="">
        <div>
          <h3 className="text-2xl my-10">Contact Form</h3>
        </div>
        <div className="flex flex-col">
            <label>Name</label>
            <input className="border border-gray-300 outline-none px-3 py-2 mb-3" type="text" placeholder="Name" />
        </div>
        <div className="flex flex-col">
            <label>Email</label>
            <input className="border border-gray-300 outline-none px-3 py-2 mb-3" ype="text" placeholder="Name" />
        </div>

        <div className="flex flex-col">
            <label>Message</label>
            <textarea className="border border-gray-300 outline-none px-3 py-2 mb-3" name="message" rows="6" placeholder="Message"></textarea>
        </div>
        
        <div className="mt-4">
            <input type="submit" value="Submit" 
            className="border border-gray-300 px-3 py-2 hover:bg-gray-500 hover:text-white" />
        </div>

      </form>
      
    </div>
  )
}

export default ContactForm;