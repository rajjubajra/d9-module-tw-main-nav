import {useEffect, useState} from 'react';

const useNormalise = (fiscalyear) => {

  //console.log("USE NORMALISE FISCAL YEAR",fiscalyear);
  const [data, setData] = useState([]);

  useEffect(()=>{

    const arr = []

    fiscalyear && fiscalyear?.data?.length > 0 &&
    fiscalyear?.data?.map(item => {
        return arr.push({
          "id": item.id,
          "name": item.attributes.title,
          "startvalue": item.attributes.field_fiscal_year.value.substring(0,10),
          "endvalue": item.attributes.field_fiscal_year.end_value.substring(0,10)
        })
    })

    setData(arr);

  },[fiscalyear])

  return {data}


}

export default useNormalise;