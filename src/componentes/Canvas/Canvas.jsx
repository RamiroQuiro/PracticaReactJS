import React from "react";
import { useState, useRef, useEffect } from "react";
import { useOnDraw } from "./useOnDraw";

export default function Canvas({
  width,
  height,
  className,
  setupCanvas,
  selectTools,
}) {
  const [downMousse, setDownMousse] = useState(false);
  const puntoDePartida=(e)=>{
    setDownMousse({...downMousse,x:e.clientX,y:e.clientY})
  }

  const { onCanvasMouseDown, setCanvasRef } = useOnDraw(onDraw);
console.log(onCanvasMouseDown)
  function dibujarLinea(start, end, ctx, color, width) {
    start = start ?? end;
    ctx.beginPath();
    ctx.style = color;
    ctx.lineWidth = width || 10;
    ctx.strokeStyle = color;
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(start.x, start.y, width, 0, 2 * Math.PI);
    ctx.fill();
  }
  const dibujarCuadrado = (prevPoint, point, ctx, color, width) => {
    ctx.strokeStyle = color;
    ctx.strokeRect(point.x, point.y, downMousse.x-point.x, downMousse.y-point.y);
  };


  const dibujarLine = (ctx, point) => {
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
  };

  function onDraw(ctx, point, prevPoint) {
    if (!selectTools) return;
    switch (selectTools) {
      case "Cuadrado":
        dibujarCuadrado(
          prevPoint,
          point,
          ctx,
          setupCanvas?.color,
          setupCanvas?.rangeTrazo
        );
        break;
      case "Circulo":
        console.log("este es un Circulo");
        break;
      case "Triangulo":
        console.log("este es un Triangulo");
        break;
      case "Pincel":
        dibujarLinea(
          prevPoint,
          point,
          ctx,
          setupCanvas?.color,
          setupCanvas?.rangeTrazo
        );
        break;
      case "Borrador":
        console.log("este es un Borrador");
        break;
      case "Linea":
        dibujarLine(ctx, point, width);
        break;

      default:
        break;
    }
  }

  // useEffect(()=>{

  //   if(!selectTools)return

  //   switch (selectTools) {
  //   case 'Cuadrado':
  //       console.log('este es un cuadrado')

  //       break;
  //   case 'Circulo':
  //       console.log('este es un Circulo')
  //       break;
  //   case 'Triangulo':
  //       console.log('este es un Triangulo')
  //       break;
  //   case 'Pincel':
  //       console.log('este es un Pincel')
  //       break;
  //   case 'Borrador':
  //       console.log('este es un Borrador')
  //       break;

  //     default:
  //       break;
  //   }

  // },[selectTools])

  return (
    <canvas
      onMouseDown={onCanvasMouseDown}
      ref={setCanvasRef}
      className={className}
      width={width}
      height={height}
    />
  );
}
