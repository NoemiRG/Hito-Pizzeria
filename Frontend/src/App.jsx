import { useState } from 'react'
import './App.css'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
//import Login from './components/Login.jsx'
//import Register from './components/Register.jsx'
//import Cart from './components/Cart.jsx'
import Pizza from './components/Pizza.jsx'


function App() {

  return (
    <>
      <Navbar />
      <section className='hito'>
        <h1>Requerimiento 1</h1>
        <Home />
      </section>


      <section className='hito'>
        <h2>Requerimiento 2</h2>
        <Pizza />
      </section>

      {/*<Cart />
        <Login />
        <Register />*/}
      <Footer />
    </>

  );

}

export default App
