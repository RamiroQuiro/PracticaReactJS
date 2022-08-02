import React, { useEffect, useState } from 'react'
import TaskForm from './TaskForm'
import TasksList from './TasksList'
import { useSelector,  } from "react-redux";
export default function Home() {


    const tasks=useSelector((state)=>state.tasks)
    const [taskEdit, setTaskEdit]=useState({id:0})

const handleFindTask=(id)=>{
setTaskEdit({...taskEdit,id:id})
}

useEffect(()=>{
    if(taskEdit){
        const a =  tasks.find(task=>task.id===taskEdit.id);
        setTaskEdit(a)
    }else{
       
    }
},[taskEdit])

  return (
    <div className='flex w-full pt-16 h-screen bg-white-500/50 bg-gradient-to-tr from-sky-800 to-indigo-900  flex-col justify-around items-center'>
        <h1 className='text-2xl font-medium bg-gray-50/50 rounded-tl-xl rounded-br-xl -skew-y-3 text-gray-100 py-1 px-3 '>APP de Tarea, con Redux</h1>
<div className='flex flex-col w-full mx-auto justify-around items-center '>
        <TaskForm taskEdit={taskEdit} setTaskEdit={setTaskEdit}/>
        <TasksList handleFindTask={handleFindTask}/>
        </div>
    </div>
  )
}
