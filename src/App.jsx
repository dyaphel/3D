import './App.css'
import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import AppRoutes from './routes/AppRoutes'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <Router>
    <div>
       <Navbar  toggleSidebar={toggleSidebar}/>
       <Sidebar isVisible={isSidebarVisible} />
      <AppRoutes/> 
    
    </div>
  </Router>
);
}

export default App
