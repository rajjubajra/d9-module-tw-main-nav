import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {actionUserLogin} from '../../redux/loginSlice';




function Form() {

  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  /** Handle login */
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.username.value, e.target.password.value);
    dispatch(actionUserLogin(username, password));
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