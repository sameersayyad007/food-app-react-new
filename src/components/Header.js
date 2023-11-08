import { useEffect, useState } from 'react';
import logo from '../assets/images/logo.jpg'
import { BrowserRouter, Routes, createBrowserRouter, useNavigate } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    IndexRoute
  } from "react-router-dom";
import { AppBody } from './AppBody';
import Aboutus from '../pages/Aboutus';

export const Header=()=>{
    //  const sameer="welocn"
    const [login, setLogin]= useState('Login')
    const [isActive, setisActive]= useState(true)
const navigate = useNavigate()
    // const navigate= useNavigate();


useEffect(()=>{
    if(isActive){
        setLogin('Login')
    }
    else if(!isActive){
        setLogin('Logout')
    }

},[login, isActive])



    const loginfunc=()=>{
setisActive(!isActive)
    }


    
  return (
   
   <>
   
      <div className="headingContainer">
          <img src={logo} alt="no image" />
          <h3 >Food-app</h3>
          <ul className="navItems">
              <li><Link to='/home' className='link'>Home</Link></li>
              <li ><Link to='/profile'>Profile</Link></li>
              <li><Link to='/aboutus' className='link' >About us</Link></li>
              <li><Link to='/cart'>Cart</Link></li>
              <li onClick={loginfunc}>{login}</li>
          </ul>
      
      </div>



      
   </>
 
  );
  }
  