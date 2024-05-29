import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search submit (e.g., send search query to server or filter items)
    console.log('Searching for:', searchQuery);
  };

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

  return (
    <nav className="navbar">
      <div className="navbar-title">QUENTIN FILM</div>
      <div className={`navbar-links ${isMobile ? 'mobile' : ''} ${menuOpen ? 'open' : ''}`}>
        <a href="/favorites" className="navbar-link">Favoritos</a>
        <button className="navbar-button">Login/Registro</button>
        <div className="navbar-dropdown">
          <button className="navbar-button">Categorías</button>
          <div className="dropdown-content">
            <a href="/category/action">
              <i className="fas fa-fist-raised"></i> Action
            </a>
            <a href="/category/adventure">
              <i className="fas fa-hiking"></i> Adventure
            </a>
            <a href="/category/animation">
              <i className="fas fa-film"></i> Animation
            </a>
            <a href="/category/comedy">
              <i className="fas fa-laugh"></i> Comedy
            </a>
            <a href="/category/crime">
              <i className="fas fa-bomb"></i> Crime
            </a>
            <a href="/category/documentary">
              <i className="fas fa-book"></i> Documentary
            </a>
            <a href="/category/drama">
              <i className="fas fa-theater-masks"></i> Drama
            </a>
            <a href="/category/family">
              <i className="fas fa-users"></i> Family
            </a>
            <a href="/category/fantasy">
              <i className="fas fa-dragon"></i> Fantasy
            </a>
            <a href="/category/history">
              <i className="fas fa-landmark"></i> History
            </a>
            <a href="/category/horror">
              <i className="fas fa-ghost"></i> Horror
            </a>
            <a href="/category/music">
              <i className="fas fa-music"></i> Music
            </a>
            <a href="/category/mystery">
              <i className="fas fa-search"></i> Mystery
            </a>
            <a href="/category/romance">
              <i className="fas fa-heart"></i> Romance
            </a>
            <a href="/category/science-fiction">
              <i className="fas fa-rocket"></i> Sci-Fi
            </a>
            <a href="/category/tv-movie">
              <i className="fas fa-tv"></i> TV Movie
            </a>
            <a href="/category/thriller">
              <i className="fas fa-user-secret"></i> Thriller
            </a>
            <a href="/category/war">
              <i className="fas fa-bomb"></i> War
            </a>
            <a href="/category/western">
              <i className="fas fa-hat-cowboy"></i> Western
            </a>
            {/* Añade más categorías según sea necesario */}
          </div>
        </div>
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