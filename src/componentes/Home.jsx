import React from "react";
import TodoAPP from "../img/svg/TodoAPPCard.svg";
import calculator from "../img/svg/calculatorCard.svg";
import shortURL from "../img/svg/shortURLCard.svg";
import galeria from "../img/svg/galeriaColor.svg";
import Cards from "./home/Cards";

export default function Home() {
  const app = [
    {
      titulo: "ToDo APP",
      descripcion:
        "Aplicacion que permite crear y editar una lista de tareas, marcar como completadas y eliminar las tareas que ya se han completado.",
      imagen: TodoAPP,
      link: "/todoapp",
      repo: "//github.com/RamiroQuiro/PracticaReactJS/tree/main/src/componentes/TodoAPP",
    },
    {
      titulo: "Calculadora",
      descripcion:
        "Calculadora hecha en React que permite realizar operaciones matematicas.",
      imagen: calculator,
      link: "/calculadora",
      repo: "//github.com/RamiroQuiro/PracticaReactJS/tree/main/src/componentes/Calculadora",
    },

    {
      titulo: "Acortador de URL",
      descripcion:
        "Acortador de URL en donde podremos acortar y personalizar nuestra direccióon de Web para hacerla más fácil de compartir.",
      imagen: shortURL,
      link: "/acortador",
      repo: "//github.com/RamiroQuiro/PracticaReactJS/tree/main/src/componentes/acortadorURL",
    },
    {
      titulo: "Galeria de Imagenes",
      descripcion:
        "Creando Galeria de Imagenes con tailwindCSS con un hover para agrandar la imagen aparece la info requerida ",
      imagen: galeria,
      link: "/galeriaTailwinsCss",
      repo: "//github.com/RamiroQuiro/PracticaReactJS/tree/main/src/componentes/GaleriaFotos",
    },
  ];

  return (
    <div className="bg-gradient-to-br py-16 from-lime-300/50 via-rose-400/50 min-h-screen to-purple-100/50">
    
      <div className="h-40 py-10 flex text-3xl font-bold items-center text-transparent justify-center bg-clip-text bg-gradient-to-r  from-lime-300 via-rose-500 to-purple-600 ">
        Practicas ReacJS - Tailwindcss
      </div>
      <div className="w-10/12 mx-auto items-center justify-center">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {app &&
            app.map((item, index) => (
              <Cards
                key={index}
                titulo={item.titulo}
                descripcion={item.descripcion}
                imagen={item.imagen}
                link={item.link}
                repo={item.repo}
                s
              />
            ))}
        </div>
      </div>
    </div>
  );
}
