import React from 'react';
import fileData from '../../data/houserent.json';
import View from './View';
import useNormalise from './useNormalise';
import ButtonFiscalYear from '../../components/ButtonFiscalYear';
import {useSelector} from 'react-redux';
import TotalAmount from './TotalAmount';




function Local() {

  /** fisca year only for testing
   *  applicable only in remote site
   */
    const {fiscal_year_start, fiscal_year_end} = useSelector( state => state.set_fiscalyear);


    console.log(fiscal_year_start, fiscal_year_end);


  /** normalising json data */
  const {data, isLoading, error} = useNormalise(fileData);


  if(isLoading) return <div>Loading...</div>;
  if(error) return console.log(error);
  return (
    <div>
      {/** Fiscal Year select button works in remote site only */}
      <ButtonFiscalYear />
      {/** Report view component. 
         * Report by fiscal year works in remote site only */}
      <TotalAmount data={data} />   
      <View data={data} />
    </div>
  )

}

export default Local
