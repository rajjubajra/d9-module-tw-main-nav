import React from 'react';
import data from '../../data/invoice.json';
import client from '../../data/client.json';
import bank from '../../data/bank.json';
import useNormalise from './useNormalise'; 
import View from './View';
import ButtonFiscalYear from './ButtonFiscalYear';
import GrTotal from './GrTotal';

function Local() {


  const {dataArr} = useNormalise(data, client, bank); 
  //console.log("Local js", dataArr);

  return (
    <>
    <div>Invoice: Localhost</div>
      <ButtonFiscalYear data={dataArr} />
      <GrTotal data={dataArr} />
      <View data={dataArr} />
    </>
  )
}

export default Local