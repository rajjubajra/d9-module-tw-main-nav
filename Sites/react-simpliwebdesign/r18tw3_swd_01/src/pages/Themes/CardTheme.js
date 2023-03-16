import {useEffect} from 'react';
import gsap from 'gsap';

function CardTheme({image, title, link}) {

  const handleClick = () => {
      window.open(link);
  };
  useEffect(() => {
    gsap.to(".fade",{opacity: 1, duration: 2})
  },[])

  return (
    <div className="w-full border p-3 fade">
        <p className="text-xm font-thin">{title}</p>
        <img src={image} alt="image02" className="w-full py-2" />
        <p className="cursor-pointer" onClick={() => handleClick()}>View</p> 
      </div>
  )
}

export default CardTheme
