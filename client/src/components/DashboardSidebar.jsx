import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoLogOut } from 'react-icons/io5'
import { Link, useLocation } from 'react-router-dom'
import { IoIosHeart, IoMdPhotos } from 'react-icons/io'
import { SiGoogleanalytics } from 'react-icons/si'
import { AiFillHome } from 'react-icons/ai'
import { FaList } from 'react-icons/fa'
import { setTab } from '../../store/slices/navSlice'
import { logout } from '../../store/slices/authSlice'



function DashboardSidebar() {
    const sidebar = useSelector((state) => state.nav.sidebar)
    const tab = useSelector((state) => state.nav.tab)
    const author = useSelector((state) => state.auth.author)
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    console.log(tab)
    return (
        <nav className={` fixed z-10 ${!sidebar == true ? "-translate-x-[500px] sm:translate-x-0" : "translate-x-0"} flex text-lg font-semibold bg-white min-h-screen w-fit shadow-lg flex-col gap-2 p-3 list-none justify-between items-center `}>
            <div>
                <div className="bg-black rounded-full my-5 w-fit py-5 px-6 text-white">
                    {author.charAt(0).toUpperCase()}

                </div >

                <div className="flex flex-col gap-2">

                    {pathname === "/seller/profile" ?
                        <li className={`w-full rounded-lg px-2 flex justify-start items-center hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 gap-2 ${tab === "photos-managment" && "bg-black text-white"} `} onClick={()=> dispatch(setTab("photos-managment"))} ><IoMdPhotos /> Photos Managment</li> :
                        <li className={`w-full rounden-lg px-2 flex justify-start items-center hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 gap-2 ${tab === "purchased" && "bg-black text-white"} `} onClick={()=>dispatch(setTab("purchased"))}><IoMdPhotos /> Purchased Managment</li>}

                    <li className={ `w-full rounded-lg px-2 flex justify-start items-center hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 gap-2 ${tab == "analytics" && "bg-black text-white"} `} onClick={()=>dispatch(setTab("analytics"))} > <SiGoogleanalytics />Analytics</li>

                    <li className={ `w-full rounded-lg px-2 flex justify-start items-center hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 gap-2  ${tab === 'orders' && "bg-black text-white"} ` } onClick={()=>dispatch(setTab("orders"))} > <FaList />Orders</li>

                    <li className={` w-full rounded-lg px-2 flex justify-start items-center hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 gap-2 ${tab === "favorite" && "bg-black text-white"} ` } onClick={()=>dispatch(setTab("favorite"))}> <IoIosHeart />Favroute</li>

                    <Link to={"/"} className={`w-full rounded-lg px-2 flex justify-start items-center hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 gap-2 ${tab === 'home' && "bg-black text-white"} `  } onClick={()=>dispatch(setTab("home"))}> <AiFillHome />Home</Link>
                </div>

            </div>
            <li className="w-full rounded-lg px-2 flex justify-start items-center hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 gap-2 " onClick={()=>dispatch(logout())} > <IoLogOut /> Logout</li>
        </nav>
    )
}

export default DashboardSidebar