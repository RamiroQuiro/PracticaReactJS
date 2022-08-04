import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { addTask, editTask } from '../../feature/task/taskSlice'
import agregarTask from '../../img/svg/agregarTask.svg'
import editarTask from '../../img/svg/editTask.svg'



export default function TaskForm({taskEdit,setTaskEdit}) {
const [task,setTask] = useState({
    title:"",
    completed:false,
        id:''
})

const dispatch=useDispatch()

useEffect(()=>{
if(taskEdit){setTask(taskEdit)}
},[taskEdit])

const handleChange=(e)=>{
    setTask({...task,[e.target.name]:e.target.value,})
}
const handleSubmit=(e)=>{
e.preventDefault()
dispatch(addTask({...task,id:uuid()}))
setTask({
    title:"",
    completed:false,
        id:''
})

}
const handleEdit=(e)=>{
    e.preventDefault()
    dispatch(editTask(task))
    setTask({
        title:"",
        completed:false,
        id:''
    })
    setTaskEdit(null)
}


  return (
    <div className='flex mb-5 mx-auto text-gray-800 left-0 md:w-1/2 w-10/12 items-center justify-center'>
    <form 
    onSubmit={(e)=>e.preventDefault()}
    className=' md:w-11/12 w-full text-gray-200 rounded-lg  gap-3 flex flex-col items-center'>
        <h1 className='font-bold text-2xl  '>Formulario de Tarea</h1>
        <div className='w-full flex relative items-center'><input onChange={handleChange} value={task.title} type="text" name='title'  className='text-sm bg-gray-100 px-5 py-2  w-full rounded-md text-gray-800 focus:bg-indigo-200 focus:outline-none ' placeholder="✍️ Agregar Tarea..."/><span className=' p-0.5 rounded-full absolute right-4 cursor-pointer active:animate-ping ' onClick={!taskEdit?handleSubmit:handleEdit}><img src={!taskEdit? agregarTask : editarTask} alt="agregarTask" className=''/></span></div>
    </form>
    </div>
  )
}
