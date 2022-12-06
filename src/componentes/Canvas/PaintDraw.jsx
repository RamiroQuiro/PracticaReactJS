import { useRef } from "react";
import { useEffect, useState } from "react";

export default function PaintDraw({
  width,
  height,
  className,
  setupCanvas,
  selectTools,
}) {
  const [isDrawing, setIsDrawing] = useState(false);
  const [prevPoint, setPrevPoint] = useState(null);
  const [snapshot, setSnapshot] = useState(false);
  const canvasRef = useRef(null);
  const canvas = canvasRef.current;
  const ctx = canvas?.getContext("2d");

  useEffect(() => {
    if (!canvas) return;
  }, [setupCanvas]);

  //funciones
  function draw(e) {
    if (!isDrawing) return;
    const point = computePointInCanvas(e.clientX, e.clientY);
    ctx.putImageData(snapshot, 0, 0);
    if (selectTools === "Pincel") {
      line(ctx, setupCanvas, point, prevPoint);
    } else if (selectTools === "Cuadrado") {
      cuadrado(ctx, setupCanvas, point, prevPoint);
    }else if (selectTools==='Circulo') {
      circulo(ctx,setupCanvas,point,prevPoint)
    }
  }
  // funcion para marcar las coordenadas dentro del lienzo
  const computePointInCanvas = (clientX, clientY) => {
    if (canvasRef.current) {
      const boundigRect = canvasRef.current.getBoundingClientRect();

      return {
        x: clientX - boundigRect.left,
        y: clientY - boundigRect.top,
      };
    } else {
    }
  };
  // funcion al clikear el mouse

  function startDarwing(e) {
    setIsDrawing(true);
    const prevPointer = computePointInCanvas(e.clientX, e.clientY);
    setPrevPoint(prevPointer);
    ctx.beginPath();
    ctx.lineWidth = setupCanvas.rangeTrazo;
    const snap = ctx.getImageData(0, 0, width, height);
    setSnapshot(snap);
  }

  // funciones de herramientas
  //linea
  const line = (ctx, setupCanvas, point, prevPoint) => {
    ctx.lineWidth = setupCanvas.rangeTrazo ?? 2;
    ctx.strokeStyle = setupCanvas.color;
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
  };
  // cuadrado
  const cuadrado = (ctx, setupCanvas, point, prevPoint) => {
    if (!setupCanvas.fillColor) {
      ctx.style = setupCanvas.color;
      ctx.strokeStyle = setupCanvas.color;
      ctx.strokeRect(
        point.x,
        point.y,
        prevPoint.x - point.x,
        prevPoint.y - point.y
      );
    } else {
      ctx.fillStyle = setupCanvas.color;
      ctx.fillRect(
        point.x,
        point.y,
        prevPoint.x - point.x,
        prevPoint.y - point.y
      );
    }
  };
  // ciruclo

  const circulo=(ctx,setupCanvas,point,prevPoint)=>{
    ctx.beginPath()
    
      const radius= Math.sqrt(Math.pow((prevPoint.x-point.x),2) + Math.pow((prevPoint.y-point.y),2) )
      ctx.arc(prevPoint.x,prevPoint.y, radius,0,2*Math.PI)
      if (!setupCanvas.fillColor) {
        ctx.strokeStyle = setupCanvas.color;
        ctx.stroke()
        }
        ctx.fillStyle = "blue";
ctx.fill();
      
  
  }

  function stopDrawing() {
    setIsDrawing(false);
  }

  return (
    <canvas
      onMouseMove={draw}
      onMouseDown={startDarwing}
      onMouseUp={stopDrawing}
      className={className}
      ref={canvasRef}
      height={height}
      width={width}
    ></canvas>
  );
}
