import { createSlice } from "@reduxjs/toolkit/";

const initialState=[
    {
        id:"1",
        title:"Tengo una tarea pendiente",
        completed: false
    },
    {
        id:"2",
        title:"Tengo dos tarea pendiente",
        completed: false
    },
]

const taskReducer= createSlice({
    name:'tareass',
    initialState,
    reducers:{
        addTask:(state,action)=>{
            const {title,description}=action.payload;
            if(title.length>0){
                state.push(action.payload)
            }else{
                alert("Ingrese una Tarea")
            }
        },
        deleteTask:(state,action)=>{
            const tareaEncontrada=state.find(task=>
                task.id===action.payload
            )
                tareaEncontrada&&
                state.splice(state.indexOf(tareaEncontrada),1)
        },
        editTask:(state,action)=>{
            const {id,title,description,completed}=action.payload
            const findTask=state.find(task => task.id===id)
            if(findTask){
                findTask.description=description
                findTask.title=title
                findTask.completed=completed
            }
        },
        completedTask:(state,action)=>{
            const {id}=action.payload
            const findTask=state.find(task => task.id===id)
            if(findTask){
                findTask.completed=!findTask.completed
            }
        }
        }
})

export const {addTask,deleteTask,editTask,completedTask}=taskReducer.actions
export default taskReducer.reducer