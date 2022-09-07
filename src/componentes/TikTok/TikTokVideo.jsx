import {useState,useEffect, useRef } from 'react'

export default function TikTokVideo({item,current}) {

    const ref=useRef(null)

useEffect(()=>{

    if(current && ref.current){
         ref.current.play()
    }else{
        ref.current.pause()
        ref.current.currentTime=0
    }

},[current])

  return (
    <div className=" w-[360px] h-[640px] relative">
        <video ref={ref} controls  className='absolute z-10 w-auto min-w-full min-h-full max-w-none'
          >
            <source 
           src={`http://localhost:4000/videos/${item.path}`} 
            type="video/mp4"/>
        </video>
    </div>
  )
}
