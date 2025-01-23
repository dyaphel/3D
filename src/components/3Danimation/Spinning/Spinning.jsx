import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Edges } from "@react-three/drei";

function SpinningCube() {
  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false); // Track hover state

  // Rotate the cube continuously
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.02; // Adjust rotation speed on X-axis
      cubeRef.current.rotation.y += 0.02;
      cubeRef.current.rotation.z += 0.02; // Adjust rotation speed on Y-axis
    }
  });

  return (
    <mesh
      ref={cubeRef}
      position={[0, 0, 0]}
      onPointerOver={() => setHovered(true)} // Set hover to true
      onPointerOut={() => setHovered(false)} // Reset hover to false
    >
      {/* Cube Geometry */}
      <boxGeometry args={[2, 2, 2]} />
      {/* Material */}
      <meshStandardMaterial
        color={hovered ? "cyan" : "white"} // Change color on hover
        wireframe={hovered} // Show wireframe when hovered
      />
      {/* Glowing Edges */}
      <Edges
        color="cyan"
        linewidth={2}
        emissive="cyan"
        emissiveIntensity={hovered ? 2 : 0.5} // Glow intensity on hover
      />
    </mesh>
  );
}

export default function CubeWithSpinningEffect() {
  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 45 }}>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      {/* Spinning Cube */}
      <SpinningCube />
      
      {/* Camera Controls */}
      <OrbitControls />
    </Canvas>
  );
}
