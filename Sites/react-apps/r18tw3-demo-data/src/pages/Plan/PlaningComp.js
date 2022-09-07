import {useEffect, useState} from 'react';

function PlaningComp({data, year}) {

  //console.log(data, year);
  const [yearData, setYearData] = useState([]);

  useEffect(() => {
    const result = data.length > 0 && data.filter((dt)=> dt.fiscal_year === year);
    console.log(result);
    setYearData(result);
  },[data, year])

  

  return (
    <>
    {
        yearData.length > 0 ?
        yearData?.map((item) => {
        return  <div  className="block" key={item.id}>
                  <div>{item.data_type}</div> 
                  <div className="font-bold" dangerouslySetInnerHTML={{__html: item.objective}} />
                  <div>{Math.round(item?.data_rag)}%</div>
                  <div>{item?.mildstone_date}</div>
                  <div>{item?.mildstone_update}</div> 
                  <div>{item?.fiscal_year}</div>
            </div>        
      })
      : <div className="text-xs text-center">DATA NOT FOUND</div>
    }
    </>
  )
}

export default PlaningComp