import React, { useState } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import MovieList from './components/main/movieList.jsx';
import Footer from './components/footer/footer';  
import './App.css';

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