import { useState } from 'react'
import Navbar from './components/navbar/navbar.jsx';
import './App.css'
import React, { useState } from 'react';
import './App.css';
import Footer from './components/footer/footer';  

import MovieList from './components/main/movieList';
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