import React from 'react'
import Header from '../components/Header'

const Account = () => {
  return (
    <>
    <Header/>
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden py-40">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40  ring-purple-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
          create an account
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="full-name"
              className="block text-sm font-semibold text-gray-800"
            >
              first name 
            </label>
            <label
              htmlFor="full-name"
              className="block text-sm font-semibold text-gray-800"
            >
                <input
              required
              type="text" placeholder='first name '
             
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
              last name 
            </label>
            <input
              required
              type="text" placeholder='last name'
             
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email adress"
              required
              className="block text-sm font-semibold text-gray-800"
            >
              email address
            </label>
            <input
              type='email'
              placeholder='enter email address'
              
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button
              
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a href="#" className="font-medium text-purple-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
    </>
  )
}

export default Account