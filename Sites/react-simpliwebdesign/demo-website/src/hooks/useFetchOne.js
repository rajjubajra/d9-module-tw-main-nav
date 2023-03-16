import axios from 'axios';
import {useEffect, useState} from 'react';
import {baseurl} from '../config';


function useGetArticles(uuid) {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(uuid);

  useEffect(()=> { 

    const fetchData = async () => {
      try{
        uuid &&
        setIsLoading(true);
        const response = await axios({
            method: 'GET',
            url: baseurl.URL + '/jsonapi/node/article/' + uuid,
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
    
    
    fetchData() 

  },[uuid])


  return {data, isLoading}


}

export default useGetArticles