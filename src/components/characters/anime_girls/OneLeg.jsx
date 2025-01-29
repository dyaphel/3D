import React, { useEffect, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";

function OneLeg({ scene, startAnimation, resetAnimation, setResetAnimation }) {
  const { invalidate } = useThree();
  const rightKneeRef = useRef(null);
  const rotationRef = useRef(0); // Track rotation without triggering re-renders

  useEffect(() => {
    if (scene) {
      const rightKnee = scene.getObjectByName("Right_knee_111");
      if (rightKnee) {
        rightKneeRef.current = rightKnee;
      } else {
        console.warn("Right leg bones not found in the scene.");
      }
    }
  }, [scene]);

  useFrame(() => {
    if (rightKneeRef.current) {
      if (startAnimation && rotationRef.current < Math.PI / 2.5) {
        // Raise the leg
        rotationRef.current = Math.min(rotationRef.current + 0.02, Math.PI / 2);
        rightKneeRef.current.rotation.x = rotationRef.current;
        invalidate();
      } else if (resetAnimation && rotationRef.current > 0) {
        // Reset the leg
        rotationRef.current = Math.max(rotationRef.current - 0.02, 0);
        rightKneeRef.current.rotation.x = rotationRef.current;
        invalidate();

        // Stop resetAnimation when fully reset
        if (rotationRef.current <= 0) {
          rotationRef.current = 0.1; // Ensure it stops exactly at 0
          rightKneeRef.current.rotation.x = 0;
          setResetAnimation(false); // Reset the state
          console.log("Leg fully reset. resetAnimation set to false.");
        }
      }
    }
  });

  // Debugging logs
  useEffect(() => {
    console.log("resetAnimation:", resetAnimation);
  }, [resetAnimation]);

  return null;
}

export default React.memo(OneLeg);