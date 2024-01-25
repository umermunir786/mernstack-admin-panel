import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css";


export const Navbar=()=> {

    const log=localStorage.getItem("token")
  return (
    <>
    <header>
        <div className="container">
          <div className="logo-brand">
          <a href='/'>Umer munir</a>
            </div>  
            <nav>
        <ul>
            <li><NavLink to='/' >Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/service'>Service</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            {
                log ?
                <li><NavLink to='/logout'>Logout</NavLink></li>
                :
                <>
<li><NavLink to='/register'>Register</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
            </>
            }
           
            
           
        </ul>
    </nav>
        </div>
    </header>
   
   
    </>
  )
}

