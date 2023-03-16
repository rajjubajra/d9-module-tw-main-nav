import {useState, useEffect} from 'react';


function SubmitConfirmMessage(response) {

  
  const [data, setData] = useState('');
  const [message, setMessage] = useState('');

  useEffect(()=>{
    setData(response);
  },[response])

  //console.log(window.location.origin);
  console.log("confirm message response?",response);
  console.log("confirm message data?",data);


  useEffect(()=>{

    window.location.origin === 'http://localhost:3000' ? setMessage('Submitted by Localhost') :
    data?.response?.status === 200 &&
    setMessage(data?.response?.data?.included[0].attributes.settings.confirmation_message);
    
  },[data])

  
  console.log(message);
  
  
  return (
    <div className="tracking-widest">
      {message}
    </div>
  )
}

export default SubmitConfirmMessage