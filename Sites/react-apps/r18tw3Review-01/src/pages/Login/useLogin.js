
import {useState} from 'react';
import axios from 'axios';
import {baseurl} from '../../config/config';


const useLogin = (username, password) => {
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  
  const token = () => {
    return  axios({
    method: 'GET',
    url: `${baseurl.URL}/session/token`,
    })
    .then(response => response.data)
    .catch(err => console.log(err));
  }

  //token();

  axios({
        method: "POST",
        url: `${baseurl.URL}/user/login?_format=json`,
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': token()
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

  
    return {loading, error, response}
  

}//userlogin


export default useLogin;