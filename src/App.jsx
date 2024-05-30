import React, { useState } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import Main from './components/main/main.jsx';
import Footer from './components/footer/footer';  
import './App.css';

  function App() {
    return (
      <div className="App">
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }


export default App;