import React, { useState } from "react";
import DropdownButton from "../DropdownButton/DropdownButton";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./Navbar.css";

function Navbar({ setShape, setAnimation }) {
  const [isFiguresDropdownOpen, setIsFiguresDropdownOpen] = useState(false);
  const [isAnimationDropdownOpen, setIsAnimationDropdownOpen] = useState(false);
  const [is3DAnimationDropdownOpen, setIs3DAnimationDropdownOpen] = useState(false);

  const toggleFiguresDropdown = () => {
    setIsFiguresDropdownOpen(!isFiguresDropdownOpen);
  };

  const toggleAnimationDropdown = () => {
    setIsAnimationDropdownOpen(!isAnimationDropdownOpen);
  };

  const toggle3DAnimationDropdown = () => {
    setIs3DAnimationDropdownOpen(!is3DAnimationDropdownOpen);
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
        {isFiguresDropdownOpen && (
          <DropdownMenu
            type="shapes"
            setShape={setShape}
            onMouseLeave={toggleFiguresDropdown}
          />
        )}
      </div>

      {/* Animation Dropdown Button */}
      <div className="dropdown">
        <DropdownButton
          label="Animation"
          toggleDropdown={toggleAnimationDropdown}
          isDropdownOpen={isAnimationDropdownOpen}
        />
        {isAnimationDropdownOpen && (
          <DropdownMenu
            type="animations"
            setAnimation={setAnimation}
            onMouseLeave={toggleAnimationDropdown}
          />
        )}
      </div>

      {/* 3D Animation Dropdown Button */}
      <div className="dropdown">
        <DropdownButton
          label="3D Animation"
          toggleDropdown={toggle3DAnimationDropdown}
          isDropdownOpen={is3DAnimationDropdownOpen}
        />
        {is3DAnimationDropdownOpen && (
          <DropdownMenu
            type="3Danimations"
            setAnimation={setAnimation}
            onMouseLeave={toggle3DAnimationDropdown}
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
