import React, { useState, useEffect } from 'react';
import Modal from './modal';
import ActionButton from './actionButton';
import { fetchMovieVideos } from '../../services/api';
import './movieCard.css';

const MovieCard = ({ movie, genres }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState('');

  const genreNames = movie.genre_ids.map(id => {
    const genre = genres.find(g => g.id === id);
    return genre ? genre.name : '';
  }).join(', ');

  const handleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.some(fav => fav.id === movie.id)) {
      favorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      console.log(`Añadida "${movie.title}" a favoritos`);
    } else {
      console.log(`"${movie.title}" ya está en favoritos`);
    }
  };
  

  const toggleModal = async () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      const videos = await fetchMovieVideos(movie.id);
      const trailer = videos.find(video => video.type === 'Trailer' && video.site === 'YouTube');
      if (trailer) {
        setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
      }
    }
  };

  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <p>{genreNames}</p>
      <ActionButton label="Mas info" onClick={toggleModal} className="info-button" />
      <ActionButton label="Add to Favorites" onClick={handleFavorite} className="favorite-button" />


      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        {trailerUrl && (
          <iframe
            width="560"
            height="315"
            src={trailerUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </Modal>
    </div>
  );
};

export default MovieCard;
