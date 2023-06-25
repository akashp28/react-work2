import React from 'react'
import './Home.css'
import img1 from '../assets/img1.png'

const Home = () => {
  return (
    <div className="container">
        <div className="header">
            <div className="h1">
    <ul>
    <img src={img1} className='logo'/>
        </ul>
        </div>
        <ul>
        <li><a href="#premium">Premium</a></li>
        <li><a href="#help">Help</a></li>
        <li><a href="#download">Download</a></li>
        <li><a href="##">|</a></li>
        <li><a href="#signup">Sign up</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </div>
    <div className='info'>
        <div className='info1'>Music for EveryOne</div>
        <div className='info2'>Millions of Songs. No Credit Card Needed</div>
        <input type="button" className='btn1' value="GET SPOTIFY FREE" />
    </div>
    </div>
   
  )
}

export default Home