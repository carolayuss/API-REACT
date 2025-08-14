import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import Heart from '../Heart/Heart';
import Carrito from '../Carrito/Carrito';


function Home() {
  const { user, setUser } = useContext(UserContext);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // Cargar carrito al entrar
  useEffect(() => {
    if (user) {
      const userId = user.id || user.nombre; // si no tienes ID, usa nombre
      const storedCart = JSON.parse(localStorage.getItem(`cart-${userId}`)) || [];
      setCart(storedCart);
    }
  }, [user]);

  // Guardar carrito cada vez que cambie
  useEffect(() => {
    if (user) {
      const userId = user.id || user.nombre;
      localStorage.setItem(`cart-${userId}`, JSON.stringify(cart));
    }
  }, [cart, user]);

  // Cerrar sesión
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/', { replace: true });
  };

  // Agregar producto al carrito
 const handleAddToCart = (product) => {
  console.log("¡Se hizo clic en Añadir al carrito!", product);

  if (!user) {
    alert("Debes iniciar sesión para agregar productos al carrito.");
    return;
  }

  const productWithId = {
    ...product,
    id: product.nombre, // usar nombre como identificador temporal
  };
    setCart(prev => {
      const exists = prev.find(item => item.nombre === product.nombre);
      if (exists) {
        return prev.map(item =>
          item.nombre === product.nombre
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Eliminar del carrito
  const handleRemoveFromCart = (productNombre) => {
    setCart(prev => prev.filter(item => item.nombre !== productNombre));
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Bienvenid@, {user?.nombre}</h1>
        <div className="home-actions">
          <button onClick={handleLogout}>Cerrar sesión</button>
          <button onClick={() => navigate('/seguir-pedido')}>Seguir pedido</button>
        </div>
      </div>

      {/* Componente Heart recibe función para añadir */}
      <Heart onAddToCart={handleAddToCart} />

      {/* Mostrar carrito solo si hay usuario */}
      {user && <Carrito cart={cart} onRemove={handleRemoveFromCart} />}
    </div>
  );
}

export default Home;





