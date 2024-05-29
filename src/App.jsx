import React, { useState } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import MovieList from './components/main/movieList';
import Footer from './components/footer/footer';  
import './App.css';

  function App() {
    return (
      <div className="App">
        <Navbar />
        <MovieList />
        <Footer />
      </div>
    );
  }


export default App;