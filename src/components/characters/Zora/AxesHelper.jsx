import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function AxesHelper({ scene }) {
  const axesRef = useRef();

  useEffect(() => {
    // Create the axes helper
    const axes = new THREE.AxesHelper(2); // Size of the axes (2 units)
    axesRef.current = axes;

    // Add the axes to the scene
    scene.add(axes);

    return () => {
      // Cleanup the axes helper
      scene.remove(axes);
    };
  }, [scene]);

  useFrame(() => {
    if (axesRef.current) {
      const model = scene.getObjectByName("/anime_girl.glb"); // Replace with your model's name

      if (model) {
        // Compute the bounding box of the model
        const box = new THREE.Box3().setFromObject(model);
        const center = new THREE.Vector3();
        box.getCenter(center);

        // Set the axes helper's position to the center of the model
        axesRef.current.position.copy(center);

        // Copy the model's rotation to the axes helper
        axesRef.current.rotation.copy(model.rotation);
      }
    }
  });

  return null; // This component doesn't render anything directly
}

export default AxesHelper;