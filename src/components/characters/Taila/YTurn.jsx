import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

function YTurn({ children, isRotating }) {
    const groupRef = useRef();

    useFrame((state, delta) => {
        if (groupRef.current && isRotating) {
            groupRef.current.rotation.y += delta; // Rotate the model around the Y axis
        }
    });

    return <group ref={groupRef}>{children}</group>;
}

export default YTurn;
