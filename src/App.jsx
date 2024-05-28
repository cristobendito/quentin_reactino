import { useState } from 'react'
import Navbar from './components/navbar/navbar.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">
        <Navbar />
    </div>

  )
}

export default App
