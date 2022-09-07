import {useState,useEffect} from 'react';


function useFiscalYear(data) {

  console.log(data);

  const [fyData, setFyData] = useState([]);

  useEffect(()=>{
    const arr = [];
    data?.data?.length > 0 &&
    data?.data?.map((item) => {
        return arr.push(item.attributes.name)
    })
    setFyData(arr);
  },[data.data])

  return {fyData}

}

export default useFiscalYear
