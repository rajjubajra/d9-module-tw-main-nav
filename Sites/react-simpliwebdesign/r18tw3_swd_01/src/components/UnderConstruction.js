import { Link } from "react-router-dom";
//import { useEffect } from "react";
//import gsap from "gsap";


function UnderConstruction() {

//const navigate = useNavigate();

  // useEffect(()=> {

  //   gsap.from(".fade",{opacity: 0, duration:4})
  //   gsap.to(".effect", {letterSpacing: 5, duration: 1})
  
  //   setTimeout(()=> {
  //     return navigate(-1);
  //   },6000)

    
  // },[navigate])

  
  return (
    <div className="
    fixed top-0 font-light tracking-widest
    w-full h-screen z-50 
    flex justify-center  
    bg-visitors-waiting bg-no-repeat bg-center bg-cover filter grayscale-100">
    <div className="text-center relative mt-40 fade">
      <div className="px-5 py-3 font-bold mb-5 animate md:text-3xl text-2xl effect">Coming soon</div>
      <div><Link className="text-gray-500" to="/">Back</Link></div>
    </div>
    </div>
  )
}

export default UnderConstruction