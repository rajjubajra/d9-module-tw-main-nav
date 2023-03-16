import React,{useState, useEffect} from 'react';

/** custom hooks */
import usePlan from './usePlan';
import useFiscalYear from '../../hooks/useFiscalYear';
import useDataType from '../../hooks/useDataType';
/** components */
import BtnClose from '../../components/BtnClose';
import ReportView from './ReportView';
import Loading from '../../components/Loading';
import DownloadCsv from '../../components/DownloadCsv';


function Plan() {

  /** Data array by data Type  
   *  if Data type is not clicked 
   *  list all data  */
  const [dataByType, setDataByType] = useState([]);
  const [typeId, setTypeId] = useState(null);

  /** custom hook: Planned data */
  const {data, loading, error} = usePlan(typeId);
  /** custom hook: Taxanomy : Fiscal Year */
  const {fyData, fyLoading, fyError} = useFiscalYear();
  /** custom hook: Taxonomy : Data Type */
  const {dataType, typeLoading, typeError} = useDataType();


  console.log(dataType)
  /** on page landing  view all data  */
  useEffect(()=>{
    setDataByType(data);
  },[data]);
  

  /** HANDLE DATA TYPE */
  const handleDatatType = (typeId, type) => {
    const arr = type === null ? data : data.filter(fil => {
      return fil.data_type === type});
      setDataByType(arr);
      setTypeId(typeId)
    //console.log("Filtered",arr);
  }


  if(loading || fyLoading || typeLoading) return <Loading />;
  if(error || fyError || typeError) return console.log(error);
  return (
    <div>
      {/** close button nav to homepage */}
      <BtnClose />

      {/** DATA TYPE ONCLICK HANDLER */}
      <div className="ml-2">Data Type</div>
      <div className="flex text-sm uppercase font-extralight">
        <div 
        className="m-2 border-b-2 cursor-pointer" onClick={()=>handleDatatType(null)}>
        All</div>
        {dataType.length > 0 && dataType.map(item => 
        <div 
        className="m-2 border-b-2 cursor-pointer" 
        onClick={()=> handleDatatType(item.typeId, item.type)}>
        {item}</div>)}
      </div>

      {/** TITLE */}
      <div className="mt-3 ml-1">Five Year Plan</div>
      <DownloadCsv data={dataByType} />


      {/** FISCAL YEAR */}
      <div className="flex">
      {
        fyData.map(item => <div className="block text-center">{item}</div>)
      }
      </div>

      {/** DATA GROUP BY FISCAL YEAR */}
      <div className="flex">
        <div>
        <ReportView data={dataByType}  year="2021-2022" />
        </div>
        <div>
        <ReportView data={dataByType}  year="2022-2023" />
        </div>
        <div>
        <ReportView data={dataByType}  year="2023-2024" />
        </div>
        <div>
        <ReportView data={dataByType}  year="2024-2025" />
        </div>
        <div>
        <ReportView data={dataByType}  year="2025-2026" />
        </div>
      </div>
    </div>
  )
}

export default Plan