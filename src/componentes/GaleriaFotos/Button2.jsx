import React from 'react'
import { Link } from 'react-router-dom'
export default function Button1({text,link,color,className}) {
  return (
    <Link 
    className={`${className} bg-white rounded-lg group text-center hover:bg-gray-200 duration-200 text-gray-700 font-extrabold shadow-lg py-2 px-4 w-full hover:-translate-y-1`}
   to={link}>
    {text} <i className='text-lg group-hover:animate-pulse'>➡</i>
    </Link>
  )
}
