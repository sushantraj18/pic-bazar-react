import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { login } from '../../store/slices/authSlice'

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword]= useState("")

    const handleLogin = async(e)=>{
      e.preventDefault()

      try{
        const res = await axios.post(import.meta.env.VITE_API_URL + "/login",{
          email,
          password
        })
        // console.log(res)
        const data = await res.data
        toast.success(data.message)
        dispatch(login(data))
        navigate(`/${data.role}/profile`)

      }catch(error){
        toast.error(error.response.data.message)
      }

    }

  return (
<div className="min-h-screen sm:mt-10 w-full  mt-20 flex items-center justify-center">

<div className="sm:w-[27vw] shadow-md rounded px-6 py-5 bg-white">
  <h1 className='text-2xl text-center font-bold mb-4'>Let's Connect!</h1>
  <form onSubmit={handleLogin}>


    <div className="mb-4">
      <label
        className='block text-sm font-medium text-gray-700 mb-2'
        htmlFor="email">
        Email
      </label>
      <input type="email"
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        placeholder='codexsushant@gmail.com'
        name='email'
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
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
        placeholder='Enter password '
        name='password'
        id='password'
        className='shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black'
      />
    </div>

    


      <div className="flex items-center justify-end mb-4">
        <Link to={"/signup"} className="text-xs text-black hover:text-blue-600">Create Account</Link>
      </div>

      <button className="w-full py-2 px-4 bg-black text-white text-sm font-medium hover:text-gray-400 rounded-md">Login</button>

  </form>
</div>


</div>  )
}

export default Login