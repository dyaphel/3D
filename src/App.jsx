import './App.css'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
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
