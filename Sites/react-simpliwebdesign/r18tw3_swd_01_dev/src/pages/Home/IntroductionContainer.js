import {useEffect, useState} from 'react';
import {gsap} from 'gsap';



const slogans = [
  {
    "id": 1,
    "slogan": 'Elegant websites, easy to manage'
  },
  {
    "id": 2,
    "slogan": 'The simplest way to a stunning website'
  },
  {
    "id": 3,
    "slogan": 'Clean design, effortless management'
  },
  {
    "id": 4,
    "slogan": 'Elegant websites, easy to use'
  },
  {
    "id": 5,
    "slogan": 'Beautiful design, smooth management'
  },
  {
    "id": 6,
    "slogan": 'Design and manage with ease'
  },

  

]



function IntroductionContainer({logo, data}) {

  const [num, setNum] = useState(0);

  useEffect(()=> {
    let randomNumber = Math.floor(Math.random() * 5);
    setNum(randomNumber);
  },[])


   /** GSAP ANIMATION */
    useEffect(()=>{
    gsap.from('.logo',{duration:0.5, opacity: '0', delay: 0.2})
    gsap.from('.intro',{duration:0.5, opacity: '0', delay: 0.3, stagger: 1})
    gsap.to('.slogan', {duration:1.0, opacity:1, stagger: 0.6})
  },[])

console.log(slogans[0].slogan);

  return (
    <div className="flex justify-center">
      <div className="intro absolute md:bottom-10 bottom-10 left-5 md:w-96 w-56 ">
          <div className="slogan font-windSong lg:mb-0 mb-32 ml-40 text-yellow-400/60 text-[5vw] opacity-0 md:flex hidden">{slogans[num].slogan}</div> 
          <img className="logo w-52" src={logo}   alt="simpliwebdesign.com" />
          <div className="intro text-xs md:text-sm font-thin tracking-widest my-4 pl-1">
            <div dangerouslySetInnerHTML={{__html: data }} />
          </div>
      </div>  
    </div>
  )
}

export default IntroductionContainer
