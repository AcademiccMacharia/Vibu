import React from 'react';
import './landing.css';
import earphone from '../../assets/earbud.svg';
import musicy from '../../assets/musicy4.png'
import logo from '../../assets/logo.png';
import {BsArrowUpRight} from 'react-icons/bs';
import {Link} from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing">
      <div className='overlay'></div>
      <div className='landing-header'>
        <div className='landing-header-left'>
          <img src={logo} alt="logo"/>
        </div>
        <div className='landing-header-right'>
          <ul className='landing-links'>
            <li>Home</li>
            <li>About</li>
            <li>Feature</li>
            <li>Sign In</li>
          </ul>
        </div>
      </div>
      <div className='landing-hero'>
        <div className='landing-hero-left'>
        <h1><span>Good</span> <span>music,</span> <span>good</span> <span>mood</span></h1>
        <img src={earphone} size={18} color="white"alt='earphone'/>
        </div>
        <div className='landing-hero-right'>
        <p>Listen to the music you want from musicians around the world. Boost your mood with music. Experience the decibels like your ear deservers to feel. A treat to your ears</p>
        <button><Link to="/login" className="links">Explore Now <BsArrowUpRight /></Link></button>
        </div>
      </div>
    </div>
  )
}

export default Landing