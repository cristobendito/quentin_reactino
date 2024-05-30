import React, { useEffect, useState } from 'react';
import { fetchPopularMovies, fetchGenres } from '../../services/api';
import MovieCard from './movieCard';
import FavoritesList from './favoritesList';
import './movieList.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFavorites, setShowFavorites] = useState(false);

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

  if (showFavorites) {
    return <FavoritesList genres={genres} />;
  }

  if (movies.length === 0) {
    return <div>No movies found.</div>;
  }

  return (
    <div>
      <button onClick={() => setShowFavorites(true)}>Show Favorites</button>
      <div className="movies-container">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} genres={genres} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
