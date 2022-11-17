import React, { useState } from "react";
import Canvas from "./Canvas";
export default function Lienzo() {
  const [setupCanvas, setSetupCanvas] = useState({});

  const handleChange = (e) => {
    setSetupCanvas({ ...setupCanvas, [e.target.name]: e.target.value });
  };

  const downloadImage = () => {};

  return (
    <div className="w-full bg-gradient-to-br py-16 from-sky-900/90 to-blue-500 flex items-center justify-around">
      <div className="flex gap-5 items-stretch justify-around">
        <div className="mx-auto h-screen flex flex-col bg-white w-3/12 rounded-lg overflow-hidden p-2">
          <div>
            <h2>Formas</h2>
          <label htmlFor="cuadrado">cuadrado
          
          </label>
          <label htmlFor="circle">circulo
          
          </label>
          <label htmlFor="triangle">triangulo
          
          </label>
          <label htmlFor="fillColor">Relleno Formas
          <input type="checkbox" name="fillColor" id="fillColor" />
          </label>
          </div>
          <div>
            <h2>Opciones</h2>
            <span>pincel</span>
            <span>Borrar</span>
          </div>
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

          <button onClick={downloadImage}>descargar imagen</button>
        </div>
        <Canvas
          className={"border-2 rounded-lg mx-auto bg-white "}
          setupCanvas={setupCanvas}
          height={650}
          width={800}
        />
      </div>
    </div>
  );
}
