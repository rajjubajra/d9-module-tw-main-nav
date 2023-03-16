import {useState, useEffect} from 'react';


const useFiscalYearList = (data) => {

  //console.log("BUTTON DATA: ", data);

  const [fiscalYearArr, setFiscalYearArr] = useState([]);


  useEffect(()=>{

    const arr = []
    data && data.length > 0 &&
    data.map(item=> {
        let year = item.date.substring(0,4);
        let start = `${year}-04-06`;
        let end  = `${parseInt(year) + 1}-04-05`;
        return arr.push({
          "id": item.id,
          "name": `${start} - ${end}`,
          "startvalue": start,
          "endvalue": end
        })
    })

    /** FILTER DUPLICATE ARRAY */
    let uniq = {}
    const arrFiltered = arr.filter(obj => !uniq[obj.endvalue] && (uniq[obj.endvalue] = true));

    //console.log("Array Fiscal year : ", arr );
    //console.log("Array Filtered : ", arrFiltered);
    setFiscalYearArr(arrFiltered);
    

  },[data])
  
  //console.log("Filtered state value: ", fiscalYearArr)

  return { fiscalYearArr }

}

export default useFiscalYearList;