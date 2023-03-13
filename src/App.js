import React from 'react';
import Search from './components/Search';
import studentSbts from './data/studentSbts';


import Navbar from './components/Header/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import Contactus from './Pages/Contactus'

function App() {
  return (
    <>
        
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>

      <div className="tc bg-green ma0 pa4 min-vh-100">
      <Search details={studentSbts}/>
    </div>
    </>
    
   
  );
}

export default App;