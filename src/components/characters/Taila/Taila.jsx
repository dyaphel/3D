import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Taila(){
    const groupRef = useRef();
    const { scene } = useGLTF("/Taila.glb");


scene.traverse((child) => {
    if (child.isBone) {
        console.log("Bone:", child.name);
    }
}); [scene];

return ( 
    <Canvas style={{ width: "100%", height: "80vh" }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} />
        <primitive ref={groupRef} object={scene} position={[0, -3.2, 0]} scale={3.5} />
    </Canvas>   
);
}
export default React.memo(Taila);