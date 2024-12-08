import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
// import { IoHeartCircle } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

function ImageCard({ id, image, title, author, icon1, icon2, price }) {
    return (
        <div className="shadow-md bg-white rounded-lg p-2">
            <div className=" w-full h-[200px] overflow-hidden  rounded-2xl">

                <img src={image} className="w-full h-full hover:scale-95 transition-all ease-linear duration-300 transform" alt="image" />
            </div>
            <p className="font-semibold text-white bg-black  w-fit px-5 py-1 rounded-full text-sm mt-2">

                {
                    "@" + (author ? author.charAt(0).toUpperCase() + author.slice(1) : "unkonwn")
                }

            </p>

            <div className="flex items-center justify-between mt-2">
                <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-gray-400 font-bold">Price : ${price}</p>
                </div>
                <div className="flex gap-3 justify-center items-center ">

                    {icon1}
                    {icon2}
                </div>
            </div>
        </div>
    )
}

export default ImageCard