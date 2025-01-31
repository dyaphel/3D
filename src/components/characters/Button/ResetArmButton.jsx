import React from "react";
import { Button } from "./Button"; 

export function ResetArmButton({ setResetAnimation }) {
  return <Button onClick={() => setResetAnimation(true)}>Reset Arm</Button>;
}
