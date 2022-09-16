import {useEffect, useState} from 'react';
import {ExternalLink} from 'react-external-link';

function ReportView({data, year}) {

  //console.log(data, year);
  const [yearData, setYearData] = useState([]);

  useEffect(() => {
    const result = data.length > 0 && data.filter((dt)=> dt.fiscal_year === year);
    console.log(result);
    setYearData(result);
  },[data, year])

  let colourarr = []
  colourarr[54] = "bg-red-300"
  colourarr[55] = "bg-green-300"
  colourarr[56] = "bg-blue-300"
  colourarr[57] = "bg-gray-300"
  colourarr[58] = "bg-red-100"
  colourarr[59] = "bg-blue-100"
  colourarr[60] = "bg-green-100"
  
  return (
    <>
    {
        yearData.length > 0 ?
        yearData?.map((item, index) => {
        return  <div className="block" key={item.id}>
                  <div className={`w-auto h-9 p-2 ${colourarr[item.data_type_id]}`}>{item.data_type}</div> 
                  <div>{item?.title} | index Id : {index}</div>
                  <div className="uppercase mt-2 font-bold">Objective:</div>
                  <div className="font-light" dangerouslySetInnerHTML={{__html: item.objective}} />
                  <div>RAG : {Math.round(item?.data_rag)}%</div>
                  <div dangerouslySetInnerHTML={{__html: item?.mildstone_date}} />
                  <div className="uppercase mt-2 font-bold">Plan:</div>
                  <div dangerouslySetInnerHTML={{__html: item?.mildstone_update}} />
                  <div className="text-xs font-extralight my-2">
                    Fiscal year: {item?.fiscal_year}
                  </div>
                  <div className="flex gap-2">
                    <ExternalLink href={`https://dev.yellow-website.com/yw-d9/node/${item.nid}/edit`} >
                      <span className="py-1 px-2 bg-gray-300 text-xs uppercase border">update</span>
                    </ExternalLink>
                    <ExternalLink href={`https://dev.yellow-website.com/yw-d9/node/${item.nid}/delete`} >
                      <span className="py-1 px-2 bg-gray-300 text-xs uppercase border">Delete</span>
                    </ExternalLink>
                  </div>
            </div>        
      })
      : <div className="w-56 p-2 m-1 border border-gray-200 text-sm text-center">
          DATA NOT FOUND</div>
    }
    </>
  )
}

export default ReportView