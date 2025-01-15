import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { OrbitControls,Edges  } from "@react-three/drei";

function RotatingPyramid() {
  const pyramidRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const wireframe = hovered ? true : false;

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
        <meshStandardMaterial color={hovered ? "cyan" : "white"} wireframe={wireframe} />
        <Edges color="cyan"  linewidth={3} emissive="light"  // Add the glowing effect
           emissiveIntensity={hovered ? 10 : 0.5}></Edges>

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
