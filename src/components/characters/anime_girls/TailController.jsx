import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

function TailController({ scene }) {
  const tailRefs = useRef([]);

  useEffect(() => {
    if (scene) {
      // Replace these with the actual names of the tail bones in your model
      const tailBones = [
        scene.getObjectByName("Tail_02_141"),
        scene.getObjectByName("Tail_03_140"),
        scene.getObjectByName("Tail_04_139"),
        scene.getObjectByName("Tail_05_138"),
        scene.getObjectByName("Tail_06_137"),
        scene.getObjectByName("Tail_07_136"),
        scene.getObjectByName("Tail_08_135"),
        scene.getObjectByName("Tail_09_134"),
        scene.getObjectByName("Tail_10_133"),
        scene.getObjectByName("Tail_11_132"),
      ].filter(Boolean); // Filter out any null or undefined bones

      if (tailBones.length > 0) {
        tailRefs.current = tailBones;
      } else {
        console.warn("No tail bones found in the scene.");
      }
    }
  }, [scene]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    tailRefs.current.forEach((bone, index) => {
      if (bone) {
        // Apply a sine-wave animation to the tail bones
        bone.rotation.y = Math.sin(time * 2 + index * 0.5) * 0.8;
      }
    });
  });

  return null; // This component only controls animation, no visual output
}

export default React.memo(TailController);
