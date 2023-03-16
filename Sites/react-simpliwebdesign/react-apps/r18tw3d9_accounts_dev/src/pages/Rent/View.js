import React from 'react';
import Downloadcsv from '../../components/Downloadcsv';

function View({data}) {

  console.log(data);
  return (
    <div className="text-sm">
    <Downloadcsv data={data} />
    {
      data && data.length > 0 &&
      data.map((item, i) => {
        return <div key={item.id} className="m-1 p-1 flex border ">
          <div className="w-10">{parseInt(i) + 1}</div>
          <div className="w-32">{item?.deposited_on}</div>
          <div className="w-48">{item?.rent_period}</div>
          <div className="w-40">{item?.title}</div>
          <div className="w-32">{item?.source}</div>
          <div className="w-20">{item?.amount}</div>
          <div className="w-20">{item?.total_expenses}</div>
          <div className="w-20">{item?.amount - item.total_expenses}</div>
        </div>
      })
    }
    </div>
  )
}

export default View