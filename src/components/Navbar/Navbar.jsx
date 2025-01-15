import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

 function Navbar({ setShape }) {
  return (
    <nav className="neon-navbar">
      <Link to="/" className="neon-button">Cube</Link>
      <Link to="/sphere" className="neon-button">Sphere</Link>
      <Link to="/pyramid" className="neon-button">Pyramid</Link>
      <Link to="/pentagon" className="neon-button">Pentagon</Link>
    </nav>
  );
}
export default Navbar;
