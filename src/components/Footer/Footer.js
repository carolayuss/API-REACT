import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h2>INFORMACIÓN DE INTERÉS</h2>
        <p>Política y privacidad</p>
        <p>Compras al por mayor</p>
        <p>Medios de pago</p>
        <p>Tiempos de entrega</p>
        <p>Quejas y reclamos</p>
      </div>

      <div className="footer-contact">
        <p>CORREO: <a href="mailto:carolayuss@gmail.com">carolayuss@gmail.com</a></p>
        <p>CRA 105 XX - XX Bogotá</p>

        <p>
  <a
    href="https://wa.me/573156964281"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-link"
  >
    <img
      src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
      alt="WhatsApp"
      className="whatsapp-icon"
    />
    Escríbenos por WhatsApp
  </a>
</p>
      </div>
    </footer>

    
  );
};

export default Footer;
