import React, { useRef } from "react";
import "./ProductSlider.css";

const ProductSlider = ({ images }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    console.log("Desplazando a la izquierda");
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    console.log("Desplazando a la derecha");
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
              <p className="nombre">{item.nombre}</p>
              <p className="descripcion">{item.descripcion}</p>
              <p className="stock">{item.stock}</p>
              <p className="precio">{item.precio}</p>
              <a href="pedido" className="add-to-cart" title="Carrito">🛒 Añadir</a>
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

