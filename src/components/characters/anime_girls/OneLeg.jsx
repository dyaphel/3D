import React, { useEffect, useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";

function OneLeg({ scene, startAnimation }) {
  const { invalidate } = useThree();
  const rightKneeRef = useRef(null);
  const [rotation, setRotation] = useState(0);

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
    if (rightKneeRef.current && startAnimation) { // Only update rotation if startAnimation is true
      if (rotation < Math.PI / 2) {
        setRotation((prev) => prev + 0.02);
        rightKneeRef.current.rotation.x = rotation;
        invalidate();
      }
    }
  });

  return null;
}

export default React.memo(OneLeg);