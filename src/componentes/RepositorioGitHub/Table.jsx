import React from 'react'
import { useFetchRepositori, useFetchUserData } from './hook/useRepo'
import TableBody from './TableBody'
import { useFavoriteReposStora } from "./store/favoriteRepos";

export default function Table({datos}) {
const {favoriteReposID}=useFavoriteReposStora()
const {data,isLoading,error}=useFetchRepositori(datos)
const {data:dataUser}=useFetchUserData(datos)

if (isLoading)return <div>Loading...</div>
  return (<>
  <table className="table-auto w-full text-left whitespace-no-wrap">
    <thead>
      <tr className="text-center">
        <th className="px-1 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
          Avatar
        </th>
        <th className="px-1 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
          Nombre de Usuario
        </th>
        <th className="px-2 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
          BioDescripcion
        </th>
        <th className="px-1 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
          Links
        </th>
        <th className="px-1 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
          Repositorios
        </th>
        <th className=" px-2 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
          Seguidores
        </th>
      </tr>
    </thead>
    <tbody>
    <tr className="border-y border-orange-500/50 bg-neutral-700/80 text-center ">
        <td className=" overflow-hidden p-2">
          <img
            src={dataUser?.avatar_url}
            alt=""
            className="w-20 rounded-full object-center"
          />
        </td>
        <td>{dataUser?.name}</td>
        <td>{dataUser?.bio}</td>
        <td className="flex flex-col items-center justify-around mt-4 gap-2 mx-auto">
          <a href={dataUser?.html_url} target="_blank">{dataUser?.html_url}</a>
          <a href={dataUser?.blog} target="_blank">{dataUser?.blog}</a>
          </td>
        <td>{dataUser?.public_repos}</td>
        <td>{dataUser?.followers}</td>
      </tr>
    </tbody>
  </table>

  <table className="table-auto w-full text-left whitespace-no-wrap">
    <thead>
      <tr>
        <th className="px-2 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
          Nombre Repositorio
        </th>
        <th className="px-2 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
          Lenguaje
        </th>
        <th className="px-2 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
          Direccion
        </th>
        <th className="px-1 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
          Homepage
        </th>
        <th className="px-1 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
          Descripcion
        </th>
        <th className=" px-2 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
          Favorito
        </th>
      </tr>
    </thead>

    <tbody>
      {data?.map((repo) => (
        <TableBody
          repository={repo}
          isFavorite={favoriteReposID.includes(repo.id)}
          key={repo.id}
        
        />
      ))}
    </tbody>
  </table>
</>
  )
}
