
import React from 'react';
import './favoriteButton.css';

const FavoriteButton = ({ onFavorite }) => {
  return (
    <button className="favorite-button" onClick={onFavorite}>
      Add to Favorites
    </button>
  );
};

export default FavoriteButton;
