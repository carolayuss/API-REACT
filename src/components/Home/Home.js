import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import Heart from '../Heart/Heart';
import Carrito from '../Carrito/Carrito';

function Home() {
  const { user, setUser } = useContext(UserContext);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => { /* tu lógica */ };
  const handleRemoveFromCart = (productId) => { /* tu lógica */ };
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Bienvenid@, {user?.nombre}</h1>
        <div className="home-actions">
          <button onClick={handleLogout}>Cerrar sesión</button>
          <button onClick={() => {/* lógica seguir pedido */}}>Seguir pedido</button>
        </div>
      </div>
      <Heart onAddToCart={handleAddToCart} />
      {user && (
        <Carrito cart={cart} onRemove={handleRemoveFromCart} />
      )}
    </div>
  );
}

export default Home;



