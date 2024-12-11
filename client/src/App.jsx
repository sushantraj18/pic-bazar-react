import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import GsapTransition from './components/GsapTransition'

import Navbar from './components/Navbar'
import GsapTransition from './components/GsapTransition'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>

    <GsapTransition/>
    </BrowserRouter>
    </>
  )
}

export default App