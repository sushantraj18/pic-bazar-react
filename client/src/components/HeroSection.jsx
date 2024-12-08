import React from 'react'
import { IoSearchCircle } from "react-icons/io5";

function HeroSection() {
  return (
    <div className="sm:w-[60vw] h-[20vh] overflow-clip sm:rounded-3xl mx-auto flex justify-center items-center">
        <form className="absolute flex justify-center items-center">
            <input name="search" id="search" type="text" placeholder='Search asset...'
            className="py-5 px-3 w-[80vw] sm:w-[40vw] text-xl sm:text-3xl mx-auto outline-none bg-bgColor border-b-2"
            />
            <IoSearchCircle className="text-3xl sm:text-5xl text-gray-400 ml-10" />

        </form>
    </div>
  )
}

export default HeroSection