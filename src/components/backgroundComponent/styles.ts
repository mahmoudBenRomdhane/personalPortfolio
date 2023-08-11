"use client";
import styled from "styled-components";

interface ChildProps {
  mouseX: number;
  mouseY: number;
}
export const StyledBackground = styled.div`
  pointer-events: none;
  position: fixed;
  inset: 0;
  background: rgb(15 23 42 /1);
`;

export const StyledEffect = styled.div<ChildProps>`
  width: 100%;
  height: 100%;
  background: radial-gradient(
    600px at ${(props) => props.mouseX}px ${(props) => props.mouseY}px,
    rgba(29, 78, 216, 0.15),
    transparent 80%
  );
`;
