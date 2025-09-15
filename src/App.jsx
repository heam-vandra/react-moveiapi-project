import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agents from './pages/Agents'
// import { Link } from 'react-router-dom'


const App = () => {
  return (
    <div className='relative min-h-screen text-white' >
      {/* <Link className='text-white' to = '/' >Home</Link>
      <Link className='text-white' to = '/Projects'> Projects </Link>
      <Link className='text-white' to ='/Agent'>Agents</Link> */}
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/Agents' element={<Agents />} />
       <Route path='/Projects' element={<Projects />} />
      </Routes> 
    </div>
    
  )
}

export default App


