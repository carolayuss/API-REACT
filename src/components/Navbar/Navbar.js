import React, {useEffect, useState } from 'react';
import logo from '../../assets/logo.PNG';
import './Navbar.css';
import { Link } from 'react-router-dom';


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [categorias, setCategorias] = useState([]);

useEffect(() => {
  fetch('http://localhost:8080/api/categoria')
    .then(res => res.json())
    .then(data => {
      console.log("Respuesta del backend:", data); 
       setCategorias(Array.isArray(data) ? data : []);
    })
    .catch(err => console.error("Error cargando categorías:", err));
}, []);

  return (
    <nav className="navbar">
      {/*logo + Icono*/}
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>

      <div className={`navbar-center ${menuOpen ? 'open' : ''}`}>
        <ul className="navbar-links">
          <Link to="/login">Ingresar</Link>
          <Link to="/registrate">REGISTRATE</Link>
          

<li className="dropdown">
  <a href="#" onClick={(e) => { e.preventDefault(); setDropdownOpen(!dropdownOpen); }}>
    CATEGORÍAS ⌄
  </a>

{dropdownOpen && (
  <ul className="dropdown-menu">
    {categorias.map(cat => {
      const id = cat.nombre.toLowerCase().replace(/\s+/g, '-');
      return (
        <li key={cat.id_categoria}>
          <button
            onClick={() => {
              const el = document.getElementById(id);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                setDropdownOpen(false);
              }
            }}
            style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
          >
            {cat.nombre}
          </button>
        </li>
      );
    })}
  </ul>
)}
</li>
   </ul>
      </div>
        <div className="navbar-icons">
           <li id="pedido"><Link to="/seguir-pedido">SEGUIR PEDIDO</Link></li>
        </div>
    </nav>
  );
};



