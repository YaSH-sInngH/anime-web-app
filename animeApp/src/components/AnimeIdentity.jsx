import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';

function AnimeIdentity() {
    const { id } = useParams();

    const [anime, setAnime] = useState({});
    const [characters, setCharacters] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const { title, synopsis, trailer, episodes, duration, aired, season, images, rank, score, scored_by, popularity, status, rating, source } = anime;

    const sliderRef = useRef(null);

    const getAnime = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
        const data = await response.json();
        setAnime(data.data);
    };

    const getCharacters = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}/characters`);
        const data = await response.json();
        setCharacters(data.data);
    };

    useEffect(() => {
        getAnime(id);
        getCharacters(id);
    }, [id]);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }, [currentIndex]);

    const handleNext = () => {
        if (currentIndex + 1 < Math.ceil(characters.length / 5)) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <>
            <div className='text-white'>
                <div className='md:my-8 md:ml-16 md:flex-none flex md:justify-normal justify-center md:m-0 m-5'>
                    <Link 
                        to='/' 
                        className='inline-block px-6 py-3 border border-white bg-gray-800 text-white text-xl font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300'
                    >
                        Back to Home
                    </Link>
                </div>
                <h1 className='md:p-6 p-4 md:text-4xl text-3xl text-center font-bold'>{title}</h1>
                <div className='border-2 w-full md:w-2/3 md:m-auto md:p-10 p-5 bg-slate-200 text-black'>
                    <div className='md:flex items-center'>
                        <div className='md:w-80 w-60 h-full'>
                            <img src={images?.jpg.large_image_url} alt="image" className='rounded-lg' />
                        </div>
                        <div className='m-auto'>
                            <p className='md:text-lg text-base md:p-1.5 p-1'><span className='md:p-2 p-0.5 md:font-bold font-medium'>Aired:</span><span>{aired?.string}</span></p>
                            <p className='md:text-lg text-base md:p-1.5 p-1'><span className='md:p-2 p-0.5 md:font-bold font-medium'>Rating:</span><span>{rating}</span></p>
                            <p className='md:text-lg text-base md:p-1.5 p-1'><span className='md:p-2 p-0.5 md:font-bold font-medium'>Rank:</span><span>{rank}</span></p>
                            <p className='md:text-lg text-base md:p-1.5 p-1'><span className='md:p-2 p-0.5 md:font-bold font-medium'>Score:</span><span>{score}</span></p>
                            <p className='md:text-lg text-base md:p-1.5 p-1'><span className='md:p-2 p-0.5 md:font-bold font-medium'>Scored_by:</span><span>{scored_by}</span></p>
                            <p className='md:text-lg text-base md:p-1.5 p-1'><span className='md:p-2 p-0.5 md:font-bold font-medium'>Popularity:</span><span>{popularity}</span></p>
                            <p className='md:text-lg text-base md:p-1.5 p-1'><span className='md:p-2 p-0.5 md:font-bold font-medium'>Status:</span><span>{status}</span></p>
                            <p className='md:text-lg text-base md:p-1.5 p-1'><span className='md:p-2 p-0.5 md:font-bold font-medium'>Source:</span><span>{source}</span></p>
                            <p className='md:text-lg text-base md:p-1.5 p-1'><span className='md:p-2 p-0.5 md:font-bold font-medium'>Season:</span><span>{season}</span></p>
                            <p className='md:text-lg text-base md:p-1.5 p-1'><span className='md:p-2 p-0.5 md:font-bold font-medium'>Duration:</span><span>{duration}</span></p>
                            <p className='md:text-lg text-base md:p-1.5 p-1'><span className='md:p-2 p-0.5 md:font-bold font-medium'>Total Episodes:</span><span>{episodes}</span></p>
                        </div>
                    </div>
                    <div className='md:my-4 my-1 md:text-lg text-sm'>
                        <p>
                            {showMore ? synopsis : synopsis?.substring(0, window.innerWidth < 768 ? 100 : 450) + '...'}
                            <button onClick={() => { setShowMore(!showMore); }} className='md:font-bold font-sm underline ml-2'>
                                {showMore ? 'Show Less' : 'Read More'}
                            </button>
                        </p>
                    </div>
                </div>
                <div className='md:m-auto flex flex-col items-center justify-center'>
                    <h3 className='md:text-3xl text-2xl my-6 font-bold '>Trailer</h3>
                    <div className='w-full flex justify-center'>
                        {trailer?.embed_url ? (
                            <iframe
                                src={trailer?.embed_url}
                                title='inline example'
                                width='100%'
                                height='350'
                                allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen
                                className='max-w-screen-md bg-slate-300 border-8'
                            ></iframe>
                        ) : (
                            <h1 className='text-white font-semibold text-xl text-center'>Oops! Trailer is not available, Sorry for the inconvenience.</h1>
                        )}
                    </div>
                </div>
                <div className='w-full md:w-2/3 m-auto p-10'>
                    <h1 className='md:text-4xl text-2xl text-center p-8 font-bold'>Characters</h1>
                    <div className='relative flex items-center'>
                        <button 
                            onClick={handlePrev} 
                            className='absolute left-[-2rem] top-1/2 transform -translate-y-1/2 text-3xl p-2 bg-black text-white rounded-full' 
                            disabled={currentIndex === 0}
                        >
                            &larr;
                        </button>
                        <button 
                            onClick={handleNext} 
                            className='absolute right-[-2rem] top-1/2 transform -translate-y-1/2 text-3xl p-2 bg-black text-white rounded-full' 
                            disabled={currentIndex + 1 >= Math.ceil(characters.length / 5)}
                        >
                            &rarr;
                        </button>
                        <div className='overflow-hidden'>
                            <div ref={sliderRef} className='flex transition-transform duration-500'>
                                {characters?.map((character, index) => {
                                    const { role } = character;
                                    const { images, name, mal_id } = character.character;
                                    return (
                                        <div key={index} className='flex-shrink-0 grid gap-5 md:w-1/6 w-2/6 p-2 bg-slate-200'>
                                            <Link to={`/character/${mal_id}`} className='border hover:border-2 transition-all duration-150 text-black font-bold'>
                                                <div>
                                                    <img src={images?.jpg.image_url} alt="image" className='w-full'/>
                                                    <p>{name}</p>
                                                    <p>{role}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AnimeIdentity;
