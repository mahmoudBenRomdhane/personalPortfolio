"use client";
import { MainContainer } from "./styles";
import { Props } from "./types";
export default function MainContentLayout({ children }: Props) {
  if (!children) {
    console.error("mainContentLayout: Missing children prop");
    return null;
  }
  return <MainContainer>{children}</MainContainer>;
}
