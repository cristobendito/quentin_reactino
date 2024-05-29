import React, { useState } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import Footer from './components/footer/footer';  
import MovieList from './components/main/movieList';
import './App.css'

  function App() {
    return (
      <div className="App">
        <Navbar />
        {/* <h1>Popular Movies</h1> */}
        <MovieList />
        <Footer />
      </div>
    );
  }


export default App;