import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import "./TailaMesh.css"; // Import the CSS for grid and card styles

function TailaMesh() {
  const [meshes, setMeshes] = useState([]);
  const { scene } = useGLTF("/Taila.glb"); // Load the GLB file from the public folder

  useEffect(() => {
    if (!scene) return;
    // Extract individual meshes from the GLTF scene
    const extractMeshes = (object) => {
      const extracted = [];
      object.traverse((child) => {
        if (child.isMesh) {
          extracted.push({ name: child.name, mesh: child });
        }
      });
      return extracted;
    };

    setMeshes(extractMeshes(scene));
  }, [scene]);

  if (!scene) {
    return <div>Loading...</div>; // Show loading message if scene is not available
  }

  return (
    <div className="grid-container">
      {meshes.map(({ name, mesh }, index) => (
        <div key={index} className="mesh-card">
          <h3>{name}</h3>
          <Canvas camera={{ position: [0, 0, 2.5], fov: 75 }} className="mesh-canvas">
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} />
            <primitive object={mesh.clone()} scale={[1, 1, 1]} />
            <OrbitControls enableZoom={true} />
          </Canvas>
        </div>
      ))}
    </div>
  );
}

export default TailaMesh;
