import React, { useState, useEffect } from 'react';
import { fetchGenres , searchMovies} from '../../services/api.js';
import {genresIcons } from './navbar.js';
import './navbar.css';


const Navbar = ({ setSelectGenres ,setSearchResults, showFavorites , setShowFavorites}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isHome, setIsHome] = useState(true);

  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query) {
      try {
        const results = await searchMovies(query);
        setSearchResults(results);
      } catch (error) {
        console.error('Error searching movies:', error);
      }
      
    } 
    else {
      setSearchResults([]);
      setIsHome(true); 
    }
  };

  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn); 
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
  };
  const handleFavoritesClick = () => {
    setIsHome(false); 
    setShowFavorites(true);
  };

  const handleHomeClick = () => {
    setIsHome(true); 
    setShowFavorites(false);
  
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">QUENTIN FILM</div>
      <div className={`navbar-links ${isMobile ? 'mobile' : ''} ${menuOpen ? 'open' : ''}`}>
          {isHome && (
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
  )}
        {isHome ? ( 
          <button className="navbar-button" onClick={handleFavoritesClick}>
            Favoritos
          </button>
        ) : (
          <button className="navbar-button" onClick={handleHomeClick}>
            Inicio
          </button>
        )}
        <button className="navbar-button login" onClick={handleLoginToggle}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
        {isHome && ( 
          <div className="navbar-search">
            <input
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="navbar-search-input"
            />
          </div>
        )}
      </div>
      <button className="navbar-menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </button>
    </nav>
  );
};

export default Navbar;
