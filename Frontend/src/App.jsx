import { useContext, useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Cart from './pages/Cart.jsx'
import Pizza from './pages/Pizza.jsx'
import { Routes, Route, Navigate } from 'react-router-dom';
import Profile from './pages/Profile.jsx'
import NotFound from './pages/NotFound.jsx'
import { UserContext } from './contexts/UserContext.jsx'

function App() {
  const { token } = useContext(UserContext);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={token ? <Navigate to="/" /> : <Register />} />
        <Route path='/login' element={token ? <Navigate to="/" /> : <Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/pizza/:id' element={<Pizza />} />
        <Route path='/profile' element={token ? <Profile /> : <Navigate to="/login" />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>

  );

}

export default App
