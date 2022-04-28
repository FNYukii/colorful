import React from 'react'
import '../styles/header.css'
import { FaBars } from 'react-icons/fa';

function Header() {
  return (
    <header>
      <div className="large-container">
        <a className="logo" href="/">Simple Home</a>
        <button className='hamburger-menu-button'>
          <i className="fas fa-bars"></i>
        </button>
        <ul className="global-nav">
          <li><a href="/" style={{color: 'black'}}>Top</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/contact">Contact</a></li>
        <FaBars/>
        </ul>
      </div>
    </header>
  )
}

export default Header