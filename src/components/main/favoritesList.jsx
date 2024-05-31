import React, { useEffect, useState } from 'react';
import MovieCard from './movieCard';
import './favoritesList.css';

const FavoritesList = ({ genres }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleRemoveFavorite = (movieId) => {
    const updatedFavorites = favorites.filter(movie => movie.id !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  if (favorites.length === 0) {
    return <div>No favorites found.</div>;
  }

  return (
    <div className="favorites-container">
      {favorites.map(movie => (
        <MovieCard key={movie.id} movie={movie} genres={genres} onRemoveFavorite={handleRemoveFavorite} />
      ))}
    </div>
  );
};

export default FavoritesList;
