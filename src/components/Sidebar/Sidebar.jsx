import React from "react";
import "./Sidebar.css";

function Sidebar({ isVisible }) {
  return (
    <div className={`sidebar ${isVisible ? "sidebar-visible" : "sidebar-hidden"}`}>
      {/* Sidebar content goes here */}
    </div>
  );
}

export default Sidebar;