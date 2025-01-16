import React, { useState } from "react";
import DropdownButton from "../DropdownButton/DropdownButton";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./Navbar.css";

function Navbar({ setShape, setAnimation }) {
  const [isFiguresDropdownOpen, setIsFiguresDropdownOpen] = useState(false);
  const [isAnimationDropdownOpen, setIsAnimationDropdownOpen] = useState(false);

  const toggleFiguresDropdown = () => {
    setIsFiguresDropdownOpen(!isFiguresDropdownOpen);
  };

  const toggleAnimationDropdown = () => {
    setIsAnimationDropdownOpen(!isAnimationDropdownOpen);
  };

  return (
    <nav className="neon-navbar">
      {/* Figures Dropdown Button */}
      <div className="dropdown">
        <DropdownButton
          label="Figures"
          toggleDropdown={toggleFiguresDropdown}
          isDropdownOpen={isFiguresDropdownOpen}
        />
        {isFiguresDropdownOpen && <DropdownMenu type="shapes" setShape={setShape} />}
      </div>

      {/* Animation Dropdown Button */}
      <div className="dropdown">
        <DropdownButton
          label="Animation"
          toggleDropdown={toggleAnimationDropdown}
          isDropdownOpen={isAnimationDropdownOpen}
        />
        {isAnimationDropdownOpen && <DropdownMenu type="animations" setAnimation={setAnimation} />}
      </div>
    </nav>
  );
}

export default Navbar;
