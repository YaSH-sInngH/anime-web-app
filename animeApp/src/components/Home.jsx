import React, { useState } from 'react'
import Popular from './Popular'
import Upcoming from './Upcoming'
import Airing from './Airing'
import { useAnimeContext } from '../context/Anime'
 
function Home() {
    const {handleSubmit,
        searchAnime,
        search,
        handleChange, 
        getAiringAnime, 
        getPopularAnime, 
        getUpcomingAnime} = useAnimeContext()

    const [rendered, setRendered] = useState('popular')

    const switchComponent = ()=> {
        switch(rendered){
            case 'popular':
                return <Popular rendered={rendered} />
            case 'airing':
                return <Airing rendered={rendered} />
            case 'upcoming':
                return <Upcoming rendered={rendered} />
            default:
                return <Popular rendered={rendered}/>
        }
    }

  return (
    <>
        <div className=''>
            <nav className='h-16 bg-cyan-200 flex flex-row items-center justify-center text-xl sticky top-0'>
                <div className='flex'>
                    <div className='mr-20 transition-all duration-150 p-1'>
                        <button onClick={()=>{
                            setRendered('popular')
                            getPopularAnime()
                        }} className="relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                            Popular
                        </button>
                    </div>
                    <div className='mr-20 transition-all duration-150 p-1'>
                        <button onClick={()=>{
                            setRendered('upcoming')
                            getUpcomingAnime()
                        }} className="relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                            Upcoming
                        </button>
                    </div>
                    <div className='mr-20 transition-all duration-150 p-1'>
                        <button onClick={()=>{
                            setRendered('airing')
                            getAiringAnime()
                        }} className="relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                            Airing
                        </button>
                    </div>
                    <form action="">
                        <div className='flex items-center'>
                            <input 
                                type="text" 
                                placeholder='Search Anime' 
                                value={search} 
                                onChange={handleChange} 
                                className='bg-black text-white outline-none text-center py-1 px-4 m-1 rounded-lg    ' 
                            />
                            <button 
                                type='submit'  
                                onClick={handleSubmit}
                                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-lg transition-all duration-150'
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </nav>
            <div className='text-center p-5 text-3xl text-white underline'>
                <h1>
                    {rendered==='popular'?'Popular Anime':
                    rendered==='airing'?'Airing Anime': 'Upcoming Anime'}
                </h1>
            </div>
            {switchComponent()}
        </div>
    </>
  )
}

export default Home