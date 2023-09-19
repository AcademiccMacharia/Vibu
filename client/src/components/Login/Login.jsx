import React from 'react';
import logo from "../../assets/logo.png";
import { BsSpotify } from 'react-icons/bs';
import './login.css'

const Login = () => {
    const handleSpotifyLogin = () => {
        window.location.href = 'http://localhost:3002/login';
      };
  return (
    <div className='login'>
        <div className='login-header'>
        <img src={logo} alt="logo" />
        </div>
        <div className='login-card'>
            <h2>Login to Vibu</h2>
        <button onClick={handleSpotifyLogin}><span><BsSpotify size={24} /></span>Log In with Spotify!</button>
        </div>
    </div>
  )
}

export default Login