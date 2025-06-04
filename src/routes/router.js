import React from 'react'
import {Routes, Route} from "react-router"; 

import {Home} from '../pages/home';
import {About} from '../pages/about';

export  function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}
