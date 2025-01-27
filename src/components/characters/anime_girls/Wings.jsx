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

    // Log the found wings (for debugging)
    console.log("Ali trovate:", wingsRef.current);
  }, [scene]);

  // Wing animation
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    // Move the wings back and forth along the Z-axis relative to their original position
    wingsRef.current.forEach((wing) => {
      wing.object.position.z = wing.originalZ + Math.sin(time * 2) * 0.01; // Oscillate around the original Z position
    });
  });

  return null; // This component doesn't render anything directly
}