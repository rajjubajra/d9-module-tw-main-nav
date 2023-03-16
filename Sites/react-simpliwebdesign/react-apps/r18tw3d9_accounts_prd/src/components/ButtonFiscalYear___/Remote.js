import React from 'react';
import useNormalise from './useNormalise';
import SelectForm from './SelectForm';

function Remote({data}) {

  // const {data:fiscalyear} = useNormalise(data);
  // console.log('FY', fiscalyear);

  return (
    <SelectForm data={data} />
  )
}

export default Remote