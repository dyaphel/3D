import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { OrbitControls,Edges  } from "@react-three/drei";

function RotatingPyramid() {
  const pyramidRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useFrame(() => {
    if (pyramidRef.current) {
      pyramidRef.current.rotation.x = mousePos.y / 100;
      pyramidRef.current.rotation.y = mousePos.x / 100;
    }
  });

  return (
    <>
      <mesh
        ref={pyramidRef}
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
        <coneGeometry args={[3, 6, 4]} />
        <Edges color="cyan"  linewidth={3} emissive="light"  emissiveIntensity={10}></Edges>

      </mesh>
    </>
  );
}

export default function Pyramid() {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 30 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <RotatingPyramid />
      <OrbitControls />
    </Canvas>
  );
}
