import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import Heart from './components/Heart/Heart';
import Login from './components/Login/Login';
import RegistroCliente from './components/RegistroCliente/RegistroCliente';
import Footer from './components/Footer/Footer';
import { CarritoProvider } from './components/Carrito/CarritoContext';
import CarritoPage from './components/Carrito/CarritoPage';
import './App.css'


function App() {
  return (
    <>
    <CarritoProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Heart /><Footer /></>} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/registrate" element={<RegistroCliente />} />
        <Route path="/carrito" element={<CarritoPage />} />
        
      </Routes>
      </CarritoProvider>
    </>
  );
}

export default App;





