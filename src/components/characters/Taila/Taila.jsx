import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import YTurn from "./YTurn";
import RotatingButton from "../Button/RotatingButton";

function Taila() {
    const { scene } = useGLTF("/Taila.glb");
    const [isRotating, setIsRotating] = useState(false);
    const groupRef = useRef();

    return (
        <div style={{ textAlign: "center" }}>
            <Canvas style={{ width: "100%", height: "80vh" }}>
                <OrbitControls />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} />

                {/* Pass isRotating state to YTurn */}
                <YTurn isRotating={isRotating}>
                    <primitive ref={groupRef} object={scene} position={[0, -3.2, 0]} scale={3.5} />
                </YTurn>
            </Canvas>

            {/* Button to toggle rotation */}
            <RotatingButton setIsRotating={setIsRotating}/>
        </div>
    );
}

export default React.memo(Taila);
