import React from 'react';
import data from '../../data/fiscalyear.json';
import useNormalise from './useNormalise';
import SelectForm from './SelectForm';

function Local() {

  const {data:fiscalyear} = useNormalise(data);

  console.log('FY', fiscalyear);

  return (
    <div>
      <SelectForm data={fiscalyear} />
    </div>
  
  )
}

export default Local