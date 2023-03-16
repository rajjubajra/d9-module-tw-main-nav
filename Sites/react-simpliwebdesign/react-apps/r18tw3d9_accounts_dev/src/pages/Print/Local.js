import React,{useEffect} from 'react';
import invoice from '../../data/invoice.json';
import client from '../../data/client.json';
import bank from '../../data/bank.json';



function Local({id}) {

  console.log("UUID ? - ",id);

  console.log("INVOICE",invoice);
  console.log("Client",client);
  console.log("Bank",bank);
  console.log("ID", id);



  useEffect(()=>{

  },[])




  return (
    <div className="w-100 h-screen flex justify-center items-center">
    <div>Print is available only on Remote site</div>
    </div>
  )
}

export default Local