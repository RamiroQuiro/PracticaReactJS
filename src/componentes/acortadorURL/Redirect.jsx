import React, { useEffect, useState } from 'react'
import {useParams,useNavigate}from'react-router-dom'
import useReducerApp from '../../context/stroreReducer'
import Loader from './Loader'

export default function Redirect() {
const navigate=useNavigate()
    const params=useParams()
    const [item,setItem]=useState(null)
    const [state,dispatch]=useReducerApp()

useEffect(()=>{
    const data=localStorage.getItem('urls')
    if(data){
        const items=JSON.parse(data);
        const url=params.url
        const itemUrl=items.find(item=>item.shortUrl===url)

        if(itemUrl){
            setItem(itemUrl)
            dispatch({type:'ADD_VIEW',data:url})
            setTimeout(()=>{
                window.location.href=itemUrl.url
            },[1500])
        }else{
            setItem(undefined)
        }
    }


},[])

  return (
    <div className="flex flex-col text-gray-800 justify-center items-center pt-16 mainContainer h-screen">
    <Loader item={item} url={params.url}/>
    </div>
  )
}
