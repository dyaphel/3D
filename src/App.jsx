import './App.css'
import Cube from './components/Cube/Cube' 
import React from 'react'
import Navbar from './components/Navbar'
import Sphere from './components/sphere/sphere'
import Pyramid from './components/pyramid/pyramid'
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
      </Routes>
    </div>
  </Router>
);
}

export default App
