import React, { useState } from 'react';
import './index.css'
//import Validate from './Validate';

export function validate(input) {
  let error = {};
if (!input.username) {
  error.username = 'Username is required';
} else if (!/\S+@\S+\.\S+/.test(input.username)) {
  error.username = 'Username is invalid';
} 

if(!input.password) {
  error.password = 'Password is required';
} else if (!/(?=.*[0-9])/.test(input.password)) {
  error.password = 'Password is invalid';
}

return error;
}

export default function  Form() {
  const [input, setInput] = useState({
    username: "", 
    password: ""
  });
  
  //const [username, setUsername] = useState('');
  //const [password, setPassword] = useState('');

  const [error, setError] = useState('');


  const handleSubmit = e => {
    e.preventDefault()
    console.log("Hiciste submit")
  }

  const handleInputChange = (e) => {
        setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  
    setError(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
    
  };

  return (
      <div>
        <h1>Contact us</h1>
        <form className='form' onSubmit={handleSubmit}>
          
          <div className='inputDiv'>
          <label htmlFor='"username'>Username:</label>
          <input 
            type="text" 
            name="username"
            value={input.username}
            placeholder='write your email'
            onChange={handleInputChange}
            className={error.username && 'danger'} //por que username es una prop del obj error? Es lo q cree en Validate?
            id="usernameId"
          />
          </div>
          {error.username && (
            <p className="danger">{error.username}</p>
          )}

          <div className='inputDiv'>
          <label htmlFor='"password'>Password:</label>
          <input 
            type="password" 
            name="password"
            value={input.password}
            placeholder='write your password'
            onChange={handleInputChange}
            className={error.password && 'danger'} 
            id="passwordId"
          />
          </div>
          {error.username && (
            <p className="danger">{error.username}</p>
            )}
          
          <div className='subDiv'>
            <input className='submit' type="submit" value="Submit"/>
          </div>
        </form>
      </div>
  )
}
