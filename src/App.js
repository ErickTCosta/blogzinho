// Meus CSS
import './App.css';

// Meus Imports

import { BrowserRouter, Routes, Route, Navigate, Router } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='container'>
          <Routes>
            <Route path="/" element = { <Home/> }/>
            <Route path="/about" element = { <About/> }/>
          </Routes>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
