import React from 'react';
import rawdata from '../../data/plan.json';
import useNormalisation from '../../hooks/userNormalisation';
import Component from './Component';



function Local() {

  const {data} = useNormalisation(rawdata);

  console.log("Normalized data: ",data);

  return (
    <Component data={data} year="2021-2022" />
  )
}

export default Local