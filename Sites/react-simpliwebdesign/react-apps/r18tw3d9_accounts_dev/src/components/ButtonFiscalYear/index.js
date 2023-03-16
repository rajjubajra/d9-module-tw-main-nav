import React from 'react';
import Local from './Local';
import Remote from './Remote';

function ButtonFiscalYear() {


  return (
    window.location.origin === 'http://localhost:3000'
    ? <Local />
    : <Remote />
  )
}

export default ButtonFiscalYear