import React from "react";
import { useAppContext } from "../../context/Context";
import './styles.css'

export default function History() {
  const calculadora = useAppContext();

  return (
    <div className="duration-500 font-mono text-right py-5 px-5 w-2/5  overflow-y-auto containerHistory ">
      {calculadora.history?.map((item, index) => {
        return (
          <div key={index} className=" py-3">
            <span className="text-gray-300 tracking-wide">
              {item.memoria} =
            </span>
            <p className="text-xl">{item.resultadoHistory}</p>
          </div>
        );
      })}

      {calculadora.history?.length === 0 ? (
        <div className="text-center py-5">
          <h1 className="text-sm ">No hay historial</h1>
        </div>
      ) : (
        <button
          onClick={calculadora.handleBorrarMemoria}
          className={"rounded mt-5 px-2 scale-150 hover:bg-gray-300/20"}
        >
          🗑
        </button>
      )}
    </div>
  );
}
