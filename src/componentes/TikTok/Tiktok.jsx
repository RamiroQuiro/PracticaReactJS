import { useEffect, useState } from "react";

import useFetch from "../../hook/useFetch";
import useItems from "../../hook/useItems";
import TikTokVideo from "./TikTokVideo";

export default function Tiktok() {
  const [url, setUrl] = useState("");
  const [page, setPage] = useState(0);
  const [index, setIndex] = useState(0);
  const [response, data, loading] = useFetch(url, "json");
  const [items] = useItems(data);

  useEffect(() => {
    setUrl("http://localhost:4000/page/" + page);
  }, [page]);

  const handleNextVideo = () => {
    setPage(index + 1);
    console.log(index)
};
const handlePreviusVideo = () => {
      console.log(index)
    setPage(index - 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center w-full bg-wave-pattern ">
      <div className="flex justify-between pt-10 items-center">
        {loading ? "Cargando..." : ""}
      </div>
      <button 
      className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
      disabled={loading} onClick={handleNextVideo}>
        {" "}
        Next{" "}
      </button>
      <button
       className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
        disabled={loading} onClick={handlePreviusVideo}>
        {" "}
        Previus{" "}
      </button>
      <div className="titokContainerView  w-[360px] h-[640px] bg-red-500 overflow-hidden mx-center ">
        <div 
        style={{transform:`translatY(${-1*index*360}px)`}}
        className="tiktoksContainer   w-[360px] h-[640px] flex flex-col duration-300}">
        {items?.map((item, i) => (
          <TikTokVideo key={item.id} current={i === index} item={item} />
        ))}
        </div>
      </div>
    </div>
  );
}
