
import { useState } from "react";
import { useFavoriteReposStora } from "./store/favoriteRepos";

import LikeSVG from "./img/LikeSVG";


export default function TableBody({ repository, isFavorite }) {
  const addFavoriteRepo = useFavoriteReposStora(
    (state) => state.addFavoriteRepo
  );
  const removeFavoriteRepo = useFavoriteReposStora(
    (state) => state.removeFavoriteRepo
  );

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavoriteRepo(repository.id);
      return;
    }
    addFavoriteRepo(repository.id);
  };

  return (
    <tr className="border-y border-orange-500/50 bg-neutral-100/80 text-neutral-700">
      <td className="px-2 py-3">{repository.name}</td>
      <td className="px-2 py-3">{repository.language}</td>
      <td className="px-2 py-3  hover:text-blue-800 duration-100">
        <a href= {repository.html_url} target="_blank">
        {repository.html_url}</a></td>
      <td className="px-1 py-3 text-sm text-gray-900 hover:text-blue-800  duration-100">
      <a href= {repository.homepage} target="_blank">
        {repository.homepage}</a>
      </td>
      <td className="px-1 py-3 text-sm text-gray-900">
        {repository.description}
      </td>
      <td className="px-2 py-3 font-light text-xs cursor-pointer duration-100 text-center hover:bg-gray-500/50" onClick={handleFavorite}>
         {/* <img src={isFavorite ? like:dislike} alt="like" className="w-10 mx-auto duration-500"/> */}
        {/* <LikeSVG  className={`${isFavorite? "fill-neutral-700/80":" fill-blue-700"} duration-300 mx-auto`}    isToggle={isFavorite}/> */}
      </td>
    </tr>
  );
}
