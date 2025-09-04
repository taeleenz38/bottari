import React from "react";

const HomeVideos = () => {
  return (
    <div className="absolute top-14 inset-0 w-full h-dvh flex">
      <video
        src="/videos/1.mp4"
        muted
        autoPlay
        loop
        playsInline
        controls={false}
        className="w-1/4"
      />
      <video
        src="/videos/2.mp4"
        muted
        autoPlay
        loop
        playsInline
        controls={false}
        className="w-1/4"
      />
      <video
        src="/videos/4.mp4"
        muted
        autoPlay
        loop
        playsInline
        controls={false}
        className="w-1/4"
      />
      <video
        src="/videos/3.mp4"
        muted
        autoPlay
        loop
        playsInline
        controls={false}
        className="w-1/4"
      />
      <div className="absolute inset-0"></div>
    </div>
  );
};

export default HomeVideos;
