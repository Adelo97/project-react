import React from 'react'
import {Routes, Route} from "react-router"; 

import {Home} from '../pages/home';
import {About} from '../pages/about';
import { MusicGroups } from '../pages/musicgroups';



export  function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route  path="/musicgroups/*" element={<MusicGroups /> } />
        
      </Routes>
    </div>
  )
}
