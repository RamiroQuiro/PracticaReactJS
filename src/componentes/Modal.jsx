import { useRef } from "react";

export default function Modal({ children, title, root }) {
  const ref = useRef(null);

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm h-screen w-screen fixed flex justify-center items-center m-auto">
      <div className="bg-gray-50 h-52 w-1/3 rounded-2xl shadow-lg">
        <div className="w-full flex items-center justify-between px-5 py-2">
          <h2>Titulo 1</h2>
          <div>
            <button>✖</button>
          </div>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png"
          alt="cookies-img"
          className=" w-24 object-contain"
        />
        <div></div>
      </div>
    </div>
  );
}
