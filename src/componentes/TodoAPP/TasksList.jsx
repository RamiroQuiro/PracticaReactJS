import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { completedTask, deleteTask, } from "../../feature/task/taskSlice";


export default function TasksList({handleFindTask}) {
  const taskSelector = useSelector((state) => state.tasks);

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };


const handleCheck=(id)=>{
toast.success("Tarea Completada")
    dispatch(completedTask(id))
}

  return (
    <div className="flex flex-col gap-4 items-center text-gray-800  duration-500 justify-center w-1/2 h-full mx-auto">
      
      <div className="w-11/12 rounded-lg m-2 p-5  bg-gray-50/5 backdrop-blur-sm duration-500  hover:shadow-lg hover:shadow-[#22272E]/50  flex flex-col gap-1">

      {
        
      taskSelector.map((tasks) => (
        <div
          key={tasks.id}
          className={
            !tasks.completed?
            "text-center  gap-2 flex py-2 px-2 justify-between items-center  duration-200 hover:bg-gradient-to-tr from-gray-50/10 via-transparent to-transparent border-b hover:-translate-y-1  hover:border-red-500/50 "
          :
          "text-center  gap-2 flex py-2 px-2 justify-between items-center bg-gradient-to-tr from-lime-800/50 to-green-900/50 backdrop-blur-sm duration-300 "
          }
        >
          <h2 className="text-2xl font-bold  ">{taskSelector.indexOf(tasks)+1} </h2>
          <input type="checkbox" value={tasks.completed} name="completed" 
          className="checked:bg-red-500 bg-green-500 p-5 rounded"
          onChange={()=>handleCheck(tasks)} required />
          
          <p className="text-sm text-gray-50 ">{tasks.title}</p>
        
          <div className="flex gap-2">
            <img
            alt="editarTask"
              src="https://img.icons8.com/color/48/000000/delete.png"
              onClick={() => handleDelete(tasks.id)}
              className="bg-red-500/80 hover:bg-red-500 cursor-pointer  uppercase  rounded w-8 h-8 p-1"
            />
            {!tasks.completed?
             <img
             alt="addTask"
             src="https://img.icons8.com/color/48/000000/edit.png"
             onClick={() => handleFindTask(tasks.id)}
             className="bg-green-300  hover:green-red-500 cursor-pointer uppercase  rounded w-8 h-8 p-1"
           />
          :null  
          }
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
