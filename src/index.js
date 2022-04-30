import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './styles/index.css'

import Top from './components/Top'
import Products from './components/Products'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Top/>}/>
       <Route path='/products' element={<Products/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)