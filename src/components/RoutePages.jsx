import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Cart from '../pages/Cart';

import Home from '../pages/Home';



export default function RoutesPages() {
  return (
    <div>
      <Routes >

        <Route path='/' exact element={<Home />} />
        <Route path='/cart' exact element={<Cart />} />
        <Route>404 Not Found!</Route>
      
      
        </Routes>
    </div>
  )
}
