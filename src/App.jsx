import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import MovieList from './components/main/movieList.jsx';
import Footer from './components/footer/footer';  
import FavoritesList from './components/main/favoritesList.jsx';
import './App.css';
import { fetchGenres } from './services/api'; 

function App() {
  const [selectGenres, setSelectGenres] = useState(null);
  const [searchResults, setSearchResults] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);
  const [genresData, setGenresData] = useState([]);

  const handleShowFavorites = () => {
    setShowFavorites(true); 
  };

  const fetchGenresData = async() => { 
    try {
      const genreData = await fetchGenres();
      setGenresData(genreData);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  useEffect(() => {
    fetchGenresData(); 
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
        <FavoritesList genres={genresData} />
      ) : (
        <MovieList 
          selectGenres={selectGenres} 
          genres={genresData} 
          searchResults={searchResults} 
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
