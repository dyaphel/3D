import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

function MeshViewer({ mesh, name }) {
  return (
    <div className="grid-item">
      <h3>{name}</h3>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <primitive object={mesh.clone()} scale={[2, 2, 2]} />
        <OrbitControls enableZoom={true} /> {/* Allow user to rotate the mesh */}
      </Canvas>
    </div>
  );
}

export default MeshViewer;