import React, { useState } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function AppContent() {
  const location = useLocation(); // Get the current route
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Define routes where the sidebar and toggle button should appear
  const showSidebarRoutes = ['/Taila']; // Add other routes if needed

  // Check if the current route is in the showSidebarRoutes array
  const shouldShowSidebar = showSidebarRoutes.includes(location.pathname);

  return (
    <div>
      {/* Always render the Navbar */}
      <Navbar toggleSidebar={toggleSidebar} showToggleButton={shouldShowSidebar} />

      {/* Conditionally render the Sidebar */}
      {shouldShowSidebar && (
        <>
          <Sidebar isVisible={isSidebarVisible} />
          {isSidebarVisible && (
            <div className="backdrop" onClick={toggleSidebar} />
          )}
        </>
      )}

      {/* Render the routes */}
      <AppRoutes />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;