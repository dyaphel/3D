import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { OrbitControls, Edges } from "@react-three/drei";
import { Helmet } from "react-helmet";
import "./sphere.css";

function RotatingSphere() {
  const sphereRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const wireframe = hovered ? true : false; // Enable wireframe only when hovered

  // Update the sphere rotation based on the mouse position
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = mousePos.y / 100;
      sphereRef.current.rotation.y = mousePos.x / 100;
    }
  });

  return (
    <>
    <Helmet>
      <title>Sphere</title>
    </Helmet>
      <mesh
        ref={sphereRef}
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
        <sphereGeometry args={[3, 35, 35]} />
        <meshStandardMaterial color={hovered ? "cyan" : "white"} wireframe={wireframe} />
        
        {/* Adjust the edges */}
        <Edges 
          color="cyan" 
          linewidth={hovered ? 3 : 2}  // Slightly thicker lines when hovered, thinner when not
          emissive="cyan"
          emissiveIntensity={hovered ? 10 : 0}  // No emissive glow when not hovered
        />
      </mesh>
    </>
  );
}

export default function Sphere() {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 30 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <RotatingSphere />
      <OrbitControls />
    </Canvas>
  );
}
