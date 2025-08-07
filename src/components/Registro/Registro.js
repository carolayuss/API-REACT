import React, { useState } from 'react';
import './Registro.css';
import { useNavigate } from 'react-router-dom';



function Registro() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cedula: '',
    nombre: '',
    telefono: '',
    direccion: '',
    email: '',
    contrasena: '',
  });

const esContrasenaSegura = (contrasena) => {
  return contrasena && contrasena.length >= 8;
};

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:8080/api/clientes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!esContrasenaSegura(formData.contrasena)) {
  alert('La contraseña debe tener al menos 8 caracteres.');
  return;
}

    // Si quieres puedes obtener la respuesta en JSON
    const data = await response.json();
    console.log('Usuario creado:', data);

    // Aquí rediriges a la página inicio
    navigate('/');

  } catch (error) {
    console.error(error);
    alert('Ocurrió un error al registrar el usuario');
  }
}

  return (
    <div className="register-container">
      <h2>Formulario de Registro</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <input type="text" name="cedula" placeholder="Cédula" value={formData.cedula} onChange={handleChange} required />
        <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
        <input type="tel" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} required />
        <input type="text" name="direccion" placeholder="Dirección" value={formData.direccion} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} required />
        <input type="password" name="contrasena" placeholder="Contraseña" value={formData.contrasena} onChange={handleChange} required />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;

