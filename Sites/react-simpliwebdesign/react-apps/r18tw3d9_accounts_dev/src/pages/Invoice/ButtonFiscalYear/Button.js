import React from 'react';
import {useDispatch} from 'react-redux';
import {actionSetFiscalYear} from '../../redux/fiscalYearSlice';


function Button(data) {

  const dispatch = useDispatch();

  console.log(data);

  return (
    <div className="flex">
        <div>
          <div 
          onClick={()=> dispatch(actionSetFiscalYear(null))}
          className="w-32 py-1 bg-gray-200 text-center m-1 cursor-pointer ">
            All
          </div>
        </div>

    {
      data.data.length > 0 &&
      data.data.map(item => {
        return <div key={item.id}>
          <div 
          onClick={()=> dispatch(actionSetFiscalYear(item))}
          className="w-32 py-1 bg-gray-200 text-center m-1 cursor-pointer ">
          {item.name}
          </div>
        </div>
      })
    }
    </div>
  )
}

export default Button
