import React from 'react';
import Local from './Local';
import Remote from './Remote';
import useFiscalYearList from './useFiscalYearList';

function ButtonFiscalYear({data}) {


  const {fiscalYearArr} = useFiscalYearList(data);
  console.log("FiscalYear Arr", fiscalYearArr);


  return (
    window.location.origin === 'http://localhost:3000'
    ? <Local data={fiscalYearArr}  />
    : <Remote  data={fiscalYearArr} />
  )
}

export default ButtonFiscalYear