import {useEffect} from 'react';
import logo from '../yw-logo-horizontal.png';
import {gsap} from 'gsap';
//import { useDispatch } from 'react-redux';
//import {actionFetchIntroduction} from '../redux/fetchDataSlice';

const data =  [
  {
     "id": 1,
     "text" : "<p>Hi! I create websites. I am based in London.</p><p>Chose a theme I will customize as per your need and help you to deploy the website.</p>"
  }
]


function Introduction() {

  //const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch(actionFetchIntroduction("http://localhost:8888/REACT-PROFILE/d9-profile/web/jsonapi/node/introduction"));
  // },[dispatch])

  useEffect(()=>{
    gsap.from('.logo',{duration:0.5, transform: 'translate(0px, 300px)'})
    gsap.from('.intro',{duration:0.5, opacity: '0', delay: 0.3, stagger: 1})
  },[])

  return (
    <div className="flex justify-center">
            <div className="absolute bottom-20 left-5 w-96"> 
              <img className="logo w-52" src={logo} alt="yellow-webiste.com" />
              <div className="intro font-thin tracking-widest my-4 pl-1">
                <div dangerouslySetInnerHTML={{__html: data[0].text}} />
              </div>
            </div>  
    </div>
  )
}

export default Introduction
