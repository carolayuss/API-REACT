import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserProvider';
import { Navbar } from './components/Navbar/Navbar';
import Heart from './components/Heart/Heart';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Registro from './components/Registro/Registro';
import Home from './components/Home/Home';
//import { CartProvider } from './context/CartContext'; los dejo comentados porque no entendi muy bien para que sirve
import ProductDetail from './components/ProductDetail/ProductDetail';
import './App.css'


function App() {  
  return (
   // <CartProvider>
    <UserProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Heart /><Footer /></>} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detalle-producto" element={<ProductDetail />} />
      </Routes>
     </UserProvider>
    // </CartProvider>
  );
}

export default App;





