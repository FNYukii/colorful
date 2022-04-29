import React from 'react'
import '../styles/header.css'
// import { FaBars, FaTimes } from 'react-icons/fa'

import logo from '../images/logo-black.png'

function Header() {
  return (
    <header>
      <div className="large-container">

        <a href='/'>
         <img className='logo' src={logo} alt='' height="50"/>
        </a>

        <ul className="global-nav">
          <li><a href="/">Top</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

      </div>
    </header>
  )
}

export default Header