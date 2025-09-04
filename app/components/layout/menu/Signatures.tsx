import React from "react";

const Signatures = () => {
  return (
    <div className="w-1/5 flex flex-col gap-6 text-lg p-18">
      <h1 className="text-2xl font-medium">Signatures</h1>
      <div className="flex flex-col">
        <p>
          <span className="font-medium">FERRERO LATTE</span> 8.5
        </p>
        <p className="text-sm">ferrero rocher inspired</p>
        <p className="text-sm">*add espresso shot + 0.5</p>
      </div>
      <div className="flex flex-col">
        <p>
          <span className="font-medium">AH-SHOT-CHU</span> 7.5
        </p>
        <p className="text-sm">earl grey iced peach tea with espresso shot added</p>
      </div>
      <div className="flex flex-col">
        <p>
          <span className="font-medium">DONUT LATTE</span> 7.5
        </p>
        <p className="text-sm">foamy and creamy</p>
        <p className="pl-4 text-sm">Chai cinnamon</p>
        <p className="pl-4 text-sm">Hot chocolate</p>
        <p className="pl-4 text-sm">Matcha</p>
      </div>
      <div className="flex flex-col">
        <p>
          <span className="font-medium">MISUGARU LATTE</span> 6.5
        </p>
        <p className="text-sm">roasted multi-grain powder with milk</p>
      </div>
      <div className="flex flex-col text-right mt-4">
        <p>
          <span className="font-medium">Strawberry matcha</span> 9
        </p>
        <p>
          <span className="font-medium">Mango matcha</span> 9
        </p>
        <p>
          <span className="font-medium">Matcha latte</span> 7 / 7.5
        </p>
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

export default Signatures;
