import React from "react";
import "./Button.css";

export function Button({ onClick, children }) {
  return (
    <button onClick={(e) => {
        e.preventDefault();
        onClick();
      }} 
      className="button-custom"
    >
      {children}
    </button>
  );
}

