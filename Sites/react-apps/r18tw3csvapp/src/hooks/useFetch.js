import {useState,useEffect} from 'react';
import axios from 'axios';


/**
 * 
 * @param {*} url : fetch data from dev.yellow-website.com/yw-d9
 * @param {*} datalocal : json file data from ../data/dataType.json
 * @returns if localhost returns datalocal else returns url data
 */
const useFetch = (url, datalocal) => {

  /** fetched data state and loading state */
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);

  //console.log("Fetch Laoding : ", data, loading);

    useEffect(()=>{

        setloading(true); 
        /** use data from local file 
         * or fetch from remote site */
        window.location.origin === 'http://localhost:3000' 
        ? setData(datalocal)
        : axios({
          method: 'GET',
          url: url,
          headers: {'Accept': 'application/vnd.api+json'}
        })
        .then(response => setData(response.data))
        .catch(error => setError(error))

    },[url, datalocal])

    useEffect(() => {
      data?.data && setloading(false)
    },[data?.data])


  //console.log("DATA RAW",data);
  //console.log("DATA RAW 2",data.data);
  return {data, loading, error}   

}

export default useFetch;