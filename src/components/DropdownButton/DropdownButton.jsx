import React from "react";
import "./DropdownButton.css";

function DropdownButton({ label, toggleDropdown, isDropdownOpen }) {
  return (
    <button
      className="neon-button dropdown-toggle"
      onClick={toggleDropdown}
    >
      {label}
      <span className={`arrow-down ${isDropdownOpen ? "open" : ""}`}></span>
    </button>
  );
}

export default DropdownButton;
