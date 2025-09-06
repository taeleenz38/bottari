import React from "react";

const Food = () => {
  return (
    <div className="w-1/4 flex flex-col gap-6 text-lg p-18">
      <h1 className="text-2xl font-medium">Food</h1>
      <p>
        <span className="font-medium">Chocodamia cookie</span> 6
      </p>
      <p>
        <span className="font-medium">Dark walnuts cookie</span> 5
      </p>
      <p>
        <span className="font-medium">Peanut butter cookie</span> 5
      </p>
      <p>
        <span className="font-medium">Lemon cookie</span> 4
      </p>
      <p>
        <span className="font-medium">Black sesame & Injeolmi crumbles</span>{" "}
        5.5
      </p>
      <div className="flex flex-col">
        <p>
          <span className="font-medium">KWABAEGI</span> 6
        </p>
        <p className="text-sm">twisted doughnut</p>
      </div>
      <p>
        <span className="font-medium">Sausage corndog</span> 8.5
      </p>
      <div className="flex flex-col">
        <p>
          <span className="font-medium">Round donut</span> 6
        </p>
        <p className="text-sm">red bean / black sesame / sweet potato / chestnut</p>
      </div>
      <p>
        <span className="font-medium">Carrot cake</span> 8.5
      </p>
      <p>
        <span className="font-medium">Apple caramel tea cake</span> 6
      </p>
    </div>
  );
};

export default Food;
