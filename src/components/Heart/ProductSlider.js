import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductSlider.css';

const ProductSlider = ({ images }) => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const handleAddToCartClick = () => {
    navigate('/login');
  };

  return (
    <div className="slider-container">
      <button className="slider-button left" onClick={scrollLeft}>
        &#10094;
      </button>

      <div className="slider" ref={sliderRef}>
        {images.map((item, index) => (
          <div key={index} className="slider-item">
            <img
              src={item.url}
              alt={item.nombre}
              className={`slider-image ${item.clase || ''}`}
            />
            <div className="slider-info">
              {item.nombre && <p className="nombre">{item.nombre}</p>}
              {item.descripcion && <p className="descripcion">{item.descripcion}</p>}
              {item.stock && <p className="stock">{item.stock}</p>}
              {item.precio && <p className="precio">{item.precio}</p>}
              {item.carrito && (
                <button
                  className="add-to-cart"
                  title="Carrito"
                  onClick={handleAddToCartClick}
                >
                  🛒 Añadir
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <button className="slider-button right" onClick={scrollRight}>
        &#10095;
      </button>
    </div>
  );
};

export default ProductSlider;


