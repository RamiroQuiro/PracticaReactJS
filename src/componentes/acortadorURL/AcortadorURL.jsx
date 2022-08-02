import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import useReducerApp from "../../context/stroreReducer";
import CreateForm from "./CreateForm";
import Items from "./Items";
import "./styles.css";

export default function AcortadorURL() {
  const [state, dispatch] = useReducerApp();

  useEffect(() => {
    dispatch({ type: "LOAD" });
  }, []);



  const handleDelete = (id) => {
    console.log(id);
    dispatch({ type: "DELETE", data: id });
  };
  return (
    <div className="flex flex-col text-gray-800 justify-center items-center pt-16 mainContainer ">
      <Toaster/>
      <h1 className="text-6xl font-bold font-mono text-white ">Acortador URL </h1>
      <div className="flex gap-10  flex-wrap md:justify-end justify-center items-center relative py-5  h-full w-full">
        <CreateForm dispatch={dispatch} />

        <div className=" md:mr-20 p-2 md:w-1/3 rounded-lg h-screen bg-gradient-to-b from-white/30 to-slate-500/30 backdrop-blur-sm ">
          <h2  className=" font-bold py-2 mx-2 px-1 rounded bg-orange-500/70  text-xl">Tus Links</h2>
          {state?.items?.map((item, i) => (
        <Items key={i} item={item} handleDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}
