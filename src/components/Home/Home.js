import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import Heart from '../Heart/Heart';
import Carrito from '../Carrito/Carrito';

function Home() {
  const { user, setUser } = useContext(UserContext);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const stored = JSON.parse(localStorage.getItem(`cart-${user.nombre}`)) || [];
      setCart(stored);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(`cart-${user.nombre}`, JSON.stringify(cart));
    }
  }, [cart, user]);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/', { replace: true });
  };
//para verificar la funcionalidad del carrito
  const handleAddToCart = (product) => {
    console.log('¡Se hizo clic en Añadir al carrito!', product);
    if (!user) {
      alert('Por favor inicia sesión para agregar al carrito.');
      return;
    }

    const productWithId = { ...product, id: product.nombre };

    setCart(prev => {
  const existing = prev.find(item => item.nombre === product.nombre);
  if (existing) {
    const updated = prev.map(item =>
      item.nombre === product.nombre
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    console.log("Actualizando cantidad en el carrito:", updated);
    return updated;
  } else {
    const updated = [...prev, { ...product, quantity: 1 }];
    console.log("Agregando nuevo producto al carrito:", updated);
    return updated;
  }
});
  };

  const handleRemoveFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Bienvenid@, {user?.nombre}</h1>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
      <Heart onAddToCart={handleAddToCart} />
      {user && (
        <Carrito cart={cart} onRemove={handleRemoveFromCart} />
      )}
      
    </div>
  );
}

export default Home;






