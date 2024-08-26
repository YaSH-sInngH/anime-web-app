import { useState } from 'react'
import Popular from './components/Popular'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AnimeIdentity from './components/AnimeIdentity'
import Home from './components/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/anime/:id' element={<AnimeIdentity/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
