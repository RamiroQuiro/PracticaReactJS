import React from 'react'
import { useState } from 'react'

export default function CanvasImagenes() {
    const [previewURL,setPreviewURL]=useState(null)
    const [file, setFile] = useState(null)
const handleInputFile=(e)=>{
    const file=e.target.file[0]
    setFile(file)
}

  return (
    <div className="flex w-full h-full relative bg-gradient-to-tr from-neutral-700 to-neutral-800 justify-between items-stretch">
         
      <section className='w-2/12 h-full  bg-neutral-400 z-30'>
        <ul className='flex flex-col h-full'>
          <li>recortar</li>
          <li>rotar</li>
          <li>tono</li>
          <li>brillo</li>
          <li>contraste</li>
          <li>saturacion</li>
          <li>tinte</li>
          <li>canales RGB</li>
        </ul>
      </section>
<div className='min-h-screen w-full absolute z-10 bg-neutral-700'>

</div>
<section className='w-2/12 h-full bg-neutral-400 z-30'>
<ul>
          <li>a</li>
          <li>b</li>
          <li>c</li>
          <li>d</li>
          <li>e</li>
        </ul>
</section>
        </div>
)}
