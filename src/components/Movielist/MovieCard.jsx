// // MovieCard.jsx
// import React from 'react';

// const MovieCard = ({ title, poster, rating, releaseDate }) => (
//   <div>
//     <img src={poster} alt={title} />
//     <h3>{title}</h3>
//     <p>Rating: {rating}</p>
//     <p>Date: {releaseDate}</p>
//   </div>
// );

// export default MovieCard;

import React from 'react';

const MovieCard = ({ title, poster, rating, releaseDate }) => {
  return (
    <div className="bg-white text-black rounded shadow overflow-hidden">
      <img
        src={poster}
        alt={title}
        className="w-full h-64 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://via.placeholder.com/342x513?text=No+Image';
        }}
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p>⭐ {rating}</p>
        <p>📅 {releaseDate}</p>
      </div>
    </div>
  );
};

export default MovieCard;

