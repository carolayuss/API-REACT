// src/components/ProductDetail/ProductDetail.js
// src/components/ProductDetail/ProductDetail.js
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './ProductDetail.css';

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const producto = location.state?.producto;

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="product-detail">
      {/*nombre del usuario*/}
      {user && (
        <div className="user-info">
          <p>Usuario: <strong>{user.nombre}</strong></p>
        </div>
      )}

      {/* volver al home */}
      <button className="back-button" onClick={() => navigate('/home')}>
        ⬅ Volver al inicio
      </button>

      {/* Detalle del producto */}
      <h2>{producto.nombre}</h2>
      <img src={producto.url} alt={producto.nombre} />
      <p><strong>Descripción:</strong> {producto.descripcion}</p>
      <p><strong>Precio:</strong> {producto.precio}</p>
      <p><strong>Stock:</strong> {producto.stock}</p>
    </div>
  );
};

export default ProductDetail;

