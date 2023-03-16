import {useEffect, useState} from 'react';
import logo from '../../swd-logo-verticle.png';
import IntroductionContainer from './IntroductionContainer';
import Spinner from '../../components/Spinner';


const local_data =  [
  {
    "id": 1,
    "text" : "<p>Hi! I enjoy creating websites. I can create an inclusive online presence for your business. So that you can spend more time on your main job rather than communicating with the clients. My website reflects all your expertise, identity, and value.</p>"
  }
]


function IntroductionLocal() {

  /** set data to local-state */
  const [data, setData] = useState('');
  useEffect(()=>{  
      setData(local_data[0].text)
  },[])


  /** display Spinner for 3 second */
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },1000)
  },[])


  return (
    loading 
    ? <Spinner />
    : <IntroductionContainer logo={logo} data={data} />
  )
}

export default IntroductionLocal