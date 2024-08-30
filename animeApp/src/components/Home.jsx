import React, { useState } from 'react'
import Popular from './Popular'
import Upcoming from './Upcoming'
import Airing from './Airing'
import { useAnimeContext } from '../context/Anime'

function Home() {
    const {
        handleSubmit,
        searchAnime,
        search,
        handleChange, 
        getAiringAnime, 
        getPopularAnime, 
        getUpcomingAnime
    } = useAnimeContext()

    const [rendered, setRendered] = useState('popular')
    const [isOpen, setIsOpen] = useState(false)

    const switchComponent = () => {
        switch(rendered) {
            case 'popular':
                return <Popular rendered={rendered} />
            case 'airing':
                return <Airing rendered={rendered} />
            case 'upcoming':
                return <Upcoming rendered={rendered}/>
            default:
                return <Popular rendered={rendered}/>
        }
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className=''>
                <nav className='p-2 bg-white flex items-center justify-between text-sm md:text-xl sticky top-0 relative'>
                    {/* Navbar Links */}
                    <div className={`md:flex md:items-center ${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row absolute md:relative top-full left-0 w-full bg-white md:bg-transparent shadow-lg md:shadow-none z-10`}>
                        <div className='md:mr-10 p-2'>
                            <button onClick={()=>{
                                setRendered('popular')
                                getPopularAnime()
                                setIsOpen(false) // Close menu on click
                            }} className="relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                                Popular
                            </button>
                        </div>
                        <div className='md:mr-10 p-2'>
                            <button onClick={()=>{
                                setRendered('upcoming')
                                getUpcomingAnime()
                                setIsOpen(false) // Close menu on click
                            }} className="relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                                Upcoming
                            </button>
                        </div>
                        <div className='md:mr-10 p-2'>
                            <button onClick={()=>{
                                setRendered('airing')
                                getAiringAnime()
                                setIsOpen(false) // Close menu on click
                            }} className="relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                                Airing
                            </button>
                        </div>
                    </div>
                    <div className='md:hidden' onClick={toggleMenu}>
                        <button className="text-black focus:outline-none">
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                    {/* Search Bar (outside of hamburger menu) */}
                    <form action="" className='flex items-center md:ml-auto'>
                        <input 
                            type="text" 
                            placeholder='Search Anime' 
                            value={search} 
                            onChange={handleChange} 
                            className='bg-black text-white outline-none text-center py-1 md:px-4 px-2 m-1 rounded-lg' 
                        />
                        <button 
                            type='submit'  
                            onClick={(e) => {
                                handleSubmit(e)
                                setIsOpen(false) // Close menu on search
                            }}
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-lg transition-all duration-150'
                        >
                            Search
                        </button>
                    </form>
                </nav>
                {switchComponent()}
            </div>
        </>
    )
}

export default Home
