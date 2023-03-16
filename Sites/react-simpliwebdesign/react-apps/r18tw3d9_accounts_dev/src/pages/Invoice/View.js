import React from 'react';
import {Link} from 'react-router-dom';
import Downloadcsv from '../../components/Downloadcsv';



function View({data}) {

  const totalAmount = (arr) => {
    //console.log(arr);
    let total = arr.reduce((acc, cur) => {return acc + cur.amount},0)
    //console.log(total)
    return total;
  }


  const url = `/dev.yellow-website.com/yw-d9/node`

  return (
    <div>
    <div>Invoice:</div>
    <div><Downloadcsv data={data} /></div>
        <div className="flex gap-4 text-sm">
            <div className="w-24">Date</div>
            <div className="w-20">Invoice No</div>
            <div className="w-52">Client</div>
            <div className="w-20">Amount</div>
            <div>- -</div>
            <div>- -</div>
        </div>
    {
      data &&
        data.map((item)=> {
          return <div key={item.id} className="flex gap-4 text-sm font-light">
            <div className="w-24">{item.date}</div>
            <div className="w-20">{item.invoice_no}</div>
            <div className="w-52">{item.client_details[0].client_title}</div>
            <div className="w-20">{totalAmount(item.invoice_details)}</div>
            <Link className="w-10" to={`/print/${item.id}`}>Print</Link>
            <a className="w-10" 
                href={`/${url}/${item.nodeId}/edit`} 
                target="_blank" 
                rel="noreferrer">Update</a>
          </div>
        })
      }
      
    </div>
  )
}

export default View
