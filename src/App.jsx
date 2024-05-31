import React, { useState } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import MovieList from './components/main/movieList.jsx';
import Footer from './components/footer/footer';  
import FavoritesList from './components/main/favoritesList.jsx';
import './App.css';

function App() {
  const [selectGenres, setSelectGenres] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false);
  const [genres, setGenres] = useState([]);

  const handleShowFavorites = () => {
    setShowFavorites(true);
  };

  const handleShowMovies = () => {
    setShowFavorites(false);
  };
  const fetchGenres= async() => {
    const genreData = await fetchGenres();
        setGenres(genreData);
  }

  return (
    <div className="App">
      <Navbar setSelectGenres={setSelectGenres} showFavorites={handleShowFavorites} />
      {showFavorites ? (
        <FavoritesList genres={genres} />
      ) : (
        <MovieList selectGenres={selectGenres} genres={genres} />
      )}
      <Footer />
    </div>
  );
}
  function App() {
    const [selectGenres, setSelectGenres] = useState(null);
    const [searchResults, setSearchResults] = useState("");
    return (
      <div className="App">
        <Navbar setSelectGenres={setSelectGenres} setSearchResults={setSearchResults} />
        <MovieList selectGenres={selectGenres} searchResults={searchResults} />
        <Footer />
      </div>
    );
  }

export default App;
