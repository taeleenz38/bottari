import React from "react";

const Coffee = () => {
  return (
    <div className="w-1/5 flex flex-col gap-6 text-lg p-18">
      <h1 className="text-2xl font-medium">Coffee</h1>
      <div className="flex flex-col">
        <p className="font-medium">BLACK</p>
        <p>
          <span className="font-medium">AH AH (Iced Americano)</span> 7
        </p>
        <p className="text-sm">more ice & water</p>
      </div>
      <div className="flex flex-col">
        <p>Long black 4.5 / 5.5</p>
        <p>Batch brew 5 / 5.5</p>
      </div>
      <div className="flex flex-col">
        <p>
          <span className="font-medium">WHITE</span> 4.5 / 5.5
        </p>
        <p>Flat white</p>
        <p>Latte</p>
        <p>Cap</p>
        <p>Mocha</p>
      </div>
      <p>
        <span className="font-medium">AH VA LA</span> (Iced Vanilla Latte) 6.5
      </p>
      <div className="flex flex-col">
        <p>Vanilla Chai 5 / 6</p>
        <p>Choc 5 / 6</p>
      </div>
      <div className="flex flex-col text-left mt-4 text-sm">
        <p>EXTRA SHOT + 0.5</p>
        <p>ALTERNATIVE MILK + 0.8</p>
        <p>ICE + 0.5</p>
        <p>SYRUP (Hazelnut / Caramel / Vanilla) + 0.5</p>
      </div>
    </div>
  );
};

export default Coffee;
