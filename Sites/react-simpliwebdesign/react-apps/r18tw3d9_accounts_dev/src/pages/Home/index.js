import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className="w-full mt-40 flex justify-center align-center">
    <div className="grid grid-cols-2 md:grid-rows-2  grid-flow-row gap-5">
      <Link to="/invoice"  className="p-5 m-2 border w-40 text-center">Invoices</Link>
      <Link to="/expenses"  className="p-5 m-2 border w-40 text-center">Expenses</Link>
      <Link to="/client"  className="p-5 m-2 border w-40 text-center" >Clients</Link>
      <Link to="/rent" className="p-5 m-2 border w-40 text-center">Rent</Link>
    </div>
    </div>
  )
}

export default Home