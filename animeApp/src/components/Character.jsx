import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAnimeContext } from '../context/Anime'

function Character() {
    const {getAnimePictures, pictures} = useAnimeContext();
    const [index, setIndex] = useState(0);
    const [char, setChar] = useState(null);
    const {id} = useParams()
    const {name} = id
    //get character info
    const getCharactersInfo = async (id) => {
        const response = await fetch(`https://api.jikan.moe/v4/characters/${id}/full`)
        const data = await response.json()
        setChar(data.data)
        console.log(data.data)
    }

    //handle image
    const handleImageClick = (i) => {
        setIndex(i)
    }

    useEffect(()=>{
        getAnimePictures(id)
        getCharactersInfo(id)
    },[id])

  return (
    <>
        <div>
            <div className='md:my-10 md:ml-20 md:flex-none flex md:justify-normal justify-center md:m-0 m-5'>
                <Link 
                    to='/' 
                    className='inline-block px-6 py-3 border border-white bg-gray-800 text-white text-xl font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300'
                >
                    Back to Home
                </Link>
            </div>
            <div className='md:w-1/3 w-2/3 md:h-96 h-full bg-slate-200 flex md:flex-row flex-col mx-auto items-center justify-center my-5'>
                <div className='md:mr-20 md:m-0 m-5'>
                    <img src={pictures[index]?.jpg.image_url} alt="" className='w-full h-72 shadow-xl rounded-lg'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div>
                        <p className='text-lg md:p-1.5 p-4'><span className='p-2 font-bold'>Name:</span><span>{char?.name}</span></p>
                    </div>
                </div>
            </div>
            <div className='md:w-2/3 grid md:grid-cols-10 grid-cols-3 gap-5 m-10 mx-auto bg-slate-200 p-2'>
                {pictures?.map((picture, i)=>{
                    return <div onClick={()=>{handleImageClick(i)}} key={i} className='bg-black'>
                        <img src={picture?.jpg.image_url} alt="" className='w-28 h-full p-2 cursor-pointer rounded-xl hover:border-4 duration-150 transition-all'/>
                    </div>
                })}
            </div>
        </div>
    </>
  )
}

export default Character