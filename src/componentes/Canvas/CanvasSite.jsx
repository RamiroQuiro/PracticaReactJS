import React, { useState,useEffect } from "react";
import Canvas from "./Canvas";
import cuadrado from "../../img/svg/square.svg";
import circulo from "../../img/svg/circle.svg";
import triangle from "../../img/svg/triangule.svg";
import brush from "../../img/svg/brush.svg";
import erase from "../../img/svg/erase.svg";
export default function Lienzo() {
  const [setupCanvas, setSetupCanvas] = useState({});
const [activeOption, setActiveOption] = useState(false)
const [selectTools,setSelectTools]=useState(false)
  const shapes = [
    {id:1,
      imagen: cuadrado,
      descripcion: "Cuadrado",
    },
    {id:2,
      imagen: circulo,
      descripcion: "Circulo",
    },
    {id:3,
      imagen: triangle,
      descripcion: "Triangulo",
    },
    {id:4,
      imagen: brush,
      descripcion: "Pincel",
    },
    {id:5,
      imagen: erase,
      descripcion: "Borrador",
    },

  ];

  const handleChange = (e) => {
    setSetupCanvas({ ...setupCanvas, [e.target.name]: e.target.value });
  };

  const drawRect=()=>{

  }
  const clearCanvas = () => {};
  const downloadImage = () => {};
  const shapesSelect = (i) => {
    setActiveOption(!activeOption)
    setSelectTools(i)
  };



  const ItemsMenu = ({ imagen, descripcion }) => {
    return (
      <div 
      onClick={()=>shapesSelect(descripcion)}
      
      className={`  w-full inline-block cursor-pointer  hover:bg-gray-500/50 hover:backdrop-blur-sm p-1 rounded-lg`}>
        <img
          src={imagen}
          alt="cuadrado"
          className="w-4   mx-2 inline-block fill-gray-800 "
        />
        {descripcion}
      </div>
    );
  };

  return (
    <div className="w-full bg-gradient-to-br py-20 from-sky-900/90 to-blue-500 flex items-center justify-around">
      <div className="flex gap- items-stretch justify-center">
        <div className="mx-auto h-5/6 flex flex-col bg-white w-2/12 rounded-lg overflow-hidden p-7 shadow-lg text-gray-700">
          <div className="mx-auto flex flex-col gap-2 mb-10 w-full font-medium">
            <div className="w-full inline-block cursor-pointer -mt-2">
              <h2 className="font-bold">Formas</h2>
              {shapes?.slice(0,3).map((element, i) => (
                <ItemsMenu
                  imagen={element.imagen}
                  descripcion={element.descripcion}
                  key={i}
                  />
                
              ))}
              <label
                htmlFor="fillColor"
                className="w-full inline-block  p-2 font-medium cursor-pointer"
              >
                <input
                  type="checkbox"
                  name="fillColor"
                  id="fillColor"
                  className="  mx-2 inline-block fill-gray-800 checked:bg-fuchsia-500 text-sm"
                />
                Relleno Formas
              </label>
            </div>
            <div className="w-full inline-block cursor-pointer -mt-2">
              <h2 className="font-bold">Opciones</h2>
             {

              shapes?.slice(3,6).map((element, i) => (
                <ItemsMenu
                  imagen={element.imagen}
                  descripcion={element.descripcion}
                  key={i}/>
              ))
             }
                <input
              onChange={handleChange}
              type="range"
              name="rangeTrazo"
              id="rangeTrazo"
              className="w-full inline-block cursor-pointer  hover:bg-gray-500/50 hover:backdrop-blur-sm p-1 rounded-lg"
            />
            </div>
            <div className="w-full inline-block cursor-pointer -mt-2">
            <h2 className="font-bold">Colores</h2>
            <ul className="options flex w-full items-center justify-around">
              <input
              type={"radio"}
              onClick={handleChange}
               name="color"
               value={"#fff"}
              className="w-5 h-5 bg-gray-200 shadow-sm rounded-full mt-2 relative before:content-[' '] before:w-[80%] before:h-[80%] before:left-0.5 before:top-0.5 before:absolute before:rounded-full before:border-2 hover:before:border-gray-400"/>

              <label
                className="w-5 h-5  bg-gray-900 shadow-sm rounded-full mt-2 relative before:content-[' '] before:w-[80%] before:h-[80%] before:left-0.5 before:top-0.5 before:absolute before:rounded-full hover:before:border-2"
              
              >

              <input
              type={"radio"}
              onClick={handleChange}
               name="color"
               value={"#111"}
               className="invisible"
               />
              </label>
              <label
                className="w-5 h-5  bg-blue-500 shadow-sm rounded-full mt-2 relative before:content-[' '] before:w-[80%] before:h-[80%] before:left-0.5 before:top-0.5 before:absolute before:rounded-full hover:before:border-2"
              
              >

              <input
              type={"radio"}
              onClick={handleChange}
               name="color"
               value={"#3B82F6"}
               className="invisible"
               />
              </label>
              <label
                className="w-5 h-5  bg-green-600 shadow-sm rounded-full mt-2 relative before:content-[' '] before:w-[80%] before:h-[80%] before:left-0.5 before:top-0.5 before:absolute before:rounded-full hover:before:border-2"
              
              >

              <input
              type={"radio"}
              onClick={handleChange}
               name="color"
               value={"#16A34A"}
               className="invisible"
               />
              </label>
              <label
                className="w-5 h-5  bg-red-500 shadow-sm rounded-full mt-2 relative before:content-[' '] before:w-[80%] before:h-[80%] before:left-0.5 before:top-0.5  before:absolute before:rounded-full hover:before:border-2"
              
              >

              <input
              type={"radio"}
              onClick={handleChange}
               name="color"
               value={"#EF4444"}
               className="invisible"
               />
              </label>
            </ul>
         
</div>
            <button onClick={downloadImage} className=" w-full py-2 border-2 rounded-lg font-bold hover:bg-gray-200 mt-4 text-sm">Limpiar Lienzo</button>
            <button onClick={downloadImage} className=" w-full py-2 border-2 rounded-lg bg-blue-400 font-bold hover:bg-blue-500 text-white text-sm">Descargar Imagen</button>
          </div>
        </div>
        <Canvas
        selectTools={selectTools}
          className={"border-2 rounded mx-auto bg-white "}
          setupCanvas={setupCanvas}
          height={550}
          width={800}
        />
      </div>
    </div>
  );
}
