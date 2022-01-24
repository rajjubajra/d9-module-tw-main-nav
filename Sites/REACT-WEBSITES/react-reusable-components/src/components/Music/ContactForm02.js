import React from 'react'

function ContactForm02() {
  return (
    <div>
      <form action="">
        <div className="grid grid-cols-2 grid-flow-row">
          <div className="col-span-2 md:col-span-1">
            <input className="border-t border-l border-r 
            md:border-r-0
            border-gray-300 
            p-1 w-full" type="text" placeholder="Name" />
          </div>  
          <div className="col-span-2 md:col-span-1">
            <input className="border-t border-l border-r 
            border-gray-300 
            p-1 w-full" type="text" placeholder="Email" />
          </div>
          <div className="h-20 col-span-2">
            <textarea 
            className="col-span-2 border border-gray-300 p-1 w-full h-20" placeholder="Message"></textarea>
          </div>
          <div className="col-span-2 mt-2">
            <input className="px-4 py-1 h-10 border border-gray-400 text-gray-500" type="submit" value="Submit" />
          </div>  
            
            
        
        </div>
      </form>
    </div>
  )
}

export default ContactForm02
