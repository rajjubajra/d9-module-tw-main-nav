import {useState,useEffect} from 'react';
import useFetch from './useFetch';
import jsonfiledata from '../data/fiscalyear.json';


function useFiscalYear() {

  /** useFetch hook
   *  if hosting is localhost it will fetch local file json data 
   *  if remote it fetch json data from dev.yellow-website.com/yw-d9 site */
  const {data:fYears, loading:fyLoading, error:fyError} = useFetch("https://dev.yellow-website.com/yw-d9/jsonapi/taxonomy_term/demo_data_financial_year", jsonfiledata);

  //console.log("Types",fYears, "typeloading :", fyLoading);

  const [fyData, setFyData] = useState([]);

  useEffect(()=>{
    const arr = [];
    fYears?.data?.length > 0 &&
    fYears?.data?.map((item) => {
        return arr.push(item.attributes.name)
    })
    setFyData(arr);
  },[fYears.data])

  return {fyData, fyLoading, fyError}

}

export default useFiscalYear