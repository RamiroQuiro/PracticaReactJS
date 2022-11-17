import React, { useState } from "react";
import Canvas from "../componentes/Canvas";
export default function PaintDraw() {
  const [setupCanvas, setSetupCanvas] = useState({});

  const handleChange = (e) => {
    setSetupCanvas({ ...setupCanvas, [e.target.name]: e.target.value });
  };


const downloadImage=()=>{
  
}


  return (
    <div className="w-full bg-slate-900">
      <div className="mx-auto py-20">
        <input
          onChange={handleChange}
          type="color"
          name="colorTrazo"
          id="colorTrazo  "
        />
        <input
          onChange={handleChange}
          type="range"
          name="rangeTrazo"
          id="rangeTrazo"
        />
        <Canvas
        className={"border-2 rounded-lg mx-auto"}
          setupCanvas={setupCanvas}
          height={500}
          width={700}
        />
        <button onClick={downloadImage}>descargar imagen</button>
      </div>
    </div>
  );
}
