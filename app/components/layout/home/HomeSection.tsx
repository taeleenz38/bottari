import React from "react";
import HomeVideos from "../../ui/HomeVideos";
import BottariInfo from "./BottariInfo";

const HomeSection = () => {
  return (
    <div className="bg-[var(--primary)] w-screen h-dvh relative">
      <HomeVideos />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <BottariInfo />
      </div>
    </div>
  );
};

export default HomeSection;
