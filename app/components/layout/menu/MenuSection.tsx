import React from "react";
import Coffee from "./Coffee";
import Signatures from "./Signatures";
import Tea from "./Tea";
import Food from "./Food";

const MenuSection = () => {
  return (
    <div className="bg-[var(--primary)] w-full h-dvh flex justify-center pt-28">
      <Coffee />
      <Signatures />
      <Tea />
      <Food />
    </div>
  );
};

export default MenuSection;
