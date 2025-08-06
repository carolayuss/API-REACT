import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import Heart from './components/Heart/Heart';
import Login from './components/Login/Login';

import Footer from './components/Footer/Footer';

import './App.css'


function App() {
  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<><Heart /><Footer /></>} /> 
        <Route path="/login" element={<Login />} />
        
        
      </Routes>
      
    </>
  );
}

export default App;





