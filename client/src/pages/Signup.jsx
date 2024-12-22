import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import axios from 'axios'



function Signup() {
  const navigate = useNavigate()
  

  const [userInfo , setUserInfo] = useState({
    username : "",
    password : "",
    email : "",
    accountType : "buyer"
  })

  const userInfoHandler = (e)=>{
    const {name,value} = e.target

    setUserInfo((prev)=> ({...prev,[name]:value}))

  }



const handleSubmit = async (e)=>{
    e.preventDefault()
    
    if(userInfo.username && userInfo.password && userInfo.email && userInfo.accountType){
      try{        
  
        const res = await axios.post(import.meta.env.VITE_API_URL + "/signup",userInfo)
        console.log(userInfo)
        const data = await res.data
        if(data.success === true){
          toast.success(data.message);
          navigate("/login")
        }
  
      }catch(error){
        toast.error(error.response.data.message)
        // console.log(error.response)
      }

    }else{
      alert("all fields require")
    }
}
  



 

  return (
    <div className="min-h-screen sm:mt-10 w-full  mt-20 flex items-center justify-center">

      <div className="sm:w-[27vw] shadow-md rounded px-6 py-5 bg-white">
        <h1 className='text-2xl text-center font-bold mb-4'>Let's Connect!</h1>
        <form onSubmit={handleSubmit}   >
          <div className="mb-4">
            <label
              className='block text-sm font-medium text-gray-700 mb-2'
              htmlFor="name">
              Username
            </label>
            <input type="text"
              placeholder='codexsushant'
              name='username'
              value={userInfo.username}
              onChange={userInfoHandler}
              id='name'
              className='shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black'
            />
          </div>


          <div className="mb-4">
            <label
              className='block text-sm font-medium text-gray-700 mb-2'
              htmlFor="email">
              Email
            </label>
            <input type="text"
              placeholder='codexsushant@gmail.com'
              name='email'
              value={userInfo.email}
              onChange={userInfoHandler}
              id='email'
              className='shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black'
            />
          </div>


          <div className="mb-4">
            <label
              className='block text-sm font-medium text-gray-700 mb-2'
              htmlFor="password">
              Password
            </label>
            <input type="password"
              placeholder='Enter password '
              value={userInfo.password}
              onChange={userInfoHandler}
              name='password'
              id='password'
              className='shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black'
            />
          </div>

          <div className="mb-4">
            <label
              className='block text-sm font-medium text-gray-700 mb-2'
            >
              Select your account type
            </label>
            <select onChange={userInfoHandler} name="accountType"  className='shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black'>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>


          <div className="flex items-center justify-end mb-4">
            <Link to={"/login"} className="text-xs text-black hover:text-blue-600">Log In with Account</Link>
          </div>

          <button  className="w-full py-2 px-4 bg-black text-white text-sm font-medium hover:text-gray-400 rounded-md">Signup</button>

        </form>
      </div>


    </div>
  )
}

export default Signup