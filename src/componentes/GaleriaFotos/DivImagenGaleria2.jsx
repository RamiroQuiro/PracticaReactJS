import React from "react";
import Button2 from "./Button2";

export default function DivImagenGaleria({
  classNameDiv,
  src,
  h2,
  descripcion,
  link,
}) {
  return (
    <>
      <div className=" flex-1 hover:flex-grow-[10] rounded-3xl hover:duration-1000 h-3/4 group relative hover:skew-x-0  duration-300 ">
        <span className="absolute inset-0 border-2 invisible group-hover:visible duration-500 border-gray-800 rounded-3xl border-dashed"></span>
        <div
          className={`${classNameDiv} overflow-hidden flex-1 hover:flex-grow-[10] rounded-3xl hover:-translate-x-2 hover:-translate-y-4 hover:duration-1000 h-full group relative hover:skew-x-0  duration-500`}
        >
          <img
            src={src}
            alt={h2}
            className="w-full h-full  group-hover:object-cover object-cover object-center duration-1000 group-hover:grayscale-0 rounded-3xl"
          />
          <div
            className="text-white group-hover:w-full rounded w-full h-full overflow-hidden  bg-gradient-to-b from-rose-400 via-transparent to-transparent p-2  duration-200 text-center absolute  bottom-0 left-0 translate-y-[70%] group-hover:-translate-y-0 
group-hover:skew-x-0 group-hover:bg-gradient-to-b group-hover:from-rose-600/60 hover:absolute group-hover:via-neutral-600/70 group-hover:to-gray-400/30  group-hover:text-white group-hover:rotate-0  group-hover:duration-300 shadow-lg group-hover:pt-10"
          >
            <h2 className=" font-bold px-5 leading-5 rounded-lg group-hover:text-2xl group-hover:mb-3">
              {h2}
            </h2>
            <p className="hidden text-white group-hover:block group-hover:delay-150 duration-300 w-full text-xs opacity-0 group-hover:opacity-100">
              {descripcion}
            </p>
            <Button2
              className="hidden w-1/5 mx-auto my-2 text-xs px-0 py-0 group-hover:block group-hover:delay-150 duration-300 opacity-0 group-hover:opacity-100"
              link={link}
              text={"ver más"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
