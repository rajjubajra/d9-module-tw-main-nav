import React from 'react';
import {useParams} from 'react-router-dom';

/** Pages */
import Local from './Local';
import Remote from './Remote';


function Print() {

  const {id} = useParams();

  console.log(id);


  return (
    window.location.origin === 'http://localhost:3000'
    ? <Local id={id} />
    : <Remote id={id} />
  )
}

export default Print