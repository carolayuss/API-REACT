import React, { useContext } from 'react';
import { CarritoContext } from './CarritoContext';

const CarritoPage = () => {
  const { carrito } = useContext(CarritoContext);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        carrito.map((item, i) => (
          <div key={i}>
            <h4>{item.nombre}</h4>
            <img src={item.url} alt={item.nombre} width={100} />
            <p>Precio: ${item.precio}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CarritoPage;


