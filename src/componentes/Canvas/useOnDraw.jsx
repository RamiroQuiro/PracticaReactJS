import { useRef, useEffect } from "react";

export const useOnDraw = (onDraw) => {
  const canvasRef = useRef(null);
  const isDrawingRef = useRef(false);
  const prevPointRef = useRef(null);
  const mouseDownListenerRef=useRef(null)
  const mouseMoveListenerRef = useRef(null);
  const mouseUpListenerRef = useRef(null);

  const setCanvasRef = (ref) => {
    canvasRef.current = ref;
  };
  function onCanvasMouseDown() {
    isDrawingRef.current = true;
  }

  useEffect(() => {
    // delimitador de canvas

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
    function initMouseMoveListener() {

      const mouseMoveListener = (e) => {
        if (isDrawingRef.current && canvasRef.current) {
          const point = computePointInCanvas(e.clientX, e.clientY);
          const ctx = canvasRef.current.getContext("2d");
          if (onDraw) onDraw(ctx, point, prevPointRef.current);
          prevPointRef.current = point;
        }
      };
      mouseMoveListenerRef.current = mouseMoveListener;
      window.addEventListener("mousemove", mouseMoveListener);
    }

    function startDownMousse(e){

      const listener=()=>{
        mouseDownListenerRef.current=listener
      }
      mouseUpListenerRef.current = listener;
      window.addEventListener("mousedown", listener);
        console.log({x:e.clientX,
        y:e.clientY})
    }

    function initMouseUpListener() {
      const listener = () => {
        isDrawingRef.current = false;
        prevPointRef.current = null;
      };
      mouseUpListenerRef.current = listener;
      window.addEventListener("mouseup", listener);
    }
    const removeListener = () => {
      if (mouseMoveListenerRef.current) {
        window.removeEventListener("mousemove", mouseMoveListenerRef.current);
      }
      if (mouseUpListenerRef.current) {
        window.removeEventListener("mouseup", mouseUpListenerRef.current);
      }
    };
    startDownMousse()
    initMouseMoveListener();
    initMouseUpListener();

    return () => {
      removeListener();
    };
  }, [onDraw]);

  return {
    setCanvasRef,
    onCanvasMouseDown,
  };
};
