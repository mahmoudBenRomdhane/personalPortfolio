"use client";
import { Props } from "./types";
import { HeaderContentLayout } from "./styles";

export default function MainContent({ children }: Props) {
  if (!children) {
    console.error("headerContent: Missing children prop");
    return null;
  }
  return <HeaderContentLayout>{children}</HeaderContentLayout>;
}
