import './App.css'
import Cube from './components/Figures/Cube/Cube' 
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sphere from './components/Figures/sphere/sphere'
import Pyramid from './components/Figures/pyramid/pyramid'
import Pentagon from './components/Figures/Pentagon/Pentagon'
import AppRoutes from './routes/AppRoutes'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <Router>
    <div>
      <Navbar />    
      <AppRoutes/>
    </div>
  </Router>
);
}

export default App
