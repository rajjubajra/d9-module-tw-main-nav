import React, {useState,useEffect} from 'react';
import {clientData} from '../../redux/clientDetailSlice';
import {bankData} from '../../redux/bankDetailSlice';
import {useSelector, useDispatch} from 'react-redux';
import useFetch from '../../hooks/useFetch';
import useNormalise from './useNormalise';
import {Link} from 'react-router-dom';
import View from './View';
import ButtonFiscalYear from './ButtonFiscalYear';
import GrTotal from './GrTotal';
import {baseurl} from '../../config/baseurl';


function Remote() {


  /** fetch jsonapi all sort by "-field_date_on_bank_statement" DESC order */
  const fetchAll = `${baseurl.URL}/jsonapi/node/invoice?include=field_bank_account,field_client_id_invoice,field_invoice_details&sort=field_old_invoice_date`


  /** Url for data fetching
     * "fetchAll" or "fetchByFiscalyear"
     */
    const [jsonapi, setJsonapi] = useState(fetchAll);
    console.log("WHICH URL : ", jsonapi);

  /** 
     *  Get Fiscal Year start and end date 
     *  by onClick Button from BtnFiscalYear component.
     *  SELECTED FISCAL YEAR:
    */
  const {fiscal_year_start, fiscal_year_end} = useSelector(state => state.set_fiscalyear);
  console.log("Fiscal Year: ", fiscal_year_start, fiscal_year_end)

  /** jsonapi by selected "Fiscal Year" */
  const fetchByFiscalYear = `${fetchAll}&filter[datefilter][condition][path]=field_old_invoice_date&filter[datefilter][condition][operator]=>=&filter[datefilter][condition][value]=${fiscal_year_start}&filter[filterdate][condition][path]=field_old_invoice_date&filter[filterdate][condition][operator]=<=&filter[filterdate][condition][value]=${fiscal_year_end}`;

/** set the Fiscal Year for generating report */
useEffect(()=>{

  fiscal_year_start === "0000-00-00" && fiscal_year_end === "0000-00-00"
  ? setJsonapi(fetchAll)
  : setJsonapi(fetchByFiscalYear)
},[fetchAll, fetchByFiscalYear, fiscal_year_end, fiscal_year_start])

/** fetch data */
const {data, loading:loading_data, error:data_error} = useFetch(jsonapi)
console.log("FETCHED DATA: ", data)



/**  FETCHING */
const dispatch = useDispatch();

useEffect(()=>{
  dispatch(clientData(null));
  dispatch(bankData());
},[dispatch])


const {loading_client, error_client, client} = useSelector(state => state.client_detail);
const {loading_bank, error_bank, bank} = useSelector(state => state.bank_detail);

// console.log(loading_data, error_data, data);
// console.log(loading_client, client_error, client);
// console.log(loading_bank, bank_error, bank);

/** NORMALISE JSONAPI DATA */
const { dataArr } = useNormalise(data, client, bank); 
console.log("Normalised Data", dataArr);




if(  loading_bank 
  && loading_data 
  && loading_client) 
return <div>Loading...</div>
if(data_error || error_client || error_bank) return console.log(data_error, error_client, error_bank);

console.log("DAT TO VIEW" ,dataArr);

return (
        <div>
          <ButtonFiscalYear data={dataArr} />
          <GrTotal data={dataArr} /> 
          <View data={dataArr} />
        </div>
      )
}

export default Remote