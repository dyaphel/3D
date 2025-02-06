import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import MeshViewer from "./MeshViewer"; // Import the reusable MeshViewer component
import "./TailaMesh.css"; // Import the CSS for the grid layout

function TailaMesh() {
  const [meshes, setMeshes] = useState([]);
  const { scene } = useGLTF("/Taila.glb"); // Load the GLB file from the public folder

  useEffect(() => {
    // Function to traverse the scene and extract mesh names and objects
    const extractMeshes = (object) => {
      const meshes = [];
      object.traverse((child) => {
        if (child.isMesh) {
          meshes.push({
            name: child.name,
            mesh: child, // Store the mesh object
          });
        }
      });
      return meshes;
    };

    // Extract meshes and update state
    const extractedMeshes = extractMeshes(scene);
    setMeshes(extractedMeshes);
  }, [scene]);

  return (
    <div>
      <div className="grid-container">
        {meshes.map(({ name, mesh }, index) => (
          <MeshViewer key={index} mesh={mesh} name={name}/>
        ))}
      </div>
    </div>
  );
}

export default TailaMesh;