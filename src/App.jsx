import React, { useState } from 'react';
import './App.css';
import Footer from './components/footer/footer';  

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <nav className="navbar">
        <h1>Navbar</h1>
      </nav>
      <main className="main-content">
        <h2>Contenido Principal</h2>
      </main>
      <Footer />
    </div>
  );
}

export default App;