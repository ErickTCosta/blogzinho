// Meus CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'



//Meus Contextos
import { BrowserRouter, Routes, Route, Navigate, Router } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthProvider } from './context/AuthContext';


// Meus Imports

import Home from './pages/Home/Home';
import About from './pages/About/About';
import NavBar  from './components/NavBar';
import Footer from './components/Footer';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import CreatPost from './pages/CreatPost/CreatPost';
import Dashboard  from './pages/Dashboard/Dashboard';

//Hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';


function App() {

  const [user, setUser ] = useState(undefined)
  const { auth } = useAuthentication()
  console.log(auth)
  const loadingUser = user === undefined 

  useEffect(() => {
    onAuthStateChanged(auth, (user)=> {
      setUser(user)
    })
  }, [auth])

  if ( loadingUser ){
    return <p>Carregando...</p>
  }

  return (
    <div>
      <AuthProvider value={{user}}>
        <BrowserRouter>
        <NavBar/>
          <div className='container'>
            <Routes>
              <Route path="/" element = { <Home/> }/>
              <Route path="/about" element = { <About/> }/>
              <Route path="/register" element = { !user ? <Register/> : <Navigate to="/"/> }/>
              <Route path="/login" element = { !user ? <Login/> : <Navigate to="/"/> }/>
              <Route path='/post/create' element = {user ? <CreatPost/> : <Navigate to= {'/login'}/>}/>
              <Route path='/dash' element = { user ? <Dashboard/> : <Navigate to={"/login"}/>} />
            </Routes>
          </div>
        <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
