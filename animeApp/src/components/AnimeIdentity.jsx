import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function AnimeIdentity() {
    // getting ID of the anime;
    const {id} = useParams();

    // states
    const [anime, setAnime] = useState({});
    const [characters, setCharacters] = useState([]);
    const [showMore, setShowMore] = useState(false);

    const {title, synopsis, trailer, episodes,duration, aired, season, images, rank, score, scored_by, popularity, status, rating, source} = anime

    // getting anime data based on id
    const getAnime = async(anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
        const data = await response.json();
        setAnime(data.data);
        console.log(data.data);   
    }
    // getting characters
    const getCharacters = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}/characters`)
        const data = await response.json()
        setCharacters(data.data)
        console.log(data.data)
    }

    useEffect(()=>{
        getAnime(id);
        getCharacters(id)
    },[])

  return (
    <>
        <div className='text-white'>
            <h1 className='p-4 text-center text-4xl font-bold'>{title}</h1>
            <div className='border-2 w-2/3 m-auto p-10 bg-slate-200 text-black'>
                <div className='flex items-center'>
                    <div className='w-80 h-full'>
                        <img src={images?.jpg.large_image_url} alt="image" className='rounded-lg' />
                    </div>
                    <div className='m-auto'>
                        <p className='text-lg p-1.5'><span className='p-2 font-bold'>Aired:</span><span>{aired?.string}</span></p>
                        <p className='text-lg p-1.5'><span className='p-2 font-bold'>Rating:</span><span>{rating}</span></p>
                        <p className='text-lg p-1.5'><span className='p-2 font-bold'>Rank:</span><span>{rank}</span></p>
                        <p className='text-lg p-1.5'><span className='p-2 font-bold'>Score:</span><span>{score}</span></p>
                        <p className='text-lg p-1.5'><span className='p-2 font-bold'>Scored_by:</span><span>{scored_by}</span></p>
                        <p className='text-lg p-1.5'><span className='p-2 font-bold'>Popularity:</span><span>{popularity}</span></p>
                        <p className='text-lg p-1.5'><span className='p-2 font-bold'>Status:</span><span>{status}</span></p>
                        <p className='text-lg p-1.5'><span className='p-2 font-bold'>Source:</span><span>{source}</span></p>
                        <p className='text-lg p-1.5'><span className='p-2 font-bold'>Season:</span><span>{season}</span></p>
                        <p className='text-lg p-1.5'><span className='p-2 font-bold'>Duration:</span><span>{duration}</span></p>
                        <p className='text-lg p-1.5'><span className='p-2 font-bold'>Total Episodes:</span><span>{episodes}</span></p>
                    </div>
                </div>
                <div className='my-4 text-lg'>
                    <p>
                        {showMore ? synopsis : synopsis?.substring(0,450) + '...'}
                        <button onClick={()=>{
                            setShowMore(!showMore)
                        }} className='font-bold underline ml-2'>{showMore ? 'Show Less' : 'Read More'}</button>
                    </p>
                </div>
            </div>
            <div className='w-2/3 m-auto flex flex-col justify-center'>
                <h3 className='text-3xl my-10'>Trailer</h3>
                <div>
                    {trailer?.embed_url && 
                        <iframe 
                            src={trailer?.embed_url} 
                            title='inline example'
                            width='800'
                            height='400'
                            allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                            className='border-4'>
                        </iframe>}
                </div>
            </div>
        </div>
    </>
  )
}

export default AnimeIdentity