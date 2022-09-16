import {useState,useEffect} from 'react';
import useFetch from './useFetch';
import jsonfiledata from '../data/dataType';



function useGroupList() {

  /** useFetch hook
   *  if hosting is localhost it will fetch local file json data 
   *  if remote it fetch json data from dev.yellow-website.com/yw-d9 site */
  const {data, loading, error} = useFetch("https://dev.yellow-website.com/yw-d9/jsonapi/taxonomy_term/demo_data_type", jsonfiledata);

  //console.log("Types",types);

  const [dataType, setDataType] = useState([]);

  useEffect(()=> {
    const arr = [];
    data?.data?.length > 0 &&
    data?.data?.map((item) => {
        return arr.push({"typeId": item.id,"type":item.attributes.name})
    })
    setDataType(arr);
  },[data.data])

  return {dataType, loading, error}

}

export default useGroupList