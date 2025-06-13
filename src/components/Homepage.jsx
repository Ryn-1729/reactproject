import React from 'react'
import Signin from './Signin';
import CreateAccountForm from './CreateAccount';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Link } from "react-router-dom";

const Homepage = () => {
   
  return (
     <div className="min-h-screen flex items-center  justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md text-center w-full max-w-sm h-[540px] shadow-xl flex flex-col justify-end">
        <h1 className="text-3xl font-extrabold  text-gray-900 relative top-[-80px] mb-3">Welcome to PopX</h1>
        <p className=" text-lg text-gray-500 relative top-[-40px] mb-6">
         Connect, share, and grow with the PopX 
        </p>
      <Link to ='/CreateAccount' >  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded mb-3">
          Create Account
        </button> </Link>
     <Link to = '/Signin' > <button className="w-full bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold py-2 px-4 rounded">
          Already Registered? Login
        </button> </Link>
      </div>
    </div>

  )
}

export default Homepage