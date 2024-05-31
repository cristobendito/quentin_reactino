import React, { useEffect, useState } from 'react';
import { fetchPopularMovies, fetchGenres, fetchGenreMovie, searchMovies } from '../../services/api';
import MovieCard from './movieCard';
import './movieList.css';

const MovieList = ({ selectGenres, searchResults }) => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (selectGenres) {
          const movieData = await fetchGenreMovie(selectGenres);
          setMovies(movieData);
        } else {
          const movieData = await fetchPopularMovies();
          const genreData = await fetchGenres();
          setMovies(movieData);
          setGenres(genreData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectGenres]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchResults && searchResults.length > 0) {
        setSearchLoading(true);
        try {
          // const movieData = await searchMovies(searchResults);
          setMovies(searchResults);
        } catch (error) {
          console.error('Error searching movies:', error);
        } finally {
          setSearchLoading(false);
        }
      } else {
        setMovies([]);
      }
    };

    fetchSearchResults();
  }, [searchResults]);

  if (loading || searchLoading) {
    return <div>Loading...</div>;
  }

  if (movies.length === 0) {
    return <div>No movies found.</div>;
  }

  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} genres={genres} />
      ))}
    </div>
  );
};

export default MovieList;
