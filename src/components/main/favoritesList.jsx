import React, { useEffect, useState } from 'react';
import MovieCard from './movieCard';
import './favoritesList.css';

const FavoritesList = ({ genres }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  if (favorites.length === 0) {
    return <div>No favorites found.</div>;
  }

  return (
    <div className="favorites-container">
      {favorites.map(movie => (
        <MovieCard key={movie.id} movie={movie} genres={genres} />
      ))}
    </div>
  );
};

export default FavoritesList;
