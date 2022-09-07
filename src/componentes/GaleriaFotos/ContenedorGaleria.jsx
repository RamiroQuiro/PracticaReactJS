import React, { useState } from 'react'
import Button1 from './Button1'

export default function ContenedorGaleria({children,codigo}) {

    const [isActive,setIsActive]=useState(false)

    const handleCode=()=>{
        setIsActive(!isActive)
    }

  return (
    <div className="h- w-full items-center flex flex-col justify-center">
    <div className="h-[80vh] w-11/12 border-2 border-gray-500 rounded-lg flex flex-col items-center pt-5 justify-center my-5">
      <div className="w-full flex items-center justify-end px-5 gap-5">
        <Button1 onClick={handleCode}>
           {
            !isActive?
            "Mostrar Código"
           : 
            "Ocultar Código"}</Button1>
      </div>
{
 !isActive?
     children
    :
    
    <div className='w-full h-full my-5'>
    {/* <img src={codigo} alt="" className="h-auto object-scale-down w-full" /> */}
    {codigo}
</div>

    
    }
</div>
</div>
  )
}
