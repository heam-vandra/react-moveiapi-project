import React from 'react'
import Video from '../components/home/Video'
// import Herobottomtext from '../components/home/herobottomtext'
// import Herotoptext from '../components/home/herotoptext'
// import ProfileCard from '../components/profilecard'
// import Counter from '../components/Counter'

import Navbar from '../components/home/Navbar'
import Movielist from '../components/Movielist/Movielist'
import  MovieCard  from '../components/Movielist/MovieCard'
import Footer from '../components/Movielist/footer'


const Home = () => {
  return (
    <div>
    <Navbar />
         <Movielist/>
    <Video   />
    {/* <Herobottomtext />
    <Herotoptext /> */}
    {/* <ProfileCard 
    name="Alice "
        bio="Frontend Developer who loves React 🌟"
        isOnline={false}/>
    <Counter className="flex justify-center items-center h-screen bg-amber-100" /> */}
{/* <MovieCard /> */}
<Footer />
    </div>
   
  )
}

export default Home
