import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.PNG";
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/categoria")
      .then((res) => res.json())
      .then((data) => {
        setCategorias(Array.isArray(data) ? data : []);
      })
      .catch((err) => console.error("Error cargando categorías:", err));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    navigate("/"); // Redirige al inicio tras cerrar sesión
  };

 return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
      </div>

      <div className={`navbar-center ${menuOpen ? "open" : ""}`}>
        <ul className="navbar-links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/login">Ingresar</Link>
          </li>
          <li>
            <Link to="/registro">REGÍSTRATE</Link>
          </li>
          <li className="dropdown">
            <button onClick={() => setDropdownOpen(!dropdownOpen)}>
              CATEGORÍAS ⌄
            </button>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                {categorias.map((cat) => (
                  <li key={cat.id_categoria}>
                    <a
                      href={`#${cat.nombre.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={() => setDropdownOpen(false)}
                      className="dropdown-item"
                    >
                      {cat.nombre}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>

      <div className="navbar-icons">
        {localStorage.getItem("usuario") ? (
          <ul>
            <li>
              <span>
                Bienvenido, {JSON.parse(localStorage.getItem("usuario")).nombre}
              </span>
            </li>
            <li>
              <Link to="/seguir-pedido">SEGUIR PEDIDO</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </li>
          </ul>
        ) : null}
      </div>
    </nav>
  );
};

