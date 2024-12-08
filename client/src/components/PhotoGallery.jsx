import React from 'react'
import ImageCard from './ImageCard'
import { FaShoppingBag } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";




function PhotoGallery() {
  return (
    <div className="flex bg-white flex-col justify-center items-center my-20 ">
        
    <h3 className="text-3xl font-semibold my-12">Photos</h3>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-20">
        <ImageCard 
        image="https://images.pexels.com/photos/29633889/pexels-photo-29633889/free-photo-of-handcrafting-a-festive-christmas-wreath.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="chef"
        author="sushant"
        icon1={<FaShoppingBag className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
        icon2={<IoMdHeartEmpty className="text-2xl text-red-600 cursor-pointer hover:scale-110 transition-all ease-linear duration-300 " />}
        price={30}
        />
        
        <ImageCard
        image="https://images.pexels.com/photos/6032700/pexels-photo-6032700.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        title="flower"
        author="sujit"
        icon1={<FaShoppingBag className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
        icon2={<IoMdHeartEmpty className="text-2xl text-red-600 cursor-pointer hover:scale-110 transition-all ease-linear duration-300 " />}
        price={30}
        />
        
        
    </div>
    </div>
  )
}


export default PhotoGallery