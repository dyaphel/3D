// HeadMouseFollowing.js
import React, { useEffect, useRef } from "react";

function HeadMouseFollowing() {
  const neckRef = useRef();
  const headRef = useRef();

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalizzare le coordinate del mouse in un range di [-1, 1]
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;

      // Ruotare il collo
      if (neckRef.current) {
        neckRef.current.rotation.y = x * 0.4; // Movimento orizzontale del collo
        neckRef.current.rotation.x = y * 0.2; // Movimento verticale del collo
      }

      // Ruotare la testa
      if (headRef.current) {
        headRef.current.rotation.y = x * 0.7; // Movimento orizzontale della testa
        headRef.current.rotation.x = y * 0.4; // Movimento verticale della testa
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Restituiamo i riferimenti per essere usati nel componente principale
  return { neckRef, headRef };
}

export default HeadMouseFollowing;
