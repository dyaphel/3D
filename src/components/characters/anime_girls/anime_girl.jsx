// AnimeGirl.js
import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import HeadMouseFollowing from "./HeadMouseFollowing"; // Importiamo il componente

function AnimeGirl() {
  const groupRef = useRef();
  const { scene } = useGLTF("/anime_girl.glb");

  // Otteniamo i riferimenti per il collo e la testa dal componente HeadMouseFollowing
  const { neckRef, headRef } = HeadMouseFollowing();

  useEffect(() => {
    // Troviamo gli oggetti specifici (collo e testa)
    const neck = scene.getObjectByName("Neck_48");
    const head = scene.getObjectByName("Head_47");

    // Impostiamo i riferimenti agli oggetti specifici
    if (neck) neckRef.current = neck;
    if (head) headRef.current = head;
  }, [scene, neckRef, headRef]);

  return (
    <Canvas style={{ width: "100%", height: "80vh" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-10, 0, 0]} intensity={1} />

      {/* Aggiungiamo il modello 3D */}
      <primitive ref={groupRef} object={scene} position={[0, -2.5, 0]} scale={3} />

      {/* Aggiungiamo i controlli della telecamera */}
      <OrbitControls />
    </Canvas>
  );
}

export default AnimeGirl;
