import {useEffect, useState} from 'react';
import logo from '../../swd-logo-verticle.png';
import { useDispatch, useSelector } from 'react-redux';
import {actionIntroduction} from '../../redux/introductionPageSlice';
import IntroductionContainer from './IntroductionContainer';
//import Spinner from '../../components/Spinner';



function IntroductionRemote() {

  /** FETCH INTRODUCTION DATA */
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(actionIntroduction());
  },[dispatch])

  const { introduction, 
          introduction_loading,
          introduction_fetched
        } = useSelector(state => state.introduction_page);
  console.log(introduction, introduction_loading);

  console.log(introduction_fetched && introduction.data[0].attributes.body.value);

  /** set data to local-state */
  const [data, setData] = useState([]);
  useEffect(()=>{
    introduction_fetched && setData(introduction?.data[0]?.attributes.body.value)
  },[introduction, introduction_fetched])


  /** display Spinner for 2 second */
  // const [loading,setLoading] = useState(true)
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     introduction_fetched && setLoading(false)
  //   },4000)
  // },[introduction_fetched])


  return (
    <IntroductionContainer logo={logo} data={data}  />
  )
}

export default IntroductionRemote