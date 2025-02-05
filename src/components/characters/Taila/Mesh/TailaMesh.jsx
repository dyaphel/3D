import React from "react";
import Taila from "../Taila";  // Import the existing Taila component

function TailaMesh() {
    const position = [0, -0.5, 0];  // Example: Adjust as needed
    const scale = 2;      // Example: Adjust as needed
  return (
    <div>
      <Taila position={position} scale={scale} />
      
    </div>
  );
}

export default TailaMesh;
