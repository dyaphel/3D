import React, { useState } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import AppRoutes from './routes/AppRoutes';
import {RotatingButton} from './components/characters/Button/RotatingButton';
import {RaiseLegButton} from './components/characters/Button/RaiseLegButton';
import {ResetLegButton} from './components/characters/Button/ResetLegButton';
import {RaiseArmButton} from './components/characters/Button/RaiseArmButton';
import {ResetArmButton} from './components/characters/Button/ResetArmButton';
import './App.css';

function AppContent() {
  const location = useLocation(); // Get the current route
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isRotating, setIsRotating] = useState(false); // Add state for rotation
  const [startLegAnimation, setStartLegAnimation] = useState(false);
  const [resetLegAnimation, setResetLegAnimation] = useState(false);
  const [startArmAnimation, setStartArmAnimation] = useState(false);
  const [resetArmAnimation, setResetArmAnimation] = useState(false);




  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };


  const handleResetLeg = () => {
    setStartLegAnimation(false); // Stop the raise animation
    setResetLegAnimation(true); // Start the reset animation
  };
  
  const handleResetArm = () => {
    setStartArmAnimation(false);
    setResetArmAnimation(true);
  };

  // Define routes where the sidebar and toggle button should appear
  const showSidebarRoutes = ['/Taila','/anime_girl']; // Add other routes if needed
  // Check if the current route is in the showSidebarRoutes array
  const shouldShowSidebar = showSidebarRoutes.includes(location.pathname);

  // Define sidebar content based on the route
  const getSidebarContent = () => {
    switch (location.pathname) {
      case '/Taila':
        console.log('Rendering RotatingButton for /Taila');
        return <RotatingButton setIsRotating={setIsRotating} />; // Example content for the Taila route
      case '/anime_girl':
        return (
           <>
            <RaiseLegButton setStartAnimation={setStartLegAnimation} />
            <ResetLegButton setResetAnimation={handleResetLeg} />
            <RaiseArmButton setStartAnimation={setStartArmAnimation} />
            <ResetArmButton setResetAnimation={handleResetArm} />
            </>
          );
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
      <AppRoutes 
      isRotating={isRotating}
      startLegAnimation={startLegAnimation}
      resetLegAnimation={resetLegAnimation}
      startArmAnimation={startArmAnimation}
      resetArmAnimation={resetArmAnimation}
      setStartLegAnimation={setStartLegAnimation}
      setResetLegAnimation={setResetLegAnimation}
      setStartArmAnimation={setStartArmAnimation}
      setResetArmAnimation={setResetArmAnimation}
      />
      
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