import React from 'react';
import './Sidebar.css';

function Sidebar({ isVisible, children }) {
  return (
    <div className={`sidebar ${isVisible ? "sidebar-visible" : "sidebar-hidden"}`}>
      {children}
    </div>
  );
}

export default Sidebar;