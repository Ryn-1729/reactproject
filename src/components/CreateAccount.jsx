import React from 'react';
import Accountcard from './Accountcard';
import { Link } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

const  CreateAccount = () =>   {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Create your <br /> PopX account
        </h2>

        {/* Full Name */}
        <label className="block text-sm font-medium text-purple-700 mb-1">
          Full Name *
        </label>
        <input
          type="text"
          placeholder="Enter full name"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Phone Number */}
        <label className="block text-sm font-medium text-purple-700 mb-1">
          Phone number *
        </label>
        <input
          type="text"
          placeholder="Enter phone number"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Email */}
        <label className="block text-sm font-medium text-purple-700 mb-1">
          Email address *
        </label>
        <input
          type="email"
          placeholder="Enter email address"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Password */}
        <label className="block text-sm font-medium text-purple-700 mb-1">
          Password *
        </label>
        <input
          type="password"
          placeholder="Enter password"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Company Name */}
        <label className="block text-sm font-medium text-purple-700 mb-1">
          Company name *
        </label>
        <input
          type="text"
          placeholder="Enter company name"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Are you an agency? */}
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Are you an Agency? *
        </label>
        <div className="flex items-center gap-6 mb-6">
          <label className="flex items-center space-x-2">
            <input type="radio" name="agency" />
            <span>Yes</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="agency" />
            <span>No</span>
          </label>
        </div>

        {/* Create Account Button */}
       <Link to = '/Accountcard' > <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300">
          Create Account
        </button> </Link> 
      </div>
    </div>
  );
}
export default CreateAccount ;
