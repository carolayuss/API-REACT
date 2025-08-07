import React, { useState, useEffect, useContext } from 'react';
import logo from '../../assets/logo.PNG';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';


export const Navbar = () => {
  const { usuario, setUsuario } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [categorias, setCategorias] = useState([]);
  

  useEffect(() => {
    fetch('http://localhost:8080/api/categoria')
      .then(res => res.json())
      .then(data => {
        setCategorias(Array.isArray(data) ? data : []);
      })
      .catch(err => console.error("Error cargando categorías:", err));

    // Verificamos si hay usuario logueado en localStorage
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado));
    } else {
      setUsuario(null);
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar-logo" style={{ cursor: 'pointer' }} />
        </Link>
      </div>

      <div className={`navbar-center ${menuOpen ? 'open' : ''}`}>
        <ul className="navbar-links">
          {!usuario && (
            <>
              <li><Link to="/login">Ingresar</Link></li>
              <li><Link to="/registro">REGISTRATE</Link></li>
            </>
          )}

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
        {usuario ? (
          <>
            <li id="pedido"><Link to="/seguir-pedido">SEGUIR PEDIDO</Link></li>
            <li><button onClick={() => {
              localStorage.removeItem('usuario');
              setUsuario(null);
              window.location.href = '/'; // refrescar o redirigir a home al cerrar sesión
            }}>Cerrar sesión</button></li>
          </>
        ) : (
          <li><Link to="/">Inicio</Link></li>
        )}
      </div>
    </nav>
  );
};





