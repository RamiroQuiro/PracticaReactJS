import React from 'react'
import Button2 from './Button2'

export default function DivImagenGaleria({classNameDiv,src,h2,descripcion,link}) {
  return (
    <div className={`${classNameDiv}  flex-1 hover:flex-grow-[10] hover:duration-1000 h-3/4 group overflow-hidden relative hover:skew-x-0  duration-500 rounded-lg`}>
    <img
      src={src}
      alt={h2}
      className="w-full h-full grayscale-[35%] group-hover:object-cover object-cover object-center duration-1000 group-hover:grayscale-0 rounded-lg"/>
    <div
      className="text-neutral-900 group-hover:w-full   bg-blue-600/70 p-2 -rotate-90 origin-top-left duration-300 text-center absolute bottom-0 left-0 
group-hover:skew-x-0 group-hover:bg-gradient-to-b group-hover:from-blue-600/60 group-hover:via-blue-600/50 group-hover:to-red-400/30 group-hover:backdrop-bm group-hover:text-white group-hover:rotate-0  group-hover:duration-300
"
    >
      <h2 className="text-lg font-bold px-5 leading-5 rounded-lg group-hover:text-2xl group-hover:mb-3">{h2}</h2> 
      <p className="hidden text-white group-hover:block group-hover:delay-150 duration-300 w-full text-xs opacity-0 group-hover:opacity-100">{descripcion}</p>
      <Button2
      className="hidden w-1/5 mx-auto my-2 text-xs px-0 py-0 group-hover:block group-hover:delay-150 duration-300 opacity-0 group-hover:opacity-100"
      link={link}
      text={"ver más"}
      />
    </div>
  </div>
  )
}
