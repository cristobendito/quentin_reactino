import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search submit (e.g., send search query to server or filter items)
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">QUENTIN FILM</div>
      <div className="navbar-links">
        <a href="/favorites" className="navbar-link">Favoritos</a>
        <button className="navbar-button">Login/Registro</button>
        <div className="navbar-dropdown">
          <button className="navbar-button">Categorías</button>
          <div className="dropdown-content">
            <a href="/category/action">Acción</a>
            <a href="/category/comedy">Comedia</a>
            <a href="/category/drama">Drama</a>
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
    </nav>
  );
};

export default Navbar;
