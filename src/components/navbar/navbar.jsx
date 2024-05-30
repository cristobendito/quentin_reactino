import React, { useState, useEffect } from 'react';
import { fetchGenres , searchMovies} from '../../services/api.js';
import {genresIcons } from './navbar.js';
import './navbar.css';

// console.log(genresIcons)

const Navbar = ({ setSelectGenres ,setSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    } else {
      setSearchResults([]); // Clear search results when query is empty
    }
  };

  // const handleSearchSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle search submit (e.g., send search query to server or filter items)
  //   console.log('Searching for:', searchQuery);
  // };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial screen size
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
                className={"dropdown-item"}
                onClick={() => handleGenreClick(genre.id)}
              >
                <i className={genre.className}></i> {genre.name}
              </button>
            ))}
          </div>
        </div>
        <a href="/favorites" className="navbar-link">Favoritos</a>
        <button className="navbar-button">Login/Registro</button>
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="navbar-search-input"
          />
        </div>
      </div>
      <button className="navbar-menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </button>
    </nav>
  );
};

export default Navbar;