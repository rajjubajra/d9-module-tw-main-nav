import { BsWhatsapp } from 'react-icons/bs';
import { IconContext } from "react-icons";


function ContactPhone() {
  return ( 
    
    <div className='flex'>   
    <IconContext.Provider 
    value={{ color: "rgb(59 130 246)", size:"1.5em" }}>
      <BsWhatsapp />
    </IconContext.Provider>
    <div className="fade md:mx-2 text-blue-500 font-bold">+44(0)7828 991 384</div>
    </div>
    
  )
}

export default ContactPhone
