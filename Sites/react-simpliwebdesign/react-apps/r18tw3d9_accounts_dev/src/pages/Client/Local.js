import React from 'react';
import clients from '../../data/client.json';
import useNormalise from './useNormalise';
import View from './View';

function Local() {
  
  const { data } = useNormalise(clients);

  //console.log("NORMALISED DATA: ",data);

  return (
    <View data={data} />
  )
}

export default Local