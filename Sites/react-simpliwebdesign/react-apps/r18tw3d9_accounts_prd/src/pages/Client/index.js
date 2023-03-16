import React from 'react';
import Local from './Local';
import Remote from './Remote';

function Client() {
  return (
    <div className="mt-0">      

      {window.location.origin === 'http://localhost:3000'
      ? <Local />
      : <Remote />}
    </div>
  )
}

export default Client