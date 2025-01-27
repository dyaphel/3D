import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export default function Wings({ scene }) {
  const wingsRef = useRef([]);

  useEffect(() => {
    // Function to find all wing objects and store their original positions
    const findWings = (object) => {
      if (object.name.includes("Wing")) { // Match objects with "Wing" in their name
        wingsRef.current.push({
          object, // Reference to the wing object
          originalZ: object.position.z, // Store the original Z position
        });
      }
      object.children.forEach((child) => findWings(child)); // Recursively traverse children
    };

    // Find all wings in the scene
    findWings(scene);
  }, [scene]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const delay = 2; // Delay in seconds before flapping starts
  
    if (time > delay) {
      wingsRef.current.forEach((wing) => {
        const frequency = 2; // Speed of oscillation
        // How far the wings move
        wing.object.position.z = wing.originalZ + Math.sin((time - delay) * frequency) * 0.012;
      });
    }
  });


  return null; 
}