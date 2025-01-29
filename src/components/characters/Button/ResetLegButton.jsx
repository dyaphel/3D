import React from "react";
import { Button } from "./Button"; // Import Button component

export function ResetLegButton({ setResetAnimation }) {
  return <Button onClick={() => setResetAnimation(true)}>Reset Leg</Button>;
}
