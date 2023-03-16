import React from 'react';
import useNormalise from './useNormalise';
import SelectForm from './SelectForm';

function Local({data}) {

  console.log("LOCAL FISCAL YEAR ARRAY",data);
  //const {data:fiscalyear} = useNormalise(data);
  //console.log('FY', fiscalyear);

  return (
    <div>
      <SelectForm data={data} />
    </div>
  
  )
}

export default Local