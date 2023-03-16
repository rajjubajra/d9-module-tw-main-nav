import {useState, useEffect} from 'react';
import nav from '../data/nav.json';



export function useNav() {

  const [data, setData] = useState([]);

  useEffect(() => {
    /** data normalization */
    setData(nav);
  },[])


  return data;

}

