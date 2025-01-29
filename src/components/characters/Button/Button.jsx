import React from "react";

export function Button({ onClick, children }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start", // Center horizontally
        alignItems: "center", // Center vertically
        
      }}
    >
      <button
        onClick={onClick}
        style={{
          border: "2px solid #C77DFF", // Brighter and lighter purple
          padding: "10px 20px",
          background: "Transparent",
          color: "#C77DFF", // Brighter and lighter purple
          cursor: "pointer",
          fontSize: "16px",
          borderRadius: "5px",
          marginLeft: "10%", // Center horizontally
          transition: "all 0.3s ease", // Smooth transition for hover effects
        }}
        onMouseOver={(e) => {
          e.target.style.background = "#C77DFF"; // Change background on hover
          e.target.style.color = "#FFFFFF"; // Change text color on hover
        }}
        onMouseOut={(e) => {
          e.target.style.background = "Transparent"; // Revert background
          e.target.style.color = "#C77DFF"; // Revert text color
        }}
      >
        {children}
      </button>
    </div>
  );
}