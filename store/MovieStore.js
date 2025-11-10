import { create } from 'zustand'

const MovieStore = create((set) => ({

    MovieList: [],

    Movie: {},

    setMovieList: (item) => set(() => ({ MovieList: item })),

    updateMovieList: (item) => set((state) => ({ MovieList: [...state.MovieList, item] })),

    getMovie: (item) => set(() => ({ Movie: item })),
    
    updateMovie : (id,movie)=> set((state)=>({MovieList : state.MovieList.map(item => item.id === id ? {...item,...movie}:item)}))

}))

export default MovieStore
