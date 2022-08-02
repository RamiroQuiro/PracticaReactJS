import React from 'react'
import { useEffect,useState } from 'react'
import { useAppContext } from '../../context/Context'

export default function BotoneraCalculator({type,value,className}) {



const { addNumber,addOperation,executeAction,agregarNumber}=useAppContext()


const handleClick = () => {
    switch(type){
        case 'number':
            agregarNumber(value)
            break;
        case 'operator':
            addOperation(value)
            break;
        case 'action':
            executeAction(value)
            break;

        default:
    }
}
  return (
        <button 
        className={className}
        key={value}
        onClick={handleClick}>{value}</button>
  )
}
