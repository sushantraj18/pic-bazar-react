import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import BuyerDashboard from './pages/BuyerDashboard'
import SellerDashboard from './pages/SellerDashboard'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/buyer/profile' element={<BuyerDashboard/>} />
      <Route path='/buyer/profile' element={<BuyerDashboard/>} />
      <Route path='/seller/profile' element={<SellerDashboard/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App