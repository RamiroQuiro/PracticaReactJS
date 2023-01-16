import { useQuery , QueryFunctionContext} from "@tanstack/react-query";
import api from "../api/gitHub";

async function fetchRepos({queryKey}) {
    const {data} = await api.get(`/users/${queryKey[1]}/repos`)
    return data
}
async function fetchUserData({queryKey}) {
    const {data}=await api.get(`/users/${queryKey[1]}`)
    return data
}

export function useFetchRepositori(gitUser) {
    // return useQuery({
    //     queryKey: ['repos',  gitUser],
    //     queryFn: fetchRepos,
    //   })
    return useQuery(['repos',gitUser],fetchRepos)
}

export function useFetchUserData(gitUser) {
    // return useQuery({
    //     queryKey: ['dataUSer',  gitUser],
    //     queryFn: fetchUserData,
    //   })
     return useQuery(['dataUser', gitUser],fetchUserData)
}