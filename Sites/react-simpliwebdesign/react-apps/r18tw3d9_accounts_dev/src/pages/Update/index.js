import React from 'react';
import {useParams} from 'react-router-dom';
import Local from './Local';
import Remote from './Remote';

function Update() {

  const {id} = useParams();

  console.log(id);

  return (
    window.location.origin === 'http://localhost:3000'
      ? <Local />
      : <Remote id={id} />
  )
}

export default Update
