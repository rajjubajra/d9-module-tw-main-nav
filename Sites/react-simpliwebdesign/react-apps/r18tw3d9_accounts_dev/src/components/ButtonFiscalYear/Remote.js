import React from 'react';
import useFetch from '../../hooks/useFetch';
import useNormalise from './useNormalise';
import SelectForm from './SelectForm';
import {baseurl} from '../../config/baseurl';

function Local() {


  const {data} = useFetch(`${baseurl.URL}/jsonapi/node/fiscal_year`);
  
  const {data:fiscalyear} = useNormalise(data);

  console.log('FY', fiscalyear);

  return (
    <SelectForm data={fiscalyear} />
  )
}

export default Local