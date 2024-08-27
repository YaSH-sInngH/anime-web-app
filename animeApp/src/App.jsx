import { useState } from 'react'
import Popular from './components/Popular'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AnimeIdentity from './components/AnimeIdentity'
import Home from './components/Home'
import Character from './components/Character'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/anime/:id' element={<AnimeIdentity/>} />
        <Route path='/character/:id' element={<Character/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
