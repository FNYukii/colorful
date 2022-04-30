import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/index.css'

import Header from './components/Header'
import Footer from './components/Footer'

import Top from './components/Top'
import Products from './components/Products'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

import {BrowserRouter, Route, Routes} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Header/>
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Top/>}/>
       <Route path='/products' element={<Products/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
  </React.StrictMode>
)