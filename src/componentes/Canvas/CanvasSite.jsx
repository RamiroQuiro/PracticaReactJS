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
  const [setupCanvas, setSetupCanvas] = useState({lienzo:"#ffffff"});
  const [imagenesTools,setImagenesTools]=useState({})
  const [activeOption, setActiveOption] = useState(false);
  const [selectTools, setSelectTools] = useState(false);
  const [previewURL, setPreviewURL] = useState(false);
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

    console.log(previewURL)
  }, [file]);

  useEffect(() => {
    if (!img) {
      return;
    }
    img.src = previewURL;
  }, [previewURL, imagenesTools,img]);

  const handleCargarenCanvasImagen = () => {
    setFile(false);
    setPreviewURL(false);
    setSetupCanvas(false)
  };

  const handleChange = (e) => {
    setSetupCanvas({ ...setupCanvas, [e.target.name]: e.target.value });
    
  };
  const handleToolsImagenes = (e) => {
    setImagenesTools({ ...setupCanvas, [e.target.name]: e.target.value });
    
  };
  const handleButton=(name)=>{
    setSetupCanvas({ ...setupCanvas, [name]:true });
    
}
  const handleCheck = (e) => {
    setSetupCanvas({ ...setupCanvas, [e.target.name]: e.target.checked });
  };

  const downloadImage = () => {};
  const shapesSelect = (descripcion,indice,setSelect,select) => {
    setActiveOption(!activeOption);
    setSelectTools(descripcion,indice);
    if(shapes[indice]?.descripcion===descripcion){
      setSelect(true)
      
    }
  };
  
  const ItemsMenu = ({ imagen, descripcion,indice }) => {
    const [select, setSelect] = useState(false)
    
    useEffect(()=>{
        setSelect(false)

    },[select])
    return (
      <label
      htmlFor="selectTools"
        onClick={() => shapesSelect(descripcion,indice,setSelect,select)}
        className={`${select&& "bg-gray-500"}  w-full inline-block cursor-pointer group hover:bg-gray-500/50 hover:backdrop-blur-sm p-1 rounded-lg`}
      >
        <input type="radio" name="selectTools" id="" className="hidden " />
        <img
          src={imagen}
          alt="cuadrado"
          className="w-4   mx-2 inline-block  "
        />
        {descripcion}
      </label>
    );
  };

  const handleInputFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleReset = (name) => {
    setSetupCanvas({ ...setupCanvas, [name]: false });
    setPreviewURL(false)
    setFile(false)
  };
  return (
    <div className="w-full min-h-screen bg-gradient-to-br py-20 from-sky-900/90 to-blue-500 flex items-center justify-around">
      <div className="flex gap- items-stretch justify-center">
        <div className="mx-auto h-5/6 flex flex-col bg-white w-2/12 rounded-lg overflow-hidden p-5 shadow-lg text-gray-700">
          <div className="mx-auto flex flex-col gap-3 mb-10 w-full font-medium">
            <div className="w-full inline-block cursor-pointer -mt-2">
              <h2 className="font-bold">Formas</h2>
              {shapes?.slice(0, 3).map((element, i) => (
                <ItemsMenu
                  imagen={element.imagen}
                  descripcion={element.descripcion}
                  key={i}
                  indice={i}
                />
              ))}
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
              onClick={() => shapesSelect("limpiarLienzo")}
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
          selectTools={selectTools}
          className={"border-2 rounded mx-auto bg-white"}
          setupCanvas={setupCanvas}
          height={550}
          width={800}
          
        />
    {/* <div className="mx-auto h-5/6 flex flex-col bg-white w-2/12 rounded-lg overflow-hidden p-5 shadow-lg text-gray-700">
          <div className="mx-auto flex flex-col gap-3 mb-10 w-full font-medium">
            <div className="w-full inline-block cursor-pointer -mt-2">
              {previewURL && (
                <img
                  src={previewURL}
                  alt="file"
                  id="previewURL"
                  ref={imageRef}
                />
              )}
              <label
                htmlFor="imageCanvas"
                className=" w-full p-2 flex text-center cursor-pointer items-center justify-center border-2 rounded-lg font-bold hover:bg-gray-200 mt-4 text-sm"
              >
                {!previewURL ? "Cargar Imagen" : "Colocar Imagen en el Lienzo"}
                {!previewURL ? (
                  <input
                    type="file"
                    name="imageCanvas"
                    id="imageCanvas"
                    className="hidden"
                    onChange={handleInputFile}
                  />
                ) : (
                  <button
                    name="imageCanvas"
                    id="imageCanvas"
                    className=""
                    onClick={handleCargarenCanvasImagen}
                  ></button>
                )}
              </label>
              <div className="w-full inline-block cursor-pointer ">
                <h2 className="font-bold w-full text-sm mt-4 text-center  border-t-2">
                  Manipulacion de Canales
                </h2>
                <div className="flex flex-col w-full items-center justify-around">
                  <div className="text-red-500 my-1 text-sm">
                    Canal Rojo
                    <input
                      type="range"
                      onChange={handleToolsImagenes}
                      name="matrizRojo"
                      value={imagenesTools?.matrizRojo}
                      className=""
                      min="1"
                      max="255"
                    />{" "}
                     <button
                      className="w-full text-sm font-mono text-center -translate-y-2"
                      onClick={() => handleReset("matrizRojo")}
                    >
                      Resetear Canal
                    </button> 
                  </div>
                  <div className="text-green-500 my-1 text-sm">
                    Canal Verde
                    <input
                      type="range"
                      onChange={handleToolsImagenes}
                      name="matrizVerde"
                      value={imagenesTools?.matrizVerde}
                      min="1"
                      max="255"
                    />
                     <button
                      className="w-full text-sm font-mono text-center -translate-y-2"
                      onClick={() => handleReset("matrizVerde")}
                    >
                      Resetear Canal
                    </button> 
                  </div>
                  <div htmlFor="matrizAzul" className="text-blue-500 my-1 text-sm">
                    Canal Azul
                    <input
                      type="range"
                      onChange={handleToolsImagenes}
                      name="matrizAzul"
                      value={imagenesTools?.matrizAzul}
                      min="1"
                      max="255"
                    />
                    
                  </div>
                  
                    <label htmlFor="matrizAzul" className="text-gray-500 my-1 text-sm">
                    Saturacion
                    <input
                      type="range"
                      onChange={handleToolsImagenes}
                      name="saturacion"
                      value={imagenesTools?.saturacion}
                      min="1"
                      max="15"
                    />
                  
                  </label>
                </div>
              </div>
              <div className="w-full inline-block cursor-pointer ">
                <h2 className="font-bold w-full text-sm mt-4 text-center  border-t-2">
                 Filtros
                </h2>
                <div className="flex flex-col w-full items-center justify-around">
                    
                    <button
                      onClick={handleChange}
                      name="filtro"
                      className=""
                     value={"blancoAndNegro"}
                    >Blanco  y Negro</button>
                  
                
                </div>
              </div>
            </div>
          </div>
        </div>/*}
        {/* <Canvas
        selectTools={selectTools}
          className={"border-2 rounded mx-auto bg-white "}
          setupCanvas={setupCanvas}
          height={550}
          width={800}
        /> */}
      </div>
    </div>
  );
}
