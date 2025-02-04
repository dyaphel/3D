import React, { useState } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import AppRoutes from './routes/AppRoutes';
import RotatingButton from './components/characters/Button/RotatingButton';
import './App.css';

function AppContent() {
  const location = useLocation(); // Get the current route
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isRotating, setIsRotating] = useState(false); // Add state for rotation
  
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Define routes where the sidebar and toggle button should appear
  const showSidebarRoutes = ['/Taila']; // Add other routes if needed
  // Check if the current route is in the showSidebarRoutes array
  const shouldShowSidebar = showSidebarRoutes.includes(location.pathname);

  // Define sidebar content based on the route
  const getSidebarContent = () => {
    switch (location.pathname) {
      case '/Taila':
        console.log('Rendering RotatingButton for /Taila');
        return <RotatingButton setIsRotating={setIsRotating} />; // Example content for the Taila route
      // Add more cases for other routes if needed
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Always render the Navbar */}
      <Navbar toggleSidebar={toggleSidebar} showToggleButton={shouldShowSidebar} />

      {/* Conditionally render the Sidebar */}
      {shouldShowSidebar && (
        <>
           <Sidebar isVisible={isSidebarVisible}>
            {getSidebarContent()}
          </Sidebar>
          {isSidebarVisible && (
            <div className="backdrop" onClick={toggleSidebar} />
          )}
        </>
      )}

      {/* Render the routes */}
      <AppRoutes isRotating={isRotating}/>
   
    </div>
  );
}

/*necessary becasue of the use of the useLocation hook which need to be defined after the Router*/

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;