import React from "react";
import { Link } from "react-router-dom";


export default function Cards({titulo, descripcion, imagen, link,repo}) {
  return (
    <div 
    
    className="relative block group h-96">
      <span className="absolute inset-0 border-2 border-black border-dashed"></span>

      <div className="relative flex items-end h-full transition-transform transform bg-white/80 group-hover:bg-white border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
          <img src={imagen} alt={titulo} className="w-16" width={"20px"} height="20px" />

          <h2 className="mt-4 text-2xl font-medium">{titulo}</h2>
        </div>

        <div className="absolute p-8 top-10  duration-300 opacity-0 group-hover:opacity-100 group-hover:top-0">
          <h2 className="mt-4 text-2xl font-medium">{titulo}</h2>

          <p className="my-4">
           {descripcion}
          </p>

          <Link to={link} className="mt-8 mr-8 font-bold">Ir a la Sección</Link>
          <Link to={repo} target="_blank" className="mt-8 ml-8 font-bold">Ir al Repositorio</Link>
        </div>
      </div>
    </div>
  );
}
