import { useState } from 'react'
import Popular from './components/Popular'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AnimeIdentity from './components/AnimeIdentity'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Popular/>} />
        <Route path='/anime/:id' element={<AnimeIdentity/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
