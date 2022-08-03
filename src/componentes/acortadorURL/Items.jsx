import React, { useRef } from 'react'
import {Link} from 'react-router-dom'
import toast, {  } from 'react-hot-toast';
import imageurl from '../../img/worldwide.gif'


export default function Items({item,i,handleDelete}) {
const shortURL=useRef(null)
const handleCopy = () => {
  navigator.clipboard.writeText(shortURL.current.innerText)
  toast.success('Copiado al portapapeles')
}
const host=window.location.host

  return (
    <div
    key={i}
    className=" font-medium relative z-0 bg-white rounded border hover:border-l-orange-500/70 duration-150 hover:border-l-4 text-center p-3 m-2"
    >
    
    <div><img src={imageurl} alt="" height={"10px"} width="50px" className='absolute inset- -z-10 opacity-50 top-1/2' /></div>
    <div>URL <span className='font-bold'> 🔗 {item.url}</span></div>
    <div className="cursor-pointer py-2 rounded-lg flex">
      Short URL{" "}<span onClick={handleCopy}>📋</span>
      <Link ref={shortURL} to={`/u/${item.shortUrl}`} className="font-bold" target="_blank">
        {" "}
        http://{host}/u/{item.shortUrl}
      </Link>
      
    </div>
    <div className=' font-bold font-mono py-1 '> <span className='rounded bg-orange-300/40 p-1'>Visitas {item.views} </span> </div>
    <button className='bg-green-800  hover:bg-green-700 py-1 px-2 mt-2 font-medium text-white rounded-lg' onClick={() => handleDelete(item.shortUrl)}>
      eliminar
    </button>
  </div>
  )
}
