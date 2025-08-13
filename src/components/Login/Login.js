import React, { useState, useContext } from 'react';
import AuthService from '../../services/AuthService';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const { setUser } = useContext(UserContext);  // <-- Aquí es donde falla si no hay provider
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.login(email, contrasena);
      setUser(response.data); // Esto debería funcionar correctamente
      navigate('/home');
    } catch (err) {
      setError(err.response?.data || 'Error en login');
    }
  };

  return (
    <div className="login-wrapper">
      {/* Formulario */}
    </div>
  );
}

export default Login;




