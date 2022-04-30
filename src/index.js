import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Top from './components/Top'
import Products from './components/Products'
import Contact from './components/Contact'

import {BrowserRouter, Route, Routes} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Header/>
    <BrowserRouter>
      <Routes>
       <Route exact path='/' element={<Top/>}/>
       <Route exact path='/products' element={<Products/>}/>
       <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
  </React.StrictMode>
)