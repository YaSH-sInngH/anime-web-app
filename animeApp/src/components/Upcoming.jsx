import React from 'react'
import { useAnimeContext } from '../context/Anime'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

function Upcoming({rendered}) {
  const {upcomingAnime, isSearch, searchResults} = useAnimeContext();
  const conditionalRender = ()=>{
    if(!isSearch && rendered === 'upcoming'){
      return upcomingAnime.map((anime)=>{
        return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id} className='flex border-2 w-full md:h-96 h-56 hover:border-8 transition-all duration-150'>
            <img src={anime.images.jpg.large_image_url} alt="" className='w-full'/>
          </Link>
      })
    }else{
      return searchResults.map((anime)=>{
        return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id} className='flex border-2 w-full md:h-96 h-56 hover:border-8 transition-all duration-150'>
          <img src={anime.images.jpg.large_image_url} alt='' className='w-full'/>
        </Link>
      })
    }
  }

  return (
    <>
      <div className='flex items-center justify-center'>
        <div className='grid md:grid-cols-5 grid-cols-2 m-6 gap-5 w-full'>
          {conditionalRender()}
        </div>
        <Sidebar/>
      </div>
    </>
  )
}

export default Upcoming