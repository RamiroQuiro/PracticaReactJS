import {useState,useEffect} from 'react'

export default function useItems(data) {
const [items,setItems]=useState([])

useEffect(()=>{
    if(Array.isArray(data)){
        setItems([...items,...data]);
        console.log(items);
    }

},[data])

return [items]
}