import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {baseurl} from '../../config/config';
import {storeResponse} from '../../redux/loginSlice';
import {useDispatch} from 'react-redux';




function Form() {

  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  /** axios login states */
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(()=>{
    dispatch(storeResponse(response));
  },[dispatch, error, response])


  console.log(loading, error, response);

  /** session token */
  const token = () => {
    return  axios({
    method: 'GET',
    url: `${baseurl.URL}/session/token`,
    })
    .then(response => response.data)
    .catch(err => console.log(err));
  }

  const bearer = () => {
    console.log("bearer ???");
    return axios({
      method: 'POST',
      url: `${baseurl.URL}/oauth/token`,
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token(),
      },
      data: {
        grant_type: 'password',
        client_id: 'cd7acf28-dd1d-40f2-b98c-fda0b5f936f0',
        client_secret: 'abc123',
        username: 'usertwo',
        password: 'abc@123'
      }
    })
    .then(response => console.log("oauth token : ", response))
    .catch(err => console(err))
  }

  

  /** Handle login */
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.username.value, e.target.password.value);

      bearer();

      axios({
          method: "POST",
          url: `${baseurl.URL}/user/login?_format=json`,
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': token(),
          },
          data: {
            'name': username,
            'pass': password
            }
          })
          .then(response => {
            setResponse(response)
            setLoading(false)
            console.log("response 1", response);
            console.log("UserId", response.data.current_user.uid);
          })
          .catch(err => {
              setError(err);
              setLoading(false);
              console.log("Login Error",err, err.response.data.message)
          })
          
      }

  

  /**Login Fail message */
  
  return (
    <div className="flex flex-col">
    
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input 
          className="px-1 py-2 m-2  outline-none border border-red-900"
          required
          placeholder="username"
          type="text" 
          name="username" 
          value={username}
          onChange={(e)=> setUsername(e.target.value) }
      />
      <input 
          className="px-1 py-2 m-2 border border-red-900"
          required
          placeholder="password"
          type="password" 
          name="password" 
          value={password}
          onChange={(e)=> setPassword(e.target.value) }
      />
      <button className="px-3 py-3 m-2  outline-none border w-32 bg-gray-200 hover:bg-gray-400">Login</button>
    
    </form>
    </div>
  )
}

export default Form