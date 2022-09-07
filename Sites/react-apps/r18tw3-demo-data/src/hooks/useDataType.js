import {useState,useEffect} from 'react';


function useDataType(data) {

  console.log(data);

  const [dataType, setDataType] = useState([]);

  useEffect(()=>{
    const arr = [];
    data?.data?.length > 0 &&
    data?.data?.map((item) => {
        return arr.push(item.attributes.name)
    })
    setDataType(arr);
  },[data.data])

  return {dataType}

}

export default useDataType
