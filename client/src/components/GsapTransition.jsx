import React, { useEffect, useRef } from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import BuyerDashboard from '../pages/BuyerDashboard'
import SellerDashboard from '../pages/SellerDashboard'
import {Routes,Route, useLocation} from 'react-router-dom'
import gsap from 'gsap'


function GsapTransition() {
    const nodeRef = useRef(null)
    const location = useLocation();
    // console.log("location is ",location)
    

    useEffect(()=>{
        if(nodeRef.current){
            gsap.fromTo(nodeRef.current,{opacity:0},{opacity:1,duration:1})
        }
    },[location])

  return (
    <div ref={nodeRef}>
    <Routes location={location}>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/buyer/profile' element={<BuyerDashboard/>} />
      <Route path='/buyer/profile' element={<BuyerDashboard/>} />
      <Route path='/seller/profile' element={<SellerDashboard/>} />
    </Routes>
    </div>
  )
}

export default GsapTransition