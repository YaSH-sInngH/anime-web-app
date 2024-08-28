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
            <div className='w-1/3 h-96 bg-slate-200 flex flex-row mx-auto items-center justify-center my-10'>
                <div className='mr-20'>
                    <img src={pictures[index]?.jpg.image_url} alt="" className='w-full h-72 shadow-xl'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div>
                        <p className='text-lg p-1.5'><span className='p-2 font-bold'>Name:</span><span>{char?.name}</span></p>
                    </div>
                </div>
            </div>
            <div className='w-2/3 grid grid-cols-10 gap-5 m-10 mx-auto bg-slate-200 p-2'>
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