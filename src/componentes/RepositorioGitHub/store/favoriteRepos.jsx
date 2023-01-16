import create from "zustand";
import { persist } from "zustand/middleware";


export const useFavoriteReposStora = create(persist((set) => ({
    favoriteReposID: [],
    addFavoriteRepo: (id) =>
      set((state) => ({
        favoriteReposID: [...state.favoriteReposID, id],
      })),
    removeFavoriteRepo: (id) =>
      set((state) => ({
        favoriteReposID: state.favoriteReposID.filter((repo) => repo !== id),
      })),
  }),
  {
    name: "favoriteRepos",
  })
);
