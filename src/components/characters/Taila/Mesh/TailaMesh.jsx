import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import "./TailaMesh.css";

function TailaMesh() {
  const [meshes, setMeshes] = useState([]);
  const { scene } = useGLTF("/Taila.glb"); // Load the GLB file from the public folder

  useEffect(() => {
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

  return (
    <div>
      {meshes.map(({ name, mesh }, index) => (
        <div key={index} style={{ display: "inline-block", margin: "20px" }}>
          <h3 style={{ textAlign: "center" }}>{name}</h3>
          <Canvas camera={{ position: [0, 0, 2.5] }} style={{ width: "800px", height: "800px" }}>
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} />
            <primitive object={mesh.clone()} scale={[10, 10, 10]} />
            <OrbitControls enableZoom={true} />
          </Canvas>
        </div>
      ))}
    </div>
  );
}

export default TailaMesh;
