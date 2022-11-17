import { useState } from 'react'
import {useRef} from 'react'

export default function useOnDraw(onDraw) {
    const canvasRef=useRef(null)
    const isDrawingRef=useRef(false)


    const setCanvasRef=(ref)=>{
            if(!ref) return
            canvasRef.current=ref
            
    initMouseMoveListener()
    initMouseDownListener()
    }


    const  initMouseMoveListener=()=>{
        if(isDrawingRef.current) {
            const mouseMoveListener =(e)=>{
                // console.log({x:e.clientX, y:e.clientY})
                const point = computePointInCanvas(e.clientX,e.clientY)
               const ctx=canvasRef.current.getContext('2d')
                if(onDraw)onDraw(ctx,point)
            }
            
            window.addEventListener('mousemove', mouseMoveListener)
        }else return
    }

    const computePointInCanvas=(clientX,clientY)=>{
        if(!canvasRef.current){return}

        const boundigRect=canvasRef.current.getBoundingClientRect()
        return{
            x:clientX - boundigRect.left,
            y:clientY - boundigRect.top
        }
    }
const initMouseDownListener=()=>{
    const listener=()=>{
        window.addEventListener('mousedown',()=>isDrawingRef.current=true)
    }
   const listen=()=>{
    window.addEventListener('mouseup',()=>isDrawingRef.current=false)
   }
   listen()
    listener()
}
console.log(isDrawingRef)

        return setCanvasRef
}
