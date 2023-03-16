import {useEffect, useState} from 'react';
import BigNavContainer from './BigNavContainer';
import { useDispatch} from 'react-redux';
import {actionSetPage} from '../../redux/pagenameSlice';


const data = [
  {
    "id": 1,
    "name": "Gallery",
    "url": "/theme-gallery/37"
  },
  {
    "id": 1,
    "name": "Work with me",
    "url": "/about"
  },
  {
    "id": 1,
    "name": "Contact",
    "url": "/contact-me"
  },
]


function BigNavLocal() {

  const dispatch = useDispatch();

  const [mainNav, setMainNav] = useState([]);

  useEffect(()=>{
    setMainNav(data)
  },[])

  console.log(mainNav);
    
  

  return (
    <BigNavContainer 
    mainNav={mainNav} 
    dispatch={dispatch} 
    actionSetPage={actionSetPage} 
    />
  )
}

export default BigNavLocal