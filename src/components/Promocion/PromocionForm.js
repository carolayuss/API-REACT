import React, { useEffect, useState } from "react";

const PromocionForm = ({ onSubmit, promocionInicial }) => {
  const [promocion, setPromocion] = useState({
    id_promocion: "",
    fecha_inicio: "",
    fecha_fin: "",
    nombre: "",
    descripcion: "",
    tipo_descuento: "",
    valor_descuento: "",
  });

  useEffect(() => {
    if (promocionInicial) {
      setPromocion({
        id_promocion: promocionInicial.id_promocion || "",
        fecha_inicio: promocionInicial.fecha_inicio || "",
        fecha_fin: promocionInicial.fecha_fin || "",
        nombre: promocionInicial.nombre || "",
        descripcion: promocionInicial.descripcion || "",
        tipo_descuento: promocionInicial.tipo_descuento || "",
        valor_descuento: promocionInicial.valor_descuento || "",
      });
    }
  }, [promocionInicial]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPromocion({ ...promocion, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const promocionAEnviar = { ...promocion };
    onSubmit(promocionAEnviar);

    // limpiar formulario
    setPromocion({
      id_promocion: "",
      fecha_inicio: "",
      fecha_fin: "",
      nombre: "",
      descripcion: "",
      tipo_descuento: "",
      valor_descuento: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3 shadow">
      <h2 className="card-title text-center text-info">
        {promocionInicial ? "Editar" : "Crear"} Promocion
      </h2>

      <input
        name="id_promocion"
        className="form-control mb-2"
        placeholder="ID Promoción"
        value={promocion.id_promocion}
        onChange={handleChange}
        required
      />

      <input
        name="fecha_inicio"
        type="date"
        className="form-control mb-2"
        value={promocion.fecha_inicio}
        onChange={handleChange}
        required
      />

      <input
        name="fecha_fin"
        type="date"
        className="form-control mb-2"
        value={promocion.fecha_fin}
        onChange={handleChange}
        required
      />

      <input
        name="nombre"
        className="form-control mb-2"
        placeholder="Nombre de la promoción"
        value={promocion.nombre}
        onChange={handleChange}
        required
      />

      <textarea
        name="descripcion"
        className="form-control mb-2"
        placeholder="Descripción"
        value={promocion.descripcion}
        onChange={handleChange}
      />

      <select
        name="tipo_descuento"
        className="form-select mb-2"
        value={promocion.tipo_descuento}
        onChange={handleChange}
        required
      >
        <option value="">Selecciona tipo de descuento</option>
        <option value="PORCENTAJE">Porcentaje (%)</option>
        <option value="FIJO">Valor fijo ($)</option>
      </select>

      <input
        name="valor_descuento"
        type="number"
        className="form-control mb-3"
        placeholder="Valor del descuento"
        value={promocion.valor_descuento}
        onChange={handleChange}
        required
      />

      <button type="submit" className="btn btn-outline-info w-100">
        {promocionInicial ? "Actualizar" : "Crear"}
      </button>
    </form>
  );
};

export default PromocionForm;
