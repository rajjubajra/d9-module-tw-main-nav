import React,{useState} from 'react';
import DownloadCsv from './DownloadCsv';


/** Component */
import BtnClose from '../../components/BtnClose';

/** DATA */
import plan from '../../data/plan.json';
import fiscalyear from '../../data/fiscalyear';
import types from '../../data/dataType';

/** custom hooks */
import usePlan from '../../hooks/usePlan';
import useFiscalYear from '../../hooks/useFiscalYear';
import useDataType from '../../hooks/useDataType';

/** components */
import PlaningComp from './PlaningComp';





function Plan() {

  const [dataByType, setDataByType] = useState([]);

  const {data, loading, error} = usePlan(plan);
  const {fyData} = useFiscalYear(fiscalyear);
  const {dataType} = useDataType(types);

  console.log(dataType)

  const handleDatatType = (type) => {
    
    const arr = type === null ? data : data.filter(fil => {
      console.log("DATA TYPE: ",fil.data_type, type);
      return fil.data_type === type});
      setDataByType(arr);
    //console.log("Filtered",arr);
  }


  if(loading) return <div>Loading...</div>
  if(error) return console.log(error);
  return (
    <div>
      {/** close button nav to homepage */}
      <BtnClose />

      {/** DATA TYPE ONCLICK HANDLER */}
      <div>Data Type</div>
      <div className="flex gap-2 text-sm">
        <div className="m-2 border-b-2 cursor-pointer" onClick={()=>handleDatatType(null)}>All</div>
        {dataType.length > 0 && dataType.map(item => 
        <div className="m-2 border-b-2 cursor-pointer" onClick={()=> handleDatatType(item)}>{item}</div>)}
      </div>

      {/** TITLE */}
      <div>Five Year Plan</div>
      <DownloadCsv data={dataByType} />


      {/** FISCAL YEAR */}
      <div className="grid grid-flow-col">
      {
        fyData.map(item => <div className="block-width text-center">{item}</div>)
      }
      </div>

      {/** DATA GROUP BY FISCAL YEAR */}
      <div className="flex">
        <div className="block-width">
        <PlaningComp data={dataByType} year="2021-2022" />
        </div>
        <div className="block-width">
        <PlaningComp data={dataByType} year="2022-2023" />
        </div>
        <div className="block-width">
        <PlaningComp data={dataByType} year="2023-2024" />
        </div>
        <div className="block-width">
        <PlaningComp data={dataByType} year="2024-2025" />
        </div>
        <div className="block-width">
        <PlaningComp data={dataByType} year="2025-2026" />
        </div>
      </div>
    </div>
  )
}

export default Plan