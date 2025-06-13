import React from 'react';
import Accountcard from './Accountcard';
import { Link } from 'react-router-dom';

const  Signin = () =>   {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md h-[540px]">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Signin to <br /> PopX account
        </h2>
 <h2 className="text-[20px]  text-gray-900 mb-6">
        Welcome back! Pick up where you left off with PopX
        </h2>
    
        <label className="block text-sm font-medium text-purple-700 mb-1">
          Email*
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Phone Number */}
        <label className="block text-sm font-medium text-purple-700 mb-1">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
       <Link to = '/Accountcard' > <button className="w-full bg-purple-600 relative top-[2px] hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded mb-3">
          Login
        </button> </Link>
        </div>
        </div>
  );
}
 export default Signin ;