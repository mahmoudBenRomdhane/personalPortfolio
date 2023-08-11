"use client";
import React, { useState, useEffect } from "react";
import { StyledBackground, StyledEffect } from "./styles";
import { Props } from "./types";
export default function BackgroundComponent({ children }: Props) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  if (!children) {
    console.error("BackgroundComponent: Missing children prop");
    return null;
  }
  return (
    <StyledBackground>
      <StyledEffect mouseX={mousePosition.x} mouseY={mousePosition.y}>
        {children}
      </StyledEffect>
    </StyledBackground>
  );
}
