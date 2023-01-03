import React, { useState, useEffect } from "react";
import cuadrado from "../../img/svg/square.svg";
import circulo from "../../img/svg/circle.svg";
import triangle from "../../img/svg/triangule.svg";
import brush from "../../img/svg/brush.svg";
import erase from "../../img/svg/erase.svg";
import paint from "../../img/svg/paint.svg";
import PaintDraw from "./PaintDraw";
import { useRef } from "react";
export default function Lienzo() {
  const [setupCanvas, setSetupCanvas] = useState({ lienzo: "#ffffff" });
  const [imagenesTools, setImagenesTools] = useState({});
  const [activeOption, setActiveOption] = useState(false);
  const [selectTools, setSelectTools] = useState(false);
  const [previewURL, setPreviewURL] = useState(false);
  const canvasRef = useRef(null);
  const canvas = canvasRef.current;
  const ctx = canvas?.getContext("2d");
  const imageRef = useRef(null);
  const img = imageRef.current;
  const [file, setFile] = useState(false);
  const shapes = [
    { id: 1, imagen: cuadrado, descripcion: "Cuadrado" },
    { id: 2, imagen: circulo, descripcion: "Circulo" },
    { id: 3, imagen: triangle, descripcion: "Triangulo" },
    { id: 4, imagen: brush, descripcion: "Pincel" },
    { id: 4, imagen: paint, descripcion: "Pintar Lienzo" },
    { id: 5, imagen: erase, descripcion: "Borrador" },
  ];

  useEffect(() => {
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewURL(reader.result);
    };

    reader.readAsDataURL(file);

    console.log(previewURL);
  }, [file]);

  useEffect(() => {
    if (!img) {
      return;
    }
    img.src = previewURL;
  }, [previewURL, imagenesTools, img]);

  const handleCargarenCanvasImagen = () => {
    setFile(false);
    setPreviewURL(false);
    setSetupCanvas(false);
  };

  const handleChange = (e) => {
    setSetupCanvas({ ...setupCanvas, [e.target.name]: e.target.value });
  };
  const handleToolsImagenes = (e) => {
    setImagenesTools({ ...setupCanvas, [e.target.name]: e.target.value });
  };
  const handleButton = (name) => {
    setSetupCanvas({ ...setupCanvas, [name]: true });
  };
  const handleCheck = (e) => {
    setSetupCanvas({ ...setupCanvas, [e.target.name]: e.target.checked });
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.download = "CanvasSite.jpg";
    link.href = canvas.toDataURL();
    link.click();
  };
  const shapesSelect = (descripcion) => {
    setActiveOption(!activeOption);
    setSelectTools(descripcion);
  };

  const limpiarLienzo = (ctx, width, height) => {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);
  };

  const ItemsMenu = ({ imagen, descripcion, indice }) => {
    return (
      <div
        onClick={() => {
          shapesSelect(descripcion);
        }}
        className={`  w-full inline-block cursor-pointer group hover:bg-gray-500/50 hover:backdrop-blur-sm p-1 rounded-lg`}
      >
        <img
          src={imagen}
          alt="cuadrado"
          className="w-4   mx-2 inline-block  "
        />
        {descripcion}
      </div>
    );
  };

  // const handleInputFile = (e) => {
  //   const file = e.target.files[0];
  //   setFile(file);
  // };

  // const handleReset = (name) => {
  //   setSetupCanvas({ ...setupCanvas, [name]: false });
  //   setPreviewURL(false)
  //   setFile(false)
  // };
  return (
    <div className="w-full min-h-screen bg-gradient-to-br py-20 from-sky-900/90 to-blue-500 flex items-center justify-around">
      <div className="flex gap- items-stretch justify-center">
        <div className="mx-auto h-5/6 flex flex-col bg-white w-2/12 rounded-lg overflow-hidden p-5 shadow-lg text-gray-700">
          <div className="mx-auto flex flex-col gap-3 mb-10 w-full font-medium">
            <div className="w-full inline-block cursor-pointer -mt-2">
              <h2 className="font-bold">Formas</h2>
              <ul>
                {shapes?.slice(0, 3).map((element, i) => (
                  <ItemsMenu
                    imagen={element.imagen}
                    descripcion={element.descripcion}
                    key={i}
                    indice={i}
                  />
                ))}
              </ul>
              <label
                htmlFor="fillColor"
                className="w-full inline-block  p-2 font-medium cursor-pointer"
              >
                <input
                  onChange={handleCheck}
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
              {shapes?.slice(3, 6).map((element, i) => (
                <ItemsMenu
                  imagen={element.imagen}
                  descripcion={element.descripcion}
                  key={i}
                />
              ))}
              <label className="w-full block cursor-pointer  hover:bg-gray-500/20  p-1 border-0 rounded-lg">
                <h2 className="font-bold inline-block">Grosor de trazo</h2>
                <span className="ml-2 font-bold inline-block">
                  {!setupCanvas.rangeTrazo ? 1 : setupCanvas?.rangeTrazo}
                </span>
                <input
                  value={setupCanvas?.rangeTrazo || 1}
                  onChange={handleChange}
                  min="1"
                  type="range"
                  name="rangeTrazo"
                  id="rangeTrazo"
                  className="w-full inline-block cursor-pointer  hover:bg-gray-500/50 hover:backdrop-blur-sm p-1 rounded-lg"
                />
              </label>
            </div>
            <div className="w-full inline-block cursor-pointer -mt-2">
              <h2 className="font-bold">Colores</h2>
              <ul className="options flex w-full items-center justify-around">
                <input
                  type={"color"}
                  onChange={handleChange}
                  name="color"
                  value={setupCanvas.color}
                  className="w-5 h-5 bg-gray-200 shadow-sm rounded-full mt-2 relative before:content-[' '] before:w-[80%] before:h-[80%] before:left-0.5 before:top-0.5 before:absolute before:rounded-full before:border-2 hover:before:border-gray-400"
                />

                <label className="w-5 h-5  bg-gray-900 shadow-sm rounded-full mt-2 relative before:content-[' '] before:w-[80%] before:h-[80%] before:left-0.5 before:top-0.5 before:absolute before:rounded-full hover:before:border-2">
                  <input
                    type={"radio"}
                    onClick={handleChange}
                    name="color"
                    value={"#111"}
                    className="invisible"
                  />
                </label>
                <label className="w-5 h-5  bg-blue-500 shadow-sm rounded-full mt-2 relative before:content-[' '] before:w-[80%] before:h-[80%] before:left-0.5 before:top-0.5 before:absolute before:rounded-full hover:before:border-2">
                  <input
                    type={"radio"}
                    onClick={handleChange}
                    name="color"
                    value={"#3B82F6"}
                    className="invisible"
                  />
                </label>
                <label className="w-5 h-5  bg-green-600 shadow-sm rounded-full mt-2 relative before:content-[' '] before:w-[80%] before:h-[80%] before:left-0.5 before:top-0.5 before:absolute before:rounded-full hover:before:border-2">
                  <input
                    type={"radio"}
                    onClick={handleChange}
                    name="color"
                    value={"#16A34A"}
                    className="invisible"
                  />
                </label>
                <label className="w-5 h-5  bg-red-500 shadow-sm rounded-full mt-2 relative before:content-[' '] before:w-[80%] before:h-[80%] before:left-0.5 before:top-0.5  before:absolute before:rounded-full hover:before:border-2">
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
            <div className="w-full inline-block cursor-pointer -mt-2">
              <h2 className="font-bold">Color del Lienzo</h2>
              <ul className="options flex w-full justify-around">
                <input
                  type={"color"}
                  onChange={handleChange}
                  name="lienzo"
                  value={setupCanvas.lienzo}
                  className="w-5 h-5 bg-gray-200 shadow-sm rounded-full mt-2 relative before:content-[' '] before:w-[80%] before:h-[80%] before:left-0.5 before:top-0.5 before:absolute before:rounded-full before:border-2 hover:before:border-gray-400"
                />
              </ul>
            </div>
            <button
              onClick={() => limpiarLienzo(ctx, 800, 550)}
              className=" w-full py-2 border-2 rounded-lg font-bold hover:bg-gray-200 mt-4 text-sm"
            >
              Limpiar Lienzo
            </button>
            <button
              onClick={downloadImage}
              className=" w-full py-2 border-2 rounded-lg bg-blue-400 font-bold hover:bg-blue-500 text-white text-sm"
            >
              Descargar Imagen
            </button>
          </div>
        </div>

        <PaintDraw
          canvasRef={canvasRef}
          ctx={ctx}
          selectTools={selectTools}
          className={"border-2 rounded mx-auto bg-white block"}
          setupCanvas={setupCanvas}
          height={550}
          width={800}
        />
      </div>
    </div>
  );
}
