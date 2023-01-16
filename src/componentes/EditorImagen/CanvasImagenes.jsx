import React from "react";
import { useState } from "react";

export default function CanvasImagenes() {
  const [previewURL, setPreviewURL] = useState(null);
  const [file, setFile] = useState(null);
  const handleInputFile = (e) => {
    const file = e.target.file[0];
    setFile(file);
  };

  return (
    <div className="flex w-full h-full relative bg-gradient-to-tr from-neutral-700 to-neutral-800 justify-between items-stretch">
      <section className="w-2/12 h-full  bg-neutral-400 z-30">
        <ul className="flex flex-col w-full h-full">
          <li className="flex py-2 h-10 items-center justify-center cursor-pointer hover:bg-neutral-500 ">
            {" "}
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADgUlEQVR4nO2bb0gTYRzHb1FQRG/qrb29Y7MJaqCQc71IX/Q8jt61mfinmWAo7nKaZjQDm9ZmL4o73wQR9TIwrTuVEfOF4ZuI3tSbkgLfRG8iot1l0hPTNmdst/t/8/Z84ftqg9/3+9k9d8/YM4LAwpKnSGQf6Wfa0iYI5CDKLR/pZ9qoAIu2PXOBKDEZno8KMOM7A5hxosRkeD4KA2DwFUDhJcDiewBl25tg5N9ztJW9ms+Un01kB/jZRKH3WWXZ+QrtE8hdz1G7O88+gSx3AASBHOkXKD87ld/Mys4lxqwUfp9VlpnvPNuqaqtM4X0Ag/cBlE77AJT07hc42CVyYEnk4WeBh+9FDjzceAFqbf9d4Hvi3DGRh69EHqL/LXDwj8jDMSvzGToAIcIh8uBlvvK5TnGg3ZYARK4FFiu/bfAFva49YHY+EwCAB/IAQJTiodeGAGBCNgCFy2BPABB48FQuAHEB+MzOZwKAs/1yygsc/J1+WtgOAHrmO5K+wRWFwEHWinymDEgtAI/AgR+Fy4NVtNR02LYA0hJ5n0vgAS/wYDN72fPgm8CBSZT0HiRUaE8ByAgtNh/9ybfU/3oOTih97pc8gIG57gA9F5y5wnWTuofRIZ+hA0LzQZqeD6ItzwW/0rOdbt0Dachn6IBQbnkTIZQEgFC+8iZBsBxASKq8FgiIcNRPVxzSmk+zKIkBssqrgOCJVx73xJ3vPDHnRmPcOaA2ny6iCgxQVF4BBO+Uu8ITd370xF0o65hrVGk+3UTlGaCqvAwI6fINMeeHXeWLQDAdQEhLeQkIkuUlIJgKoDEcXdRcPg8EWeULQDAVAIxe16d8DoSuR74zssvveMQeAOaDqH+2Y7P53kkl5bfcEHPRpgCo67vzxEgA2xDaUdN9dRAMB3B6eCJpNAAtENy94UVDAXiHJ5bNAJCBoHQ51Ax2ItsAoFVAsB0AWiGEXACV3Tce2wIArQBCLoCqy3TSNgBomRB2Awgt2woALQOC7QHQRSCUBQBaAoJ2ABHpc4I1PdNrmQGnQlPId3vMMsPJEVQ3chHVDrVl7e4ZzQJwdd5aw+cEAwqPyZH4nCCSfU6w+tLd9cZwdNUSD9182zB07VN1X/hNVe/gasaujuh69hPG5wQZ638aM1uW/y5gtTCAAL4CxvESCBi4RMly/+MkkdknqD1vb7hKPR8WUZL6C5VnPd99wfhnAAAAAElFTkSuQmCC"
              alt=""
            />
            <span>recortar</span>
          </li>
          <li className="flex py-2 h-10 items-center justify-center cursor-pointer hover:bg-neutral-500 ">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            rotar
          </li>
          <li className="flex py-2 items-center justify-center">tono</li>
          <li className="flex py-2 items-center justify-center">brillo</li>
          <li>contraste</li>
          <li>saturacion</li>
          <li>tinte</li>
          <li>canales RGB</li>
        </ul>
      </section>
      <div className="min-h-screen w-full absolute z-10 bg-neutral-700"></div>
      <section className="w-2/12 h-full bg-neutral-400 z-30">
        <ul>
          <li>a</li>
          <li>b</li>
          <li>c</li>
          <li>d</li>
          <li>e</li>
        </ul>
      </section>
    </div>
  );
}
