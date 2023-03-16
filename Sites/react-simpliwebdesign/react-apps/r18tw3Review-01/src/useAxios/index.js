import {useEffect, useState} from 'react';
import axios from 'axios';
import {baseurl} from '../config/config';



const useAxios = (url) => {

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const csrfToken =() => (
    axios({
      method: 'GET',
      url: `${baseurl.URL}/session/token`,
      })
      .then(response => response.data)
      .catch(err => console.log("csrf token error: ",err))
  )
  
  useEffect(()=>{
    axios({
      method: 'GET',
      url: `${baseurl.URL}${url}`,
      header: {
      'Accept': 'application/json',
      'X-CSRF-Token': csrfToken()},
    })
    .then(res => {
      setData(res.data)
      setLoading(false)
    })
    .catch(err => {
      setError(err)
      setLoading(false)
    })
  },[url])

  return {data, error, loading}

}

export default useAxios;