import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ArmController({ scene }) {
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
    // Rotate the arm bones to raise the arm to shoulder height
    if (upperArmRef.current) {
      // Apply rotation
      upperArmRef.current.rotation.x = 5; // Rotate upper arm upward (abduction)
      upperArmRef.current.rotation.y = 6.4; // Reset any side rotation
      upperArmRef.current.rotation.z = -Math.PI / 3; // Slight outward rotation

      // Apply translation to move the arm outward along the X-axis
      upperArmRef.current.position.y = 0.15; // Adjust this value as needed
    }

    if (lowerArmRef.current) {
      lowerArmRef.current.rotation.x = 0; // Straighten lower arm
      lowerArmRef.current.rotation.y = 0;
      lowerArmRef.current.rotation.z = 0;
    }

    if (handRef.current) {
      handRef.current.rotation.x = 0; // Straighten hand
      handRef.current.rotation.y = 0;
      handRef.current.rotation.z = 0;
    }
  });

  return null; // This component doesn't render anything
}