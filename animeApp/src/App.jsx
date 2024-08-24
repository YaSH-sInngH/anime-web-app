import { useState } from 'react'
import Popular from './components/Popular'
import { useAnimeContext } from './context/Anime'
function App() {
  const anime = useAnimeContext()
  console.log(anime);
  
  return (
    <>
      <div>
        <Popular/>
      </div>
    </>
  )
}

export default App
