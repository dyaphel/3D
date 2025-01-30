import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export default function RaisedArm({ scene }) {
  const upperArmRef = useRef();
  const lowerArmRef = useRef();
  const handRef = useRef();

  useEffect(() => {
    // Find the arm bones in the scene using the bone names you provided
    const upperArm = scene.getObjectByName("Left_arm_20"); // Upper arm bone
    const lowerArm = scene.getObjectByName("Left_elbow_19"); // Lower arm (elbow) bone
    const hand = scene.getObjectByName("Left_wrist_16"); // Hand (wrist) bone

    // Assign the bones to the refs
    if (upperArm) upperArmRef.current = upperArm;
    if (lowerArm) lowerArmRef.current = lowerArm;
    if (hand) handRef.current = hand;
  }, [scene]);

  useFrame(() => {
    // Rotate the arm bones to raise the arm completely
    if (upperArmRef.current) {
      // Full shoulder rotation to raise the arm
      upperArmRef.current.rotation.x = Math.PI / 2; // Raise the arm (shoulder rotation)
      upperArmRef.current.rotation.y = 3; // Keep it centered
      upperArmRef.current.rotation.z = 0.6; // No outward rotation

      // Adjust the position to move the arm upwards
      upperArmRef.current.position.y = 0.12; // Raise the arm high
      upperArmRef.current.position.x = -0.08; // Keep the arm slightly outward
      upperArmRef.current.position.z = -0.08; 
    }

    if (lowerArmRef.current) {
      // Lower arm should stay aligned with the upper arm, slight bend for natural look
      lowerArmRef.current.rotation.x = -Math.PI / 10; // Slight bend for the elbow
      lowerArmRef.current.rotation.y = 0; // Keep it centered
      lowerArmRef.current.rotation.z = 0; // No rotation around z-axis
    }

    if (handRef.current) {
      // Keep the hand aligned and straight
      handRef.current.rotation.x = 0;
      handRef.current.rotation.y = 0;
      handRef.current.rotation.z = 0;
    }
  });

  return null; // This component doesn't render anything
}
