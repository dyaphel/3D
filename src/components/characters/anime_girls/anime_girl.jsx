import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import HeadMouseFollowing from "./HeadMouseFollowing"; // Import the HeadMouseFollowing component
import Wings from "./Wings"; // Import the Wings component
import ArmController from "./ArmController";
import AxesHelper from "./AxesHelper";

import TailController from "./TailController"; // Import the TailController component


function AnimeGirl() {
  const groupRef = useRef();
  const { scene } = useGLTF("/anime_girl.glb");

  // Get references for the neck and head from the HeadMouseFollowing component
  const { neckRef, headRef } = HeadMouseFollowing();

  useEffect(() => {
    if (scene) {
      const neck = scene.getObjectByName("Neck_48");
      const head = scene.getObjectByName("Head_47");
  
      if (neck && head) {
        neckRef.current = neck;
        headRef.current = head;
      } else {
        console.warn("Neck or Head bone not found in the scene.");
      }
    }
    // Traverse and log all children of the scene
    scene.traverse((child) => {
      if (child.isBone) {
        console.log("Bone:", child.name);
      }
    });
  }, [scene, neckRef, headRef]);
 

  return (
    <Canvas style={{ width: "100%", height: "80vh" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-10, 0, 0]} intensity={1} />
      <AxesHelper scene={scene} />
      {/* Add the 3D model */}
      <primitive ref={groupRef} object={scene} position={[0, -2.5, 0]} scale={3} />

      {/* Add the Wings component and pass the scene to it */}
      <Wings scene={scene} />
      <ArmController scene={scene} /> 
      <TailController scene={scene} />
      {/* Add camera controls */}
      <OrbitControls />
    </Canvas>
  );
}

export default React.memo(AnimeGirl);