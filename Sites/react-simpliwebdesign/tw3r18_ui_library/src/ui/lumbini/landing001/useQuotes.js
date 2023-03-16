import {useState, useEffect} from 'react';


function useQuotes(quotes) {
 

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    setIsLoading(true);
    const arr = [];

    quotes.quotes.map((item, index)=> {
      return arr.push(item.quote)
    })

    setData(arr);
    setIsLoading(false);

  },[quotes.quotes])


  
  return {data, isLoading}


}

export default useQuotes;