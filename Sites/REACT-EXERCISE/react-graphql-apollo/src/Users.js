import React,{useEffect, useState} from 'react';
import {useQuery, gql} from '@apollo/client';


const URSER_DATA = gql`
    query{
      getAllUsers{
        firstName
        lastName
        email
        id
      }
    }
`


function Users() {

  const {loading, error, data} = useQuery(URSER_DATA);
  const [status, setStatus] = useState('');
  const [userdata, setUserdata] = useState([]);

  
  useEffect(()=>{
      if(loading){
        setStatus('Loaindg...')
      }if (error) {
        setStatus(' Error could not load data');
      } else {
        setStatus(true) 
        setUserdata(data.getAllUsers);       
      }
      
  },[error, loading, data])
  
  //console.log(userdata.getAllUsers);

  return (
    <div>
      {
        status && userdata.length > 0 &&
        userdata.map(item=>{
          return <div key={item.id}>
            <p>id: {item.id}</p>
            <p>Name: {item.firstName} {item.lastName}</p>
            <p>Email: {item.email}</p>
          </div>
        })
      }
    </div>
  )
}

export default Users