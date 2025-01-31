import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export default function RaisedArm({ scene, startAnimation }) {
  const upperArmRef = useRef();
  const lowerArmRef = useRef();
  const handRef = useRef();
  const animationProgress = useRef(0); // To track the progress of the animation

  useEffect(() => {
    const upperArm = scene.getObjectByName("Left_arm_20"); 
    const lowerArm = scene.getObjectByName("Left_elbow_19"); 
    const hand = scene.getObjectByName("Left_wrist_16"); 

    if (upperArm) upperArmRef.current = upperArm;
    if (lowerArm) lowerArmRef.current = lowerArm;
    if (hand) handRef.current = hand;
  }, [scene]);

  useFrame(() => {
    if (!startAnimation) return; // Don't animate unless triggered

    // Gradually increase animation progress for smooth transition
    if (animationProgress.current < 1) {
      animationProgress.current += 0.05; // Control speed of animation (adjust as needed)
    }

    const progress = animationProgress.current;

    // Apply interpolated rotation and position based on animation progress
    if (upperArmRef.current) {
      upperArmRef.current.rotation.x = Math.PI / 2 * progress; // Smoothly raise arm
      upperArmRef.current.rotation.y = -3 * progress; // Rotate the arm laterally
      upperArmRef.current.rotation.z = 0.6 * progress; // Control the rotation
      
      upperArmRef.current.position.y = 0.1 * progress; // Move arm upwards
      upperArmRef.current.position.x = -0.05 * progress; // Move arm to the left
      upperArmRef.current.position.z = -0.07 * progress; // Move arm slightly backwards
    }

    if (lowerArmRef.current) {
      lowerArmRef.current.rotation.x = -Math.PI / 10 * progress; // Smoothly bend the lower arm
    }

    if (handRef.current) {
      handRef.current.rotation.x = 0; // Keep the hand in a fixed position for now
      handRef.current.rotation.y = 0;
      handRef.current.rotation.z = 0;
    }
  });

  return null;
}
