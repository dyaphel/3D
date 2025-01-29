import React from "react";

export function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault(); // Prevents unintended scrolling
        onClick();
      }}
      style={{
        border: "2px solid #C77DFF",
        padding: "10px 20px",
        background: "Transparent",
        color: "#C77DFF",
        cursor: "pointer",
        fontSize: "16px",
        borderRadius: "5px",
        transition: "all 0.3s ease",
        margin: "10px", // Space between buttons
      }}
      onMouseOver={(e) => {
        e.target.style.background = "#C77DFF";
        e.target.style.color = "#FFFFFF";
      }}
      onMouseOut={(e) => {
        e.target.style.background = "Transparent";
        e.target.style.color = "#C77DFF";
      }}
    >
      {children}
    </button>
  );
}
