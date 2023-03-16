import {useState,useEffect} from 'react';
import axios from 'axios';


function useFetch(url){

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=>{


    setLoading(true);

  
    axios({
      method: 'GET',
      url: url,
      headers: {'Accept': 'application/vnd.api+json'}
    })
    .then(response => {
      //console.log(response.data)
      response.data.data.length > 0 &&
      setData(response.data)}
      )
    .catch(error => setError(error))
    .finally(()=>setLoading(false))
  },[url])


  return {data, loading, error}

}


export default useFetch;