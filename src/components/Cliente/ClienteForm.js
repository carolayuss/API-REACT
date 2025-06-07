import React, { useEffect, useState } from "react";

const ClienteForm = ({ onSubmit, clienteInicial }) => {
  const [cliente, setCliente] = useState({
    id_cliente: "",
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
  });

  useEffect(() => {
    if (clienteInicial) {
      setCliente({
        id_cliente: clienteInicial.id_cliente || "",
        nombre: clienteInicial.nombre || "",
        email: clienteInicial.email || "",
        telefono: clienteInicial.telefono || "",
        direccion: clienteInicial.direccion || "",
      });
    }
  }, [clienteInicial]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente({
      ...cliente,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const clienteAEnviar = { ...cliente };

    onSubmit(clienteAEnviar);

    
    setCliente({
      id_cliente: "",
      nombre: "",
      email: "",
      telefono: "",
      direccion: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3 shadow">
      <h2 className="card-title text-center text-info">
        {clienteInicial ? "Editar" : "Crear"} Cliente
      </h2>

      <input
        name="id_cliente"
        className="form-control mb-2"
        placeholder="ID Cliente"
        value={cliente.id_cliente}
        onChange={handleChange}
        required
      />

      <input
        name="nombre"
        className="form-control mb-2"
        placeholder="Nombre"
        value={cliente.nombre}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        type="email"
        className="form-control mb-2"
        placeholder="Email"
        value={cliente.email}
        onChange={handleChange}
        required
      />

      <input
        name="telefono"
        className="form-control mb-2"
        placeholder="Teléfono"
        value={cliente.telefono}
        onChange={handleChange}
        required
      />

      <input
        name="direccion"
        className="form-control mb-3"
        placeholder="Dirección"
        value={cliente.direccion}
        onChange={handleChange}
        required
      />

      <button type="submit" className="btn btn-outline-info w-100">
        {clienteInicial ? "Actualizar" : "Crear"}
      </button>
    </form>
  );
};

export default ClienteForm;