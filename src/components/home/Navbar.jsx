import React from 'react'

const Navbar = () => {
  return (
            // <nav className =' top-0 bg-white shadow-md px-6 py-4 flex justify-between items-center '>
            <nav className="fixed top-0 left-0 w-full z-20 flex justify-between items-center px-6 py-4">
                <h1 className='text-2xl font-bold text-blue-800'>Movie All in  1</h1>
                <div className=" Navbarlinks flex space-x-8 text-gray-800 font-medium justify-end">
                    <a href="#" className="px-4 py-2 rounded-lg text-white bg-transparent border border-transparent hover:border-blue-500 hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.7)] transition-all duration-300">Popular Movies </a>
                    <a href='#' className='px-4 py-2 rounded-lg text-white bg-transparent border border-transparent hover:border-blue-500 hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.7)] transition-all duration-300'>Top rated Movies </a>
                    <a href='#'className='px-4 py-2 rounded-lg text-white bg-transparent border border-transparent hover:border-blue-500 hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.7)] transition-all duration-300'>Trendinng Movies </a>
                    
                </div>
            </nav>
      

  )
}

export default Navbar
