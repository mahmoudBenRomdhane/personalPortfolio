"use client";
import { Props } from "./types";
import { StyledMainContent } from "./styles";

export default function MainContent({ children }: Props) {
  if (!children) {
    console.error("mainContent: Missing children prop");
    return null;
  }
  return <StyledMainContent>{children}</StyledMainContent>;
}
