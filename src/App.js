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

      <div className="tc bg-inherit ma0 pa4 min-vh-100"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
      <Search details={studentSbts}/>
    </div>
    </>
    
   
  );
}

export default App;