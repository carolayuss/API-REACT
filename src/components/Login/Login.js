import React, { useState, useContext } from 'react';
import AuthService from '../../services/AuthService';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.login(email, contrasena);
      setUser(response.data);
      navigate('/home');
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (err) {
      setError(err.response?.data || 'Error en login');
    }
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleLogin} className="login-form">
        <h2 className="text-center text-info">{error ? 'Error' : 'Iniciar sesión'}</h2>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="contrasena">Contraseña</label>
          <input
            id="contrasena"
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            placeholder="Contraseña"
            required
          />
        </div>

        <button type="submit" className="btn btn-outline-info w-100">
          Ingresar
        </button>

        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}

export default Login;





