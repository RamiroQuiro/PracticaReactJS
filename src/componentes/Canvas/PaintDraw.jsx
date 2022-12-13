import { useRef } from "react";
import { useEffect, useState } from "react";

export default function PaintDraw({
  width,
  height,
  className,
  setupCanvas,
  img,
  selectTools,
  clearCanvas,toolsImage
}) {
  const [isDrawing, setIsDrawing] = useState(false);
  const [prevPoint, setPrevPoint] = useState(null);
  const [snapshot, setSnapshot] = useState(false);
  const canvasRef = useRef(null);
  const canvas = canvasRef.current;
  const ctx = canvas?.getContext("2d");

  useEffect(() => {
    if (!canvas) return;
  }, []);

  //funciones
  function draw(e) {
    if (!isDrawing) return;
    const point = computePointInCanvas(e.clientX, e.clientY);
    ctx.putImageData(snapshot, 0, 0);
    if (selectTools === "Pincel") {
      line(ctx, setupCanvas, point, prevPoint);
    } else if (selectTools === "Cuadrado") {
      cuadrado(ctx, setupCanvas, point, prevPoint);
    } else if (selectTools === "Circulo") {
      circulo(ctx, setupCanvas, point, prevPoint);
    } else if (selectTools === "Triangulo") {
      triangulo(ctx, setupCanvas, point, prevPoint);
    } else if (selectTools === "Borrador") {
      borrador(ctx, setupCanvas, point, prevPoint);
    } else if (selectTools === "limpiarLienzo") {
      limpiarLienzo(ctx, width, height);
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

  const circulo = (ctx, setupCanvas, point, prevPoint) => {
    ctx.beginPath();

    const radius = Math.sqrt(
      Math.pow(prevPoint.x - point.x, 2) + Math.pow(prevPoint.y - point.y, 2)
    );
    ctx.arc(prevPoint.x, prevPoint.y, radius, 0, 2 * Math.PI);
    if (!setupCanvas.fillColor) {
      ctx.strokeStyle = setupCanvas.color;
      ctx.stroke();
    } else {
      ctx.fillStyle = setupCanvas.color;
      ctx.fill();
    }
  };

  //triangulo

  const triangulo = (ctx, setupCanvas, point, prevPoint) => {
    ctx.beginPath();
    ctx.moveTo(prevPoint.x, prevPoint.y);
    ctx.lineTo(point.x, point.y);
    ctx.lineTo(prevPoint.x * 2 - point.x, point.y);
    ctx.closePath();
    if (!setupCanvas.fillColor) {
      ctx.strokeStyle = setupCanvas.color;
      ctx.stroke();
    } else {
      ctx.fillStyle = setupCanvas.color;
      ctx.fill();
    }
  };

  // borrador

  const borrador = (ctx, setupCanvas, point, prevPoint) => {
    ctx.fillStyle = "#505050";

    ctx.fill();
    ctx.stroke();
    ctx.clearRect(0, 0, width, height);
  };
  function stopDrawing() {
    setIsDrawing(false);
  }

  // limpiar lienzo

  const limpiarLienzo = () => {
    ctx.clearRect(0, 0, width, height);
  };

  // cargar Imagen

  const cargarIMG = (ctx, img, width, height,setupCanvas) => {
    ctx.drawImage(img, 0, 0);


  };

  const matrizRojo=(ctx, img, width, height,setupCanvas)=>{

   

      ctx.drawImage(img, 0, 0);
      
      const imageData = ctx.getImageData(0, 0, img.width, img.height);
      const { data } = imageData;
      
      for (let i = 0; i < data.length-1; i+=4) {
        data[i+1]=255
        
      }
      ctx.putImageData(imageData,0,0)

  }
  useEffect(() => {
    if (!img) {
      return;
    }
    cargarIMG(ctx, img, width, height,setupCanvas);
    
toolsImage&&
console.log(toolsImage)
matrizRojo(ctx, img, width, height,setupCanvas)
  }, [ctx, height, img, width,setupCanvas]);

  // herramienta de imagenes



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
