import React, { useState, useEffect } from 'react';
import { fetchGenres } from '../../services/api.js';
import { genresIcons } from './navbar.js';
import './navbar.css';
import { FavoritesList } from '../main/favoritesList.jsx';

const Navbar = ({ setSelectGenres, showFavorites }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleGenreClick = (genreId) => {
    setSelectGenres(genreId);
    console.log('Selected genre ID:', genreId);
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">QUENTIN FILM</div>
      <div className={`navbar-links ${isMobile ? 'mobile' : ''} ${menuOpen ? 'open' : ''}`}>
        <div className="navbar-dropdown">
          <button className="navbar-button">Categorías</button>
          <div className="dropdown-content">
            {genresIcons.map((genre) => (
              <button
                key={genre.id}
                className="dropdown-item"
                onClick={() => handleGenreClick(genre.id)}
              >
                <i className={genre.className}></i> {genre.name}
              </button>
            ))}
          </div>
        </div>
        <button className="navbar-link" onClick={showFavorites}>Favoritos</button>
        <button className="navbar-button">Login/Registro</button>
        <form className="navbar-search" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="navbar-search-input"
          />
          <button type="submit" className="navbar-search-button">Buscar</button>
        </form>
      </div>
      <button className="navbar-menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </button>
    </nav>
  );
};

export default Navbar;
