import {useState, useEffect} from 'react';
import {baseurl} from '../config/config';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { loginSlice } from '../redux/loginSlice';


export const useLogout = (logoutToken) => {

  // const dispatch = useDispatch();

  // const [logoutToken, setLogoutToken] = useState(null);
  // const {status} = useSelector(state => state.login_user);
  // const {response} = useSelector(state => state.login_user);


    // useEffect(()=>{
    //     status && setLogoutToken(response.data.logout_token)
    // },[status, response]);

    axios({
      method: 'POST',
      url: `${baseurl.URL}/user/logout?_format=json?token=${logoutToken}`
    })
    .then(response =>  console.log(response))
    .catch(err => console(err))

}


