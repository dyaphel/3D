import React, { useState } from "react";
import DropdownButton from "../DropdownButton/DropdownButton";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./Navbar.css";

function Navbar({ setShape, setAnimation, setCharacter }) {
  const [isFiguresDropdownOpen, setIsFiguresDropdownOpen] = useState(false);
  const [isAnimationDropdownOpen, setIsAnimationDropdownOpen] = useState(false);
  const [isCharactersDropdownOpen, setIsCharactersDropdownOpen] = useState(false);

  const toggleFiguresDropdown = () => {
    setIsFiguresDropdownOpen(!isFiguresDropdownOpen);
  };

  const toggleAnimationDropdown = () => {
    setIsAnimationDropdownOpen(!isAnimationDropdownOpen);
  };

  const toggleCharactersDropdown = () => {
    setIsCharactersDropdownOpen(!isCharactersDropdownOpen);
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

      {/* Characters Dropdown Button */}
      <div className="dropdown">
        <DropdownButton
          label="Characters"
          toggleDropdown={toggleCharactersDropdown}
          isDropdownOpen={isCharactersDropdownOpen}
        />
        {isCharactersDropdownOpen && (
          <DropdownMenu
            type="characters"
            setCharacter={setCharacter}
            onMouseLeave={toggleCharactersDropdown}
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
