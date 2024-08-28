import React from 'react'
import { useAnimeContext } from '../context/Anime'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

function Airing({rendered}) {
  const {airingAnime, isSearch, searchResults} = useAnimeContext();
  const conditionalRender = ()=>{
    if(!isSearch && rendered === 'airing'){
      return airingAnime.map((anime)=>{
        return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id} className='flex border-2 w-full h-96 hover:border-8 transition-all duration-150'>
            <img src={anime.images.jpg.large_image_url} alt="" className='w-full'/>
          </Link>
      })
    }else{
      return searchResults.map((anime)=>{
        return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id} className='flex border-2 w-full h-96 hover:border-8 transition-all duration-150'>
          <img src={anime.images.jpg.large_image_url} alt='' className='w-full'/>
        </Link>
      })
    }
  }

  return (
    <>
      <div className='flex items-center justify-center'>
        <div className='grid grid-cols-5 m-12 gap-5 w-full'>
          {conditionalRender()}
        </div>
        <Sidebar/>
      </div>
    </>
  )
}

export default Airing