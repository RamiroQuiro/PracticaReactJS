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
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const canvas = canvasRef.current;
  const ctx = canvas?.getContext("2d");

  useEffect(() => {

if(!canvas)return



  }, []);

  //funciones
  function draw(e) {
    if (!isDrawing) return;
    const point = computePointInCanvas(e.clientX, e.clientY);
    line(ctx,setupCanvas,point)
  }

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


  function startDarwing(e) {
    setIsDrawing(true);
    ctx.beginPath()
    ctx.lineWidth = setupCanvas.rangeTrazo;
  }


const line=(ctx,setupCanvas,point)=>{
  ctx.style = setupCanvas.color;
    ctx.strokeStyle = setupCanvas.color;
    ctx.moveTo(point.x, point.y);
    ctx.lineTo(point.x, point.y);
    ctx.stroke();

    ctx.fillStyle = setupCanvas.color;
    ctx.arc(point.x, point.y, setupCanvas.rangeTrazo, 0, 2 * Math.PI);
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
