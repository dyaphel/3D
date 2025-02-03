import { Canvas } from "@react-three/fiber";
import React, {useRef} from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Telimia (){
    const groupRef = useRef();
    const { scene } = useGLTF("/Telimia.glb");

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
            <primitive ref={groupRef} object={scene} position={[0, -3.3, 0]} scale={3.5} />
        </Canvas>   
    );
}
export default React.memo(Telimia);