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

    useEffect(()=>{
        getAnime(id);
    },[])

  return (
    <>
        <div className='text-white'>
            <h1 className='text-3xl'>{title}</h1>
            <div className='flex'>
                <div>
                    <img src={images?.jpg.large_image_url} alt="" />
                </div>
                <div>
                    <p><span>Aired:</span><span>{aired?.string}</span></p>
                    <p><span>Rating:</span><span>{rating}</span></p>
                    <p><span>Rank:</span><span>{rank}</span></p>
                    <p><span>Total Episodes:</span><span>{episodes}</span></p>
                    <p><span>Score:</span><span>{score}</span></p>
                    <p><span>Scored_by:</span><span>{scored_by}</span></p>
                    <p><span>Popularity:</span><span>{popularity}</span></p>
                    <p><span>Status:</span><span>{status}</span></p>
                    <p><span>Source:</span><span>{source}</span></p>
                    <p><span>Season:</span><span>{season}</span></p>
                    <p><span>Duration:</span><span>{duration}</span></p>
                    {/* <p><span>Genres:</span><span>{genres?.map}</span></p> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default AnimeIdentity