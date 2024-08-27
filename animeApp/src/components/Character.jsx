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
    },[])

  return (
    <>
        <div>
        <div className='text-white text-2xl ml-10 my-5 hover:underline transition-all duration-150'>
            <Link to='/'>&#8592; Go Back</Link>
        </div>
        <div className='w-1/3 h-96 bg-slate-200 flex flex-row mx-auto items-center justify-center my-10'>
            <div className='mr-20'>
                <img src={pictures[index]?.jpg.image_url} alt="" className='w-full h-72'/>
            </div>
            <div>
                <p className='text-lg p-1.5'><span className='p-2 font-bold'>Name:</span><span>{char?.name}</span></p>
            </div>
        </div>
        <div className='flex my-10 items-center justify-center'>
            {pictures?.map((picture, i)=>{
                return <div onClick={()=>{handleImageClick(i)}} key={i} className='bg-white'>
                    <img src={picture.jpg.image_url} alt="" className='w-24 h-full p-2 cursor-pointer border hover:border-4 duration-150 transition-all'/>
                </div>
            })}
        </div>
        </div>
    </>
  )
}

export default Character