import React from 'react'
import '../styles/header.css'
import { FaBars, FaTimes } from 'react-icons/fa'

function Header() {
  return (
    <header>
      <div className="large-container">
        <a className="logo" href="/">Colorful</a>

        <ul className="global-nav">
          <li><a href="/">Top</a></li>
          <li><a href="/gallery">Products</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

      </div>
    </header>
  )
}

export default Header