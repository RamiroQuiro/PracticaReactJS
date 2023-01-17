import { useState } from "react";
import Background from "./Background";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import SvgComponent from "./img/GitSVG1";
import Table from "./Table";

export default function QueryRepositorio() {
  const [user, setUser] = useState({
    name: "",
    userName: "",
  });

  const handleUser = (e) => {
    setUser({
      name: e.target.value,
    });
  };

  const handleButton = (e) => {
    setUser({ ...user, userName: user.name });
  };

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-screen bg-gradient-to-tr py-16 from-neutral-800 to-neutral-700 min min-h-screen text-gray-200 flex flex-col gap-5 items-center justify-center overflow-x-hidden">
        <Background />
        <div className="bg-gray-200  rounded-lg border  p-5 text-neutral-800 z-50 flex flex-col">
          <div className="w-full inline-flex group gap-5 items-center mb-5">
            <SvgComponent
              width="40"
              className="group-hover:fill-orange-500 duration-500"
              height="40"
            />
            <h2 className=" ">Buscar Repositorio de Github</h2>
          </div>
          <input
            onChange={handleUser}
            type="text"
            name="usuarioName"
            id="usiarioName"
            className="w-full mx-auto relative rounded px-5 py-1.5 overflow-hidden group focus:border-none  hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300 outline-0 "
            placeholder="Introduce un usuario"
          />
          <button
            onClick={handleButton}
            className=" mt-8 w-8/12 mx-auto relative rounded px-5 py-1.5 overflow-hidden group bg-orange-600  hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-64 ease"></span>
            buscar
          </button>
        </div>
        <div className="z-50 bg-gray-300/70 w-10/12 rounded-lg ">
          {user.userName && <Table datos={user.userName} />}
        </div>
      </div>
    </QueryClientProvider>
  );
}
