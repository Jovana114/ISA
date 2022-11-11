import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

import './Login.css';

async function loginUser(credentials: any) {
    return fetch(process.env.REACT_APP_API_URL + '/auth/signin', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

interface Props{
    setToken: Function
}

export default function Login({setToken}: Props ) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    
    setToken(token);
    navigate('/home');
  }
  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};