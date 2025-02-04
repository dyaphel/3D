import React from "react";
import { Button } from "../Button/Button";

export function RotatingButton({ setIsRotating }) {
    return (
        <>
            <Button onClick={() => setIsRotating(true)}>Start Rotation</Button>
            <Button onClick={() => setIsRotating(false)}>Stop Rotation</Button>
        </>
    );
}

export default RotatingButton;
