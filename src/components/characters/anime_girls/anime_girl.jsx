import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import HeadMouseFollowing from "./HeadMouseFollowing";
import Wings from "./Wings";
import ArmController from "./ArmController";
import AxesHelper from "./AxesHelper";
import OneLeg from "./OneLeg";
import TailController from "./TailController";
import { Button } from "../Button/Button";

function AnimeGirl() {
  const groupRef = useRef();
  const { scene } = useGLTF("/anime_girl.glb");
  const [startAnimation, setStartAnimation] = useState(false); // State to control animation

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
    scene.traverse((child) => {
      if (child.isBone) {
        console.log("Bone:", child.name);
      }
    });
  }, [scene, neckRef, headRef]);

  return (
    <>
      <Canvas style={{ width: "100%", height: "80vh" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-10, 0, 0]} intensity={1} />
        <AxesHelper scene={scene} />
        <primitive ref={groupRef} object={scene} position={[0, -2.5, 0]} scale={3} />
        <Wings scene={scene} />
        <ArmController scene={scene} />
        <TailController scene={scene} />
        <OneLeg scene={scene} startAnimation={startAnimation} /> {/* Pass startAnimation as a prop */}
        <OrbitControls />
      </Canvas>
      <Button onClick={() => setStartAnimation(true)}>Start Leg Raise</Button> {/* Button to start animation */}
    </>
  );
}

export default React.memo(AnimeGirl);