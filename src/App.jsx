
import Navbar from './components/navbar/navbar.jsx';
import React, { useState } from 'react';
import './App.css';
import Footer from './components/footer/footer';  

import MovieList from './components/main/movieList';
  function App() {
    return (
      <div className="App">
        <Navbar />git
        <MovieList />
        <Footer />
      </div>
    );
  }


export default App;