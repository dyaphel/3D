import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { OrbitControls, Edges } from "@react-three/drei";
import "./Cube.css";

function RotatingCube() {
  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Update the cube rotation based on the mouse position
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x = mousePos.y / 100;
      cubeRef.current.rotation.y = mousePos.x / 100;
    }
  });

  return (
    <>
      <mesh
        ref={cubeRef}
        position={[0, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onPointerMove={(e) => {
          setMousePos({
            x: e.clientX - window.innerWidth / 2,
            y: e.clientY - window.innerHeight / 2,
          });
        }}
      >
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color={hovered ? "white" : "light"} />

        {/* Edges attached directly to the cube */}
        <Edges color="cyan"  linewidth={3} emissive="light"  // Add the glowing effect
            emissiveIntensity={0.8}></Edges>
      </mesh>
    </>
  );
}

export default function Cube() {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 30 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <RotatingCube />
      <OrbitControls />
    </Canvas>
  );
}
