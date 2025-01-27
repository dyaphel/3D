import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function AnimeGirl() {
  const groupRef = useRef();
  const neckRef = useRef();
  const headRef = useRef();

  // Load the GLTF model
  const { scene } = useGLTF("/anime_girl.glb");

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalize mouse coordinates to a range of [-1, 1]
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;

      // Rotate the neck
      if (neckRef.current) {
        neckRef.current.rotation.y = x * 0.2; // Small horizontal movement
        neckRef.current.rotation.x = y * 0.1; // Smaller vertical movement
      }

      // Rotate the head
      if (headRef.current) {
        headRef.current.rotation.y = x * 0.5; // Larger horizontal movement
        headRef.current.rotation.x = y * 0.3; // Larger vertical movement
      }

    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Traverse the GLTF model to find the specific parts
    const neck = scene.getObjectByName("Neck_48");
    const head = scene.getObjectByName("Head_47");
 
    // Set references to the specific parts
    if (neck) neckRef.current = neck;
    if (head) headRef.current = head;
    // if (leftEye) leftEyeRef.current = leftEye;
    // if (rightEye) rightEyeRef.current = rightEye;
  }, [scene]);

  return (
    <Canvas style={{ width: "100%", height: "100vh" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-10, 0, 0]} intensity={1} />

      {/* Add the 3D model */}
      <primitive ref={groupRef} object={scene} position={[0,-1,0]} scale={1.5} />

      {/* Add camera controls */}
      <OrbitControls />
    </Canvas>
  );
}

export default AnimeGirl;
