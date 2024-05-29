import { useEffect, useState } from 'react';
import { fetchPopularMovies, fetchGenres } from '../../services/api';
import MovieCard from './movieCard';
import './movieList.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const movieData = await fetchPopularMovies();
        const genreData = await fetchGenres();
        setMovies(movieData);
        setGenres(genreData);
      } catch (error) {
        console.error('Error fetching data:', error);
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
        <MovieCard key={movie.id} movie={movie} genres={genres} />
      ))}
    </div>
  );
};

export default MovieList;
