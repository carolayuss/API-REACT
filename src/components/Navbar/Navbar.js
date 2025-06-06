import React from 'react'

const Navbar = () => {
     return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.PNG" alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar