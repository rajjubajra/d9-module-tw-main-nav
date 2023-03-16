import React from 'react'
import {viewArray} from './viewArray';




function View({data}) {




  return (
    <div className="font-light text-sm">
      <div className="uppercase">Client List: </div>
      {
        data && data?.map(item=> {
          return <div className="p-3 my-2 flex border">
            <div className="w-1/2 border-r-2 mx-2">
              <div className="uppercase text-sm font-bold">Address</div>
              <div>{item.client_name}</div>
              <div>{item.addLine1}</div>
              <div>{item.addLine2}</div>
              <div>{item.city}</div>
              <div>{item.country}</div>
              <div>{item.postcode}</div>
              <div className="flex mt-2">Email: {viewArray(item.client_email)}</div>
              <div className="flex">Tel: {viewArray(item.client_tel)}</div>
            </div>
            <div className="pl-2">
              <div className="text-sm uppercase mb-2 font-bold">Contat Person:</div> 
              <div dangerouslySetInnerHTML={{__html: item.contact_person}} />
            </div>
          </div>
        })
      }
    </div>
  )
}

export default View
