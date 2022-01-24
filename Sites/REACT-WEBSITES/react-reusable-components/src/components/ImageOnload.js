import React, {useState, useEffect} from 'react'

function ImageOnload({src, alt, cssClass, width, height}) {

  const [status, setStatus] = useState(false);
  const [blur, setBlur] = useState('hidden');
  console.log(status);

  useEffect(()=>{
    status && setBlur('');
  },[status])

  

  return (
    <img 
    className={cssClass}
    onLoad={()=>setStatus(true)}
    onError={()=>setStatus(false)}
    src={src} 
    alt={alt} 
    /> 
  )
}

export default ImageOnload
