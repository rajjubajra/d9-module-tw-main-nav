import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actionLogin} from '../../redux/loginSlice';

function Form() {

  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  /** Handle login */
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    dispatch(actionLogin({username, password}))
  }


  /**Login Fail message */
  const {status} = useSelector(state => state.login_user);
  console.log(status);
  
  useEffect(()=> {

    
  },[])

  return (
    <div className="flex flex-col">
    <span className="error">{!status && "Username or Password do not match"}</span>
    <form onSubmit={handleSubmit}>
      <input 
          required
          placeholder="username"
          type="text" 
          name="username" 
          value={username}
          onChange={(e)=> setUsername(e.target.value) }
      />
      <input 
          required
          placeholder="password"
          type="password" 
          name="password" 
          value={password}
          onChange={(e)=> setPassword(e.target.value) }
      />
      <button className="btn">Login</button>
    </form>
    </div>
  )
}

export default Form
