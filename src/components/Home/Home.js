import React, { useEffect, useState } from 'react';

const Home = () => {
  const [productos, setProductos] = useState([]);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // Cargar productos
    fetch('http://localhost:8080/api/productos')
      .then(res => res.json())
      .then(data => setProductos(data));

    // Ver si hay usuario logueado
    const user = localStorage.getItem('usuario');
    if (user) {
      setUsuario(JSON.parse(user));
    }
  }, []);

  const handleAddToCart = (producto) => {
    // Aquí agregas lógica para añadir al carrito (localStorage, backend, etc.)
    console.log(`Producto añadido al carrito: ${producto.nombre}`);
    alert(`"${producto.nombre}" añadido al carrito`);
  };

  return (
    <div className="home-container">
      <h1>Bienvenido a nuestra tienda</h1>
      <div className="productos-grid">
        {productos.map(producto => (
          <div className="producto-card" key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>

            {usuario && (
              <button onClick={() => handleAddToCart(producto)}>
                Añadir al carrito
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

