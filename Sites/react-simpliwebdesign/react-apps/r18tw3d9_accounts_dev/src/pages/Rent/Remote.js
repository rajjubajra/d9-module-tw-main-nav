import React,{useState, useEffect} from 'react';
import View from './View';
import {useSelector} from 'react-redux';
import useNormalise from './useNormalise';
import useFetch from '../../hooks/useFetch';
import ButtonFiscalYear from '../../components/ButtonFiscalYear';
import TotalAmount  from './TotalAmount';
import {baseurl} from '../../config/baseurl';


function Remote() {

  /** fetch jsonapi all sort by "-field_date_on_bank_statement" DESC order */
  const fetchAll = `${baseurl.URL}/jsonapi/node/house_rent?include=field_house,field_house_rent_expenses&sort=-field_date_on_bank_statement`


  /** Url for data fetching
   * "fetchAll" or "fetchByFiscalyear"
   */
  const [jsonapi, setJsonapi] = useState(fetchAll);
  //console.log("WHICH URL PASSED: ",jsonapi);

  /** 
   *  Get Fiscal Year start and end date 
   *  by onClick Button from BtnFiscalYear component.
   *  SELECTED FISCAL YEAR:
  */
  const {fiscal_year_start, fiscal_year_end} = useSelector(state => state.set_fiscalyear);
  //console.log("FISCAL YEAR SELECTED: ",fiscal_year_start, fiscal_year_end);

  /** jsonapi by selected "Fiscal Year" */
  const fetchByFiscalYear = `${fetchAll}&filter[datefilter][condition][path]=field_date_on_bank_statement&filter[datefilter][condition][operator]=>=&filter[datefilter][condition][value]=${fiscal_year_start}&filter[filterdate][condition][path]=field_date_on_bank_statement&filter[filterdate][condition][operator]=<=&filter[filterdate][condition][value]=${fiscal_year_end}`;

  /** set the Fiscal Year for generating report */
  useEffect(()=>{
    
    fiscal_year_start === "0000-00-00" && fiscal_year_end === "0000-00-00"
    ? setJsonapi(fetchAll)
    : setJsonapi(fetchByFiscalYear)
  },[fetchAll, fetchByFiscalYear, fiscal_year_end, fiscal_year_start])


  /** Fetch Data
   *  all data or sorted by fiscal year
  */
  const {data:remoteData, loading, error} = useFetch(jsonapi);
  
  /** Normalise raw json data */
  const {data} = useNormalise(remoteData);
  //console.log("Normalized : ", data);


  if(loading) return <div>Loading...</div>;
  if(error) return console.log(error);
  return (
    <div>
      <h1>Fiscal Year</h1>
      {/** Fiscal Year onClick button */}
      <ButtonFiscalYear />
      {/** Total Amount of the selected data */}
      <TotalAmount data={data} />
      {/** View Report Component */}
      <View data={data} />
    </div>
  )

}

export default Remote