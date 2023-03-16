import React,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actionSetFiscalYear} from '../../redux/fiscalYearSlice';


function SelectForm({data}) {

  //console.log("Fiscal Year jsonapi: ",data);


  const dispatch = useDispatch();
  const {fiscal_year_start, fiscal_year_end} = useSelector(state => state.set_fiscalyear);
  //console.log("REDUX STATE FY SELECTED: ",fiscal_year_start, fiscal_year_end);

  const [fiscalyear, setFiscalyear] = useState([]);
  //console.log("changed val: ",fiscalyear);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actionSetFiscalYear(fiscalyear))
  }


  
  const noValue = "0000-00-00";
  console.log("no value", typeof(noValue));


  return (
    <div>
      <div className="flex flex-row gap-2 text-sm my-2 uppercase"> 
        <span>Fiscal Year: </span>  
        <span>{
                `${fiscal_year_start === "0000-00-00" 
                  ? "Latest 50 data only" : fiscal_year_start} 
                ${fiscal_year_end === "0000-00-00" 
                  ? "" : " - "}  
                ${fiscal_year_end === "0000-00-00" 
                  ? "" : fiscal_year_end}`
        }</span>
      </div>
      <div className="text-red-500">{
          window.location.origin === "http://localhost:3000" ? "Note: Filter by fiscal year works only on remote-site, because filter is being used on jsonapi fetch-url" : ""
        }</div>
    <form className="flex w-40 gap-2 outline-none" onSubmit={handleSubmit}>
      <select 
      className="py-1 px-2 border"
      value={fiscalyear || []}
      onChange={(e)=> setFiscalyear(e.target.value.split(','))}>
      <option>select...</option>
      <option value={`${noValue},${noValue}`}>All</option>
      {
        data && data.length > 0 &&
        data.map(item => {
          //console.log(item);
          const arr = [item.startvalue, item.endvalue]
          return <option key={item.id} value={arr}>
          {item.name}
          </option>
        })
      }
      </select>

      <button 
        className="py-1 px-2 bg-gray-200 border cursor-pointer" 
        type="submit">Select
      </button> 
      
    </form>
    </div>
    
  )
}

export default SelectForm