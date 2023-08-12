"use client";
import BackgroundComponent from "../backgroundComponent/index";
import MainContentLayout from "../mainContentLayout/index";
import MainContent from "../mainContent";
import HeaderContent from "../headerContent";
export default function HomePage() {
  return (
    <BackgroundComponent>
      <MainContentLayout>
        <MainContent>
          <></>
        </MainContent>
        <HeaderContent>
          <></>
        </HeaderContent>
      </MainContentLayout>
    </BackgroundComponent>
  );
}
