import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Header.css'

export const Header = () => {
  return (
    <nav id="desktop-nav">
        <div class="logo"> 
            <Link to="/"> 
                <img src="img/akrlogo.png" alt="Logo"/> 
            </Link> 
        </div>
        <div>
            <ul class="nav-links">
                <li> 
                    <Link to="/home" className="active-"> Home </Link> 
                </li>
                <li> 
                    <Link to="/trans_history"> Transaction </Link> 
                </li>
            </ul>
        </div>
        <div>
            <ul class="nav-links">
                <li>
                    <Link to="/profile"> Profile </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}
