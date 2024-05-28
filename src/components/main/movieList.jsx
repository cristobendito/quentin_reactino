// import MovieCard from './MovieCard';

// function MovieList({ movies, genres, onFavorite }) {
//   return (
//     <div id="movies-container">
//       {movies.length > 0 
//         ? movies.map(movie => (
//             <MovieCard 
//               key={movie.id} 
//               movie={movie} 
//               genres={genres} 
//               onFavorite={onFavorite} 
//             />
//           ))
//         : <p>No movies found.</p>
//       }
//     </div>
//   );
// }

// export default MovieList;


import { useEffect, useState } from 'react';
import  {fetchPopularMovies}  from '../../services/api';
import MovieCard from './movieCard';
import './movieList.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchPopularMovies();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (movies.length === 0) {
    return <div>No movies found.</div>;
  }

  return (
    <div className="movies-container">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
