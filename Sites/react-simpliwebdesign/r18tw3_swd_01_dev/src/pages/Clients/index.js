import React from 'react';
//import ClientRemote from './clients/ClientRemote';
import ClientLocal from './ClientLocal';



function Clients() {
  
  return (
    window.location.origin === 'http://localhost:3000' 
    ? <ClientLocal />
    : <ClientLocal />
  )
}

export default Clients