import React from "react";
import { useAppContext } from "../../context/Context";

export default function ScreenCalculator() {

    const calculator=useAppContext()
   
  return (
    <div className="flex flex-col  font-mono w-full  rounded-lg p-2 my- ">
      
      <div className="text font-medium h-6 text-right">{calculator.memory}</div>
      <div className="text-3xl text-right">{calculator.currentValue}</div>
    </div>
  );
}
