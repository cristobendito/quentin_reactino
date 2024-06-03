import React, { useEffect, useState } from 'react';
import { fetchPopularMovies, fetchGenreMovie, searchMovies } from '../../services/api';
import MovieCard from './movieCard';
import './movieList.css';

const MovieList = ({ selectGenres, searchResults, genres }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [page, setPage] = useState(2);

  const fetchPopular = async () => {
    setLoading(true);
    try {
      const movieData = await fetchPopularMovies();
      setMovies(movieData);
      setIsSearching(false); 
    } catch (error) {
      console.error('Error fetching popular movies:', error);
    } finally {
      setLoading(false);
    }
  };
//prueba de scroll(scroll infinito)
  useEffect(() => {
    const handleScroll = async() => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight-1) {
        setPage(page => page + 1);
        const data = await fetchPopularMovies(page)
        setMovies((movieData) => {
          const existingMovieIds = new Set(movieData.map(movie => movie.id));
          const newMovies = data.filter(movie => !existingMovieIds.has(movie.id));
          return [...movieData, ...newMovies];
        });

      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (selectGenres) {
          const movieData = await fetchGenreMovie(selectGenres);
          setMovies(movieData);
        } else {
          await fetchPopular();
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
        setMovies(searchResults);
        setIsSearching(true); 
      } 
      else if (searchResults===0) {
        return (
         
          <div>
            <h2>No movies found</h2>
            <img src="/quentin.jpeg" alt="No movies found" />
          </div>
        );
      }
      else {
        await fetchPopular(); 
      }
    };

    fetchSearchResults();
  }, [searchResults]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // if (movies.length === 0 && isSearching) {
  //   return (
  //     <div>
  //       <img src="../../../public/quentin.jpeg" alt="No movies found" />
  //     </div>
  //   );
  // }

  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} genres={genres} />
      ))}
    </div>
  );
};

export default MovieList;
