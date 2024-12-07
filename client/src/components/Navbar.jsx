import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex px-4 py-5 fixed top-0 right-0 left-0 shadow-md gap-1 sm:gap-0 items-start sm:items-center flex-col sm:flex-row bg-white justify-between">
      <div >
        <Link className='font-bold text-3xl' to={"/"}>PicBazar</Link>
      </div>
      <ul className="flex gap-4 text-lg text-gray-400 font-semibold">
        <Link className="hover:text-black cursor-pointer">About</Link>
        <Link className="hover:text-black cursor-pointer">Contact</Link>  
        <Link to={"/login"} className="hover:text-black cursor-pointer">Log in</Link>
        <Link to={"/signup"} className="hover:text-black cursor-pointer">Sign up</Link>
      </ul>
    </div>
  )
}

export default Navbar 