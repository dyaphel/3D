import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { OrbitControls, useTexture } from "@react-three/drei";
import "./sphere.css";

function RotatingSphere() {
  const sphereRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });


  // Update the sphere rotation based on the mouse position
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = mousePos.y / 100;
      sphereRef.current.rotation.y = mousePos.x / 100;
    }
  });

  return (
    <>
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
        <sphereGeometry args={[3, 50, 50]} />
        {/* Apply the texture */}
        <meshStandardMaterial color={hovered ? "white" : "light"} wireframe />

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
