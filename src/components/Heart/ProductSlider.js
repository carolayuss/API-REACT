import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "./ProductSlider.css";

const ProductSlider = ({ images, onAddToCart }) => {
   const navigate = useNavigate();
  const sliderRef = useRef(null);
  const { user } = useContext(UserContext);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
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
              className={`slider-image ${item.clase || ""}`}
            />
            <div className="slider-info">
              {item.nombre && <p className="nombre">{item.nombre}</p>}
              {item.descripcion && (
                <p className="descripcion">{item.descripcion}</p>
              )}
              {item.stock && <p className="stock">{item.stock}</p>}
              {item.precio && <p className="precio">{item.precio}</p>}
            </div>
          {onAddToCart && (
  <button
    className="add-to-cart-button"
    onClick={() => {
      onAddToCart(item);
      navigate('/detalle-producto', { state: { producto: item } });
    }}
  >
    🛒 Añadir al carrito
  </button>
)}
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
