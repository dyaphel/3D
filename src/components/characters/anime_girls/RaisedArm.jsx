import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export default function RaisedArm({ scene, startAnimation, resetAnimation, setResetAnimation }) {
  const upperArmRef = useRef();
  const lowerArmRef = useRef();
  const handRef = useRef();
  const animationProgress = useRef(0); // To track the progress of the animation
  const isResetting = useRef(false); // To track if we are resetting the animation

  // Original positions and rotations
  const originalUpperArmRotation = useRef({ x: 0, y: 0, z: 0 });
  const originalUpperArmPosition = useRef({ x: 0, y: 0, z: 0 });
  const originalLowerArmRotation = useRef({ x: 0, y: 0, z: 0 });
  const originalHandRotation = useRef({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const upperArm = scene.getObjectByName("Left_arm_20"); 
    const lowerArm = scene.getObjectByName("Left_elbow_19"); 
    const hand = scene.getObjectByName("Left_wrist_16"); 

    if (upperArm) {
      upperArmRef.current = upperArm;
      originalUpperArmRotation.current = {
        x: upperArm.rotation.x,
        y: upperArm.rotation.y,
        z: upperArm.rotation.z,
      };
      originalUpperArmPosition.current = {
        x: upperArm.position.x,
        y: upperArm.position.y,
        z: upperArm.position.z,
      };
    }
    if (lowerArm) {
      lowerArmRef.current = lowerArm;
      originalLowerArmRotation.current = {
        x: lowerArm.rotation.x,
        y: lowerArm.rotation.y,
        z: lowerArm.rotation.z,
      };
    }
    if (hand) {
      handRef.current = hand;
      originalHandRotation.current = {
        x: hand.rotation.x,
        y: hand.rotation.y,
        z: hand.rotation.z,
      };
    }
  }, [scene]);

  useFrame(() => {
    if (startAnimation && !isResetting.current) {
      // Gradually increase animation progress for smooth transition
      if (animationProgress.current < 1) {
        animationProgress.current += 0.05; // Control speed of animation (adjust as needed)
      }

      const progress = animationProgress.current;

      // Apply interpolated rotation and position based on animation progress
      if (upperArmRef.current) {
        upperArmRef.current.rotation.x = Math.PI / 2.5 * progress; // Smoothly raise arm
        upperArmRef.current.rotation.y = -3.3 * progress; // Rotate the arm laterally
        upperArmRef.current.rotation.z = 0.6 * progress; // Control the rotation
        
        upperArmRef.current.position.y = 0.1 * progress; // Move arm upwards
        upperArmRef.current.position.x = -0.05* progress; // Move arm to the left
        upperArmRef.current.position.z = -0.05 * progress; // Move arm slightly backwards
      }

      if (lowerArmRef.current) {
        // Fix the lower arm rotation to bend naturally
        lowerArmRef.current.rotation.x = -Math.PI / 10 * progress; // Smoothly bend the lower arm
        lowerArmRef.current.rotation.y = 0; // Ensure no unwanted lateral rotation
        lowerArmRef.current.rotation.z = 0; // Ensure no unwanted twist
      }

      if (handRef.current) {
        handRef.current.rotation.x = 0; // Keep the hand in a fixed position for now
        handRef.current.rotation.y = 0;
        handRef.current.rotation.z = 0;
      }
    } else if (resetAnimation && isResetting.current) {
      // Gradually decrease animation progress for smooth transition
      if (animationProgress.current > 0) {
        animationProgress.current -= 0.05; // Control speed of reset animation (adjust as needed)
      } else {
        setResetAnimation(false); // Stop reset animation
        isResetting.current = false; // Reset the flag
      }

      const progress = animationProgress.current;

      // Apply interpolated rotation and position based on animation progress
      if (upperArmRef.current) {
        upperArmRef.current.rotation.x = originalUpperArmRotation.current.x + (Math.PI / 2 - originalUpperArmRotation.current.x) * progress; // Smoothly lower arm
        upperArmRef.current.rotation.y = originalUpperArmRotation.current.y + (-3 - originalUpperArmRotation.current.y) * progress; // Rotate the arm back
        upperArmRef.current.rotation.z = originalUpperArmRotation.current.z + (0.6 - originalUpperArmRotation.current.z) * progress; // Control the rotation
        
        upperArmRef.current.position.y = originalUpperArmPosition.current.y + (0.1 - originalUpperArmPosition.current.y) * progress; // Move arm downwards
        upperArmRef.current.position.x = originalUpperArmPosition.current.x + (-0.05 - originalUpperArmPosition.current.x) * progress; // Move arm back to the right
        upperArmRef.current.position.z = originalUpperArmPosition.current.z + (-0.07 - originalUpperArmPosition.current.z) * progress; // Move arm slightly forwards
      }

      if (lowerArmRef.current) {
        lowerArmRef.current.rotation.x = originalLowerArmRotation.current.x + (-Math.PI / 4 - originalLowerArmRotation.current.x) * progress; // Smoothly straighten the lower arm
        lowerArmRef.current.rotation.y = originalLowerArmRotation.current.y; // Ensure no unwanted lateral rotation
        lowerArmRef.current.rotation.z = originalLowerArmRotation.current.z; // Ensure no unwanted twist
      }

      if (handRef.current) {
        handRef.current.rotation.x = originalHandRotation.current.x; // Reset hand rotation
        handRef.current.rotation.y = originalHandRotation.current.y;
        handRef.current.rotation.z = originalHandRotation.current.z;
      }
    }
  });

  useEffect(() => {
    if (resetAnimation) {
      isResetting.current = true; // Start resetting the animation
    }
  }, [resetAnimation]);

  return null;
}