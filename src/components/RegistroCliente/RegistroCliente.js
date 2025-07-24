import React, { useState } from 'react';
import axios from 'axios';
import './RegistroCliente.css';
import { Link } from 'react-router-dom';

const RegistroCliente = () => {
  const [cliente, setCliente] = useState({
    cedula: '',
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    contrasena: '',
    confirmarContrasena: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (cliente.contrasena !== cliente.confirmarContrasena) {
      setError('Las contraseñas no coinciden');
      return;
    }
    const clienteData = { ...cliente };
    delete clienteData.confirmarContrasena;

    try {
      const response = await axios.post('http://localhost:8080/api/clientes', clienteData);
      alert('Cliente creado exitosamente');
      setCliente({
        cedula: '',
        nombre: '',
        email: '',
        telefono: '',
        direccion: '',
        contrasena: '',
        confirmarContrasena: ''
      });
    } catch (err) {
      console.error('Error al registrar cliente:', err.response?.data || err.message);
      setError('Error al registrar el cliente');
    }
  };

  return (
    <div className="login-container">
      <h2>Registro de Cliente</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="cedula"
          placeholder="Cédula"
          value={cliente.cedula}
          onChange={handleChange}
          required
          autoComplete="off"
        />
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={cliente.nombre}
          onChange={handleChange}
          required
          autoComplete="name"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={cliente.email}
          onChange={handleChange}
          required
          autoComplete="email"
        />
        <input
          type="text"
          name="telefono"
          placeholder="Teléfono"
          value={cliente.telefono}
          onChange={handleChange}
          required
          autoComplete="tel"
        />
        <input
          type="text"
          name="direccion"
          placeholder="Dirección"
          value={cliente.direccion}
          onChange={handleChange}
          required
          autoComplete="street-address"
        />
        <input
          type="password"
          name="contrasena"
          placeholder="Contraseña"
          value={cliente.contrasena}
          onChange={handleChange}
          required
          autoComplete="new-password"
        />
        <input
          type="password"
          name="confirmarContrasena"
          placeholder="Confirmar Contraseña"
          value={cliente.confirmarContrasena}
          onChange={handleChange}
          required
          autoComplete="new-password"
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Registrar</button>
      </form>
    <Link to="/" className="volver-home-btn">
  ← Volver al inicio
</Link>
    </div>
  );
};

export default RegistroCliente;

