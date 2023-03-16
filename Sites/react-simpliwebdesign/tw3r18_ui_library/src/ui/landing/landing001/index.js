import {useState, useEffect} from 'react';


function Landing001({data}) {

  /** set Array Index number to show slide */
  const [slide, setSlide] = useState(0)

  /** SET INTERVAL for image transition */
  useEffect(()=>{
    const interval = setInterval(()=>{
      if(slide < data.length - 1){
          setSlide(slide + 1)
      }else{
          setSlide(0)
      }
    },5000)
      return () => clearInterval(interval)
  },[data.length, slide])


  console.log(data && data.length);  
  /** .show and .hide css animation 
   * @keyframe is defined in index.css file */
  return (
    <>
    {
      data?.map((item, index) =>{
        return(<div key={index}>
        
          {/** Slide Images */}
          <img 
          className={index === slide 
          ? "relative show z-0 object-cover w-full h-screen" 
          : "hide"} src={item.image} alt="test" />


          {/** Text */}    
          <div className={index === slide 
          ? `relative drop-animation -translate-y-72 z-50 text-center md:text-5xl text-3xl ${item.text_colour} md:px-56 px-4`
          : "hide"}>{item.text} | <span class="text-sm"> by: {item.by}</span>
          </div>
        </div>)
      })
    }
    </>
  )
}

export default Landing001
