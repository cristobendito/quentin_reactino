

// function MovieCard({ movie, genres, onFavorite }) {
//   const genreNames = movie.genre_ids.map(id => {
//     const genre = genres.find(g => g.id === id);
//     return genre ? genre.name : "";
//   }).join(", ");

//   return (
//     <div className="movie-card">
//       <img 
//         src={movie.poster_path 
//           ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
//           : 'https://img.freepik.com/free-photo/adorable-looking-kitten-with-yarn_23-2150886290.jpg?size=626&ext=jpg&ga=GA1.1.1599609068.1706814988&semt=ais'
//         } 
//         alt={movie.title}
//         onClick={() => onFavorite(movie)}
//       />
//       <div className="movie-info">
//         <h2>{movie.title}</h2>
//         <p>Genres: {genreNames}</p>
//         <p>Rating: {movie.vote_average.toFixed(1)}</p>
//         <button onClick={() => onFavorite(movie)}>Add to Favorites</button>
//       </div>
//     </div>
//   );
// }

// export default MovieCard;

import './movieCard.css';

const MovieCard = ({ movie }) => {
  const { title, overview, poster_path } = movie;

  return (
    <div className="movie-card">
      <img 
        src={`https://image.tmdb.org/t/p/w500${poster_path}`} 
        alt={title} 
      />
      <h2>{title}</h2>
      <p>Rating: {movie.vote_average.toFixed(1)}</p>
      {/* <p>{overview}</p> */}
    </div>
  );
};

export default MovieCard;