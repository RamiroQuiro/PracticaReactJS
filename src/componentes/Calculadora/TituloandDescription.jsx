import React from 'react'

export default function TituloandDescription({title,descripcion,classNameTitle,classNameDescripcion,className}) {
  return (
    <div className={`${className} flex flex-col justify-center py-2 md:w-1/2 mx-auto items-center text-center`}>
        <h1 className={`${classNameTitle} text-5xl font-medium my-6`}>{title}</h1>
        <p className={`${classNameDescripcion} text- font-sans font-medium`}>
         {descripcion}
        </p>
      </div>
  )
}
