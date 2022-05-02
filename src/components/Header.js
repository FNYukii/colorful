import React from 'react'
import '../styles/header.css'
// import { FaBars, FaTimes } from 'react-icons/fa'

import logo from '../images/logo-black.png'

function Header(props) {

  function liClassName(index) {
    if (props.pageIndex === index) {
      return 'currentPage'
    }
    return ''
  }

  return (
    <header>
      <div className="large-container">

        <a href='/'>
         <img className='logo' src={logo} alt='' height="50"/>
        </a>

        <ul className="global-nav">
          <li><a className={liClassName(0)} href="/">Top</a></li>
          <li><a className={liClassName(1)} href="/products">Products</a></li>
          <li><a className={liClassName(2)} href="/contact">Contact</a></li>
        </ul>

      </div>
    </header>
  )
}

export default Header