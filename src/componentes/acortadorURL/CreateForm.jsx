import { useState } from "react";


const initialState={
  url: "",
  iniciales: "",
  personalizar: "",
}

export default function CreateForm({ dispatch }) {
  const [url, setUrl] = useState(initialState);

  const handleChange = (e) => {
    setUrl({ ...url, [e.target.name]: e.target.value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    url.url.length > 0
      ? dispatch({ type: "ADD", data: url })
      : alert("Ingresa una URL");

      setUrl(initialState)
  };

  return (
    <div className="flex flex-col mt-5 md:fixed top-1/4 md:left-20 justify-around items-center h-1/2 ">
      <form className="p-3 rounded-lg gap-3 bg-white/50 flex flex-col  backdrop-blur-sm justify-around items-center">
        <label htmlFor="acortador" className=" font-bold ">
          Ingrese URL a acortar
        </label>
        <div className="flex w-full items-center gap-3 ">
          {" "}
          <span className="scale-150">⚔</span>{" "}
          <input
            type="text"
            className=" inline-block py-2 px-1 rounded-lg border ring-0 border-orange-500 bg-blue-100/80 focus:border-0 w-full"
            name="url"
            value={url.url}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex w-full items-center gap-3 ">
          {" "}
          <span className=" text-sm font-medium">
            Iniciales (opcional)
          </span>{" "}
          <input
            type="text"
            name="iniciales"
            value={url.iniciales}
            maxLength={"4px"}
            className=" inline-block py-2 px-1 rounded-lg border border-orange-500 bg-blue-100/80 focus:border-0 w-full"
            onChange={handleChange}
          />
        </div>
        <div className="flex w-full items-center gap-3 ">
          {" "}
          <span className=" text-sm font-medium">
            Personalizar Link (opcional)
          </span>{" "}
          <input
            type="text"
            name="personalizar"
            min={"4px"}
            value={url.personalizar}
            maxLength={"10px"}
            className=" inline-block py-2 px-1 rounded-lg border border-orange-500 bg-blue-100/80 focus:border-0 w-full"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-green-800 hover:bg-green-700 w-1/2 p-3 font-bold text-white rounded-lg "
          onClick={handlesubmit}
        >
          crear URL
        </button>
      </form>
      <div className=" text-white pt-5 ">
        <p className="font-bold">Ingresa la URL que quieres acortar
           </p>
        <ul>
          <li>✓ SIEMPRE CON EL HTTPS:// O HTTPS://</li>
          <li>✓ Coloca Iniciales hasta 4 caracteres  </li>
          <li>✓ Personaliza tu URL</li>
        </ul>
      </div>
    </div>
  );
}
