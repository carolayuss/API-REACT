// src/components/ProductDetail/ProductDetail.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './ProductDetail.css'; // crea estilos si necesitas

const ProductDetail = () => {
  const location = useLocation();
  const producto = location.state?.producto;

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="product-detail">
      <h2>{producto.nombre}</h2>
      <img src={producto.url} alt={producto.nombre} />
      <p><strong>Descripción:</strong> {producto.descripcion}</p>
      <p><strong>Precio:</strong> {producto.precio}</p>
      <p><strong>Stock:</strong> {producto.stock}</p>
    </div>
  );
};

export default ProductDetail;
