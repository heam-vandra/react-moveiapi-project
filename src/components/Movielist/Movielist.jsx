// import React from 'react'


// const Movielist = () => {
//   return (
//     <section className="fixed top-16 left-0 w-full z-20 flex items-center justify-between px-6 py-3">
//         <h1 className=' text-2xl space-x-8flex items-center space-x-8 text-White-800 font-medium px-4 py-2 rounded-lg text-white bg-transparent border border-transparent hover:border-blue-500 hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.7)] transition-all duration-300'>Popular</h1>
//         <ul className=' flex gap-6 font-semibold text-2xl flex items-center space-x-8 text-White-800 font-medium px-4 py-2 rounded-lg text-white bg-transparent border border-transparent hover:border-blue-500 hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.7)] transition-all duration-300'>
//             <li>8+ Star</li>
//             <li>5+ Star</li>
//             <li>3+ Star</li>
//         </ul>
//         <select className='text-2xl font-bold text-blue-600 space-x-8 flex justify-between items-center px-4 py-2 rounded-lg text-white bg-transparent border border-transparent hover:border-blue-500 hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.7)] transition-all duration-300'>
//             <option value="" >Sport By</option>
//             <option value="" >Date</option>
//             <option value="" >Rating</option>
//         </select>
//         <select className='text-2xl font-bold text-blue-600 space-x-8 flex justify-between items-center px-4 py-2 rounded-lg text-white bg-transparent border border-transparent hover:border-blue-500 hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.7)] transition-all duration-300'>
//             <option value="" >Accending</option>
//             <option value="" >Deccending</option>
//         </select>
//     </section>

//   )
// }

// export default Movielist

// import React, { useEffect, useState } from 'react'
// import { data } from 'react-router-dom'
// import MovieCard from './MovieCard'

// const Movielist = () => {
//     const [Movies, Setmovies] = useState([])

//     useEffect(() = > {
//         fetch('')
//         .then((res) = > res.json())
//             .then((data) = > Setmovies(data.results))
//     }[])

//     return (
//         <div className="grid grid-cols-3 gap-4 p-4  ">
//             {Movies.map((Movies) =>
//             (<MovieCard key={MovieCard.id}
//                 title={MovieCard.title}
//                 poster={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
//                 rating={movie.vote_average}
//                 releaseDate={movie.release_date} />
//             ))}

//         </div>
//     )
// }

// export default Movielist

import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import Video from '../home/Video';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRating, setFilterRating] = useState(null);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=3b42c547c4cf00887898ab12b10c1bf6&language=en-US&page=1'
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error('Error fetching movies:', err));
  }, []);

  const filteredMovies = movies
    .filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((movie) =>
      filterRating ? movie.vote_average >= filterRating : true
    );

  return (
    <div className="relative">
      {/* ✅ Background Video */}
      <Video />

      {/* ✅ Foreground Overlay Content */}
      <div className="relative z-10 px-6 py-8 min-h-screen text-whitebackdrop-blur-md">
        <h1 className="text-3xl font-bold text-center mb-6">🎬 Popular Movies</h1>

        {/* ⭐ Rating Filters */}
        <div className="flex justify-center gap-4 mb-4">
          <button onClick={() => setFilterRating(null)} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded">All</button>
          <button onClick={() => setFilterRating(3)} className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded">3+ Star</button>
          <button onClick={() => setFilterRating(5)} className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded">5+ Star</button>
          <button onClick={() => setFilterRating(8)} className="px-4 py-2 bg-yellow-700 hover:bg-yellow-800 rounded">8+ Star</button>
        </div>

        {/* 🔍 Search */}
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Search movies..."
            className="px-4 py-2 w-full max-w-md rounded text-white border-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* 🎥 Movie Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              poster={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                  : 'https://via.placeholder.com/342x513?text=No+Image'
              }
              rating={movie.vote_average}
              releaseDate={movie.release_date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
