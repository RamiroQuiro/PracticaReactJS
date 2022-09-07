import React from 'react'

export default function Button1({onClick,children,className}) {
  return (
    <button 
    onClick={onClick}
    className={`${className} border-2 duration-500 cursor-pointer border-neutral-500 border-dashed rounded-lg py-2 px-3 font-bold text-neutral-700 text-sm text-center`}>{children}</button>
  )
}
