import './App.css'
import Cube from './components/Figures/Cube/Cube' 
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sphere from './components/Figures/sphere/sphere'
import Pyramid from './components/Figures/pyramid/pyramid'
import Pentagon from './components/Figures/Pentagon/Pentagon'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <Router>
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Cube />} />
        <Route path="/sphere" element={<Sphere />} />
        <Route path="/pyramid" element={<Pyramid />} />
        <Route path="/pentagon" element={<Pentagon />} />
      </Routes>
    </div>
  </Router>
);
}

export default App
