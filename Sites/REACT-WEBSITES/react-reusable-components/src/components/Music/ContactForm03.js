import React from 'react'

function ContactForm03() {
  return (
    <div>
      <form action="">
        <div className="grid grid-cols-2 grid-flow-row gap-4">
          <div className="h-10 col-span-2 md:col-span-1">
            <input className="border border-gray-300 p-1 w-full" type="text" placeholder="Name" />
          </div>  
          <div className="h-10 col-span-2 md:col-span-1">
            <input className="border border-gray-300 p-1 w-full" type="text" placeholder="Email" />
          </div>
          <div className="h-20 col-span-2">
            <textarea 
            className="col-span-2 border border-gray-300 p-1 w-full h-20" placeholder="Message"></textarea>
          </div>
          <div className="h-10 col-span-2">
            <input className="px-4 py-1" type="submit" value="Submit" />
          </div>  
            
            
        
        </div>
      </form>
    </div>
  )
}

export default ContactForm03
