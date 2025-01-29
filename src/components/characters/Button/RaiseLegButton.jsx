import React from "react";
import { Button } from "./Button"; // Import Button component

export function RaiseLegButton({ setStartAnimation }) {
  return <Button onClick={() => setStartAnimation(true)}>Raise Leg</Button>;
}
