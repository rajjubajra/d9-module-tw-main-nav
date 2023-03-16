import axios from 'axios';
import {useEffect, useState} from 'react';
import {baseurl} from '../config';


function useFetchAll() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const fetchData = async () => {
        try{
          setIsLoading(true);
          const response = await axios({
              method: 'GET',
              url: baseurl.URL + '/jsonapi/node/article',
              headers: {
                'Accept': 'application/vnd.api+json',
                'Content-Type': 'application/vnd.api+json',
              }
          })
          console.log(response);
          setData(response.data);
          setIsLoading(false)
        }catch(error){
          console.log(error)
        }
  }


  useEffect(()=> { fetchData() },[])


  return {data, isLoading}


}

export default useFetchAll