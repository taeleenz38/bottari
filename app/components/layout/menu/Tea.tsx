import React from "react";
import Image from "next/image";

const Tea = () => {
  return (
    <div className="w-1/5 flex flex-col gap-6 text-lg p-18">
      <h1 className="text-2xl font-medium">Tea</h1>
      <div className="flex flex-col">
        <p>
          <span className="font-medium">Jasmine Cloud</span> 7.5
        </p>
        <p className="text-sm">Jasmine green tea with velvety cream on top</p>
      </div>
      <div className="flex flex-col">
        <p>
          <span className="font-medium">AGC (apple ginger cinnamon) tea</span> 6
        </p>
        <p className="text-sm">earl grey iced peach tea with espresso shot added</p>
      </div>
      <div className="flex gap-4">
        <Image src="/images/magpie.png" alt="magpie" width={80} height={80} />
        <div className="flex flex-col">
          <p className="font-medium">맥파 앤 타이거 x Bottari</p>
          <p className="text-sm">Korean single origin tea brand</p>
          <p className="text-sm">Tea from East Asia</p>
        </div>
      </div>
      <div className="flex flex-col">
        <p>
          <span className="font-medium">감잎차 persimmon leaf tea</span> 5.5
        </p>
        <p className="text-sm">Roasted corn, Umami, Clean</p>
        <p className="text-sm">caffeine-free</p>
      </div>
      <div className="flex flex-col">
        <p>
          <span className="font-medium">쑥차 mugwort tea</span> 5.5
        </p>
        <p className="text-sm">Seaweed, Milk chocolate</p>
        <p className="text-sm">caffeine-free</p>
      </div>
      <div className="flex flex-col">
        <p>
          <span className="font-medium">호지차 hojicha (roasted green tea)</span> 5.5
        </p>
        <p className="text-sm">Nutty chocolatey aroma</p>
        <p className="text-sm">low caffeine</p>
      </div>
      <div className="flex flex-col text-right mt-4">
        <p>
          <span className="font-medium">Earl grey iced peach tea</span> 7
        </p>
        <p>
          <span className="font-medium">Yuja early grey tea</span> 6.5
        </p>
        <p>
          <span className="font-medium">Yuja mint tea</span> 6.5
        </p>
        <p>
          <span className="font-medium">Earl grey tea</span> 5
        </p>
        <p>
          <span className="font-medium">peppermint tea</span> 5
        </p>
      </div>
      <div className="flex flex-col text-left mt-4 text-sm">
        <p>EXTRA SHOT + 0.5</p>
        <p>ALTERNATIVE MILK + 0.8</p>
        <p>ICE + 0.5</p>
      </div>
    </div>
  );
};

export default Tea;
