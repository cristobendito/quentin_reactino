// App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import MovieList from './components/main/movieList.jsx';
import Footer from './components/footer/footer';  
import FavoritesList from './components/main/favoritesList.jsx';
import './App.css';

function App() {
  const [selectGenres, setSelectGenres] = useState(null);
  const [searchResults, setSearchResults] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);
  const [genres, setGenres] = useState([]);

  const handleShowFavorites = () => {
    setShowFavorites(true); 
  };

  const fetchGenres = async() => {
    const genreData = await fetchGenres();
    setGenres(genreData);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <div className="App">
      <Navbar 
        setSelectGenres={setSelectGenres}
        showFavorites={handleShowFavorites} 
        setSearchResults={setSearchResults} 
        setShowFavorites={setShowFavorites}
      />
      {showFavorites ? (
        <FavoritesList genres={genres} />
      ) : (
        <MovieList 
          selectGenres={selectGenres} 
          genres={genres} 
          searchResults={searchResults} 
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
