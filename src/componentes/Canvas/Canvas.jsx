import React from 'react'
import { useState,useRef } from 'react';
import { useOnDraw } from './useOnDraw'



export default function Canvas({ width, height, className, setupCanvas }) {
  const [mousseEvent, setMousseEvent] = useState(false);

  const { onCanvasMouseDown, setCanvasRef } = useOnDraw(onDraw);

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


  function onDraw(ctx, point, prevPoint) {
    dibujarLinea(
      prevPoint,
      point,
      ctx,
      setupCanvas?.colorTrazo,
      setupCanvas?.rangeTrazo
    );
  }

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