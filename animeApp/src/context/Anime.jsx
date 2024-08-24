import React, { createContext, useContext, useReducer } from 'react'

const AnimeContext = createContext();

const baseUrl = 'https://api.jikan.moe/v4';

export const AnimeContextProvider = ({children}) =>{
    
    const initialState = {
        popularAnime: [],
        airingAnime: [],
        upcomingAnime: [],
        characters: [],
        pictures: [],
        isSearch: false,
        searchResults: [],
        loading: false
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <AnimeContext.Provider value={{}}>
            {children}
        </AnimeContext.Provider>
    )
}

export const useAnimeContext = ()=>{
    return useContext(AnimeContext);
};