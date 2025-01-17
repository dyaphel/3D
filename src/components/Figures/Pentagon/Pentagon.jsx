import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { OrbitControls, Edges } from "@react-three/drei";
import { Helmet } from "react-helmet";
import * as THREE from "three"; // Importa THREE per la gestione delle forme

function RotatingPentagon() {
  const pentagonRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const wireframe = hovered ? true : false;

  // Crea la geometria del pentagono
  const shape = new THREE.Shape();
  const radius = 1.5; // Raggio del pentagono
  const sides = 5; // Numero di lati
  const angle = (2 * Math.PI) / sides;

  // Definisci i vertici del pentagono
  for (let i = 0; i < sides; i++) {
    const x = radius * Math.cos(i * angle);
    const y = radius * Math.sin(i * angle);
    if (i === 0) {
      shape.moveTo(x, y); // Inizia la forma
    } else {
      shape.lineTo(x, y);
    }
  }
  shape.closePath(); // Chiudi la forma per creare il poligono

  // Usa la geometria del pentagono con estrusione per farlo 3D
  const extrudeSettings = { depth: 2, bevelEnabled: false }; // Aggiungi profondità per l'estrusione
  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

  // Update la rotazione in base alla posizione del mouse
  useFrame(() => {
    if (pentagonRef.current) {
      pentagonRef.current.rotation.x = mousePos.y / 100;
      pentagonRef.current.rotation.y = mousePos.x / 100;
    }
  });

  return (
    <>
    <Helmet>
      <title>Pentagon</title>
    </Helmet>
      <mesh
        ref={pentagonRef}
        position={[0, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onPointerMove={(e) => {
          setMousePos({
            x: e.clientX - window.innerWidth / 2,
            y: e.clientY - window.innerHeight / 2,
          });
        }}
        rotation={[Math.PI / 0, 0, 0]} // Ruota il pentagono per far vedere un bordo all'inizio
      >
        {/* Usa la geometria estrusa per il pentagono 3D */}
        <bufferGeometry attach="geometry" {...geometry} />
        <meshStandardMaterial color={hovered ? "cyan" : "white"} wireframe={wireframe} />

        {/* Aggiungi le edges per evidenziare i bordi */}
        <Edges
          color="cyan"
          linewidth={hovered ? 3 : 2}
          emissive="cyan"
          emissiveIntensity={hovered ? 10 : 0}
        />
      </mesh>
    </>
  );
}

export default function Pentagon() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 30 }}> {/* Sposta la camera più vicino */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <RotatingPentagon />
      <OrbitControls />
    </Canvas>
  );
}
