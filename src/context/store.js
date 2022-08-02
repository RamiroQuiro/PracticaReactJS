
import { configureStore } from '@reduxjs/toolkit'
import taskReducer from "../feature/task/taskSlice";

export const store=configureStore({
    reducer:{
            tasks:taskReducer
    }
})