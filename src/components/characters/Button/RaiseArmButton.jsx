import React from "react";
import { Button } from "./Button";

export function RaiseArmButton({ setStartAnimation }) {
  return (
    <Button onClick={() => setStartAnimation(true)}>Raise Arm</Button>
  );
}
