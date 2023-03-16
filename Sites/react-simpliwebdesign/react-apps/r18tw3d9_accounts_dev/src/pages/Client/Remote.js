import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clientData} from '../../redux/clientDetailSlice';
import useNormalise from './useNormalise';
import View from './View';

function Remote() {

  const dispatch = useDispatch();
  const [filterValue, setFilterValue] = useState('');
  const [filter, setFilter] = useState(null);


  const handleSubmit = () => setFilter(filterValue);
  const handleClear = () => setFilter(null);

  useEffect(()=>{
    dispatch(clientData(filter));
  },[dispatch, filter])


  const {loading_client, error_client, client} = useSelector(state => state.client_detail);

  const { data } = useNormalise(client);
  console.log(data);
  if(loading_client){ return <div>Loading...</div>}
  if(error_client) { console.log(error_client)}
  return (
    <div>
      <div>Search: 
      <input 
      className="py-1 px-2 border m-2" 
      name="filter" 
      value={filter}
      onChange={(e)=> setFilterValue(e.target.value)}
      />
      {
        filter === null 
        ? <button className="p-2 m-1 border text-xs" onClick={handleSubmit}>Submit</button>
        : <button className="p-2 m-1 border text-xs" onClick={handleClear}>Clear</button>
      }
      </div>
      <View data={data} />
    </div>
  )
}

export default Remote