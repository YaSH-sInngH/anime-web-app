import React from 'react'
import { useAnimeContext } from '../context/Anime'
import { Link } from 'react-router-dom'

function Sidebar() {
    const {popularAnime} = useAnimeContext()
    const sortedAnime = popularAnime?.sort((a,b) => {
        return b.score - a.score
    })
  return (
    <>
        <div className='text-white w-1/6 mr-9 bg-neutral-200 flex justify-center flex-col items-center p-6'>
            <h1 className='text-center m-2 text-xl font-bold underline text-black'>Top 5 Popular Anime</h1>
            <div className='grid grid-rows-1 gap-10 justify-items-center items-center'>
                {sortedAnime?.slice(0,5).map((anime)=>{
                    return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id} className='bg-white border-4 hover:border-blue-500 border-white transition-all duration-150'>
                        <img src={anime.images.jpg.large_image_url} alt="" className=''/>
                        <h5 className='text-black text-center p-2 hover:underline font-medium'>{anime.title}</h5>
                    </Link>
                })}
            </div>
        </div>
    </>
  )
}

export default Sidebar