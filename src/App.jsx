import { useState } from 'react'
import Navbar from './components/navbar/navbar.jsx';
import './App.css'

import MovieList from './components/main/movieList';
  function App() {
    return (
      <div className="App">
        <Navbar />
        {/* <h1>Popular Movies</h1> */}
        <MovieList />
      </div>
    );
  }


export default App
