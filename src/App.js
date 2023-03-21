// Meus CSS
import './App.css';

// Meus Imports

import { BrowserRouter, Routes, Route, Navigate, Router } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NavBar  from './components/NavBar';
import Footer from './components/Footer';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <div className='container'>
          <Routes>
            <Route path="/" element = { <Home/> }/>
            <Route path="/about" element = { <About/> }/>
            <Route path="/register" element = { <Register/> }/>
            <Route path="/login" element = { <Login/> }/>
          </Routes>
        </div>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
