import React, { useEffect, useState } from "react";

const ProductoForm = ({ onSubmit, productoInicial }) => {
  const [producto, setProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    stock: "",
    imagen: "",
    categoria: { id_categoria: 10 }, 
  });

  useEffect(() => {
    if (productoInicial) {
    setProducto({
      nombre: productoInicial.nombre || '',
      descripcion: productoInicial.descripcion || '',
      precio: productoInicial.precio !== undefined ? productoInicial.precio : '',
      stock: productoInicial.stock !== undefined ? productoInicial.stock : '',
      imagen: productoInicial.imagen || '', 
      categoria: productoInicial.categoria || { id_categoria: 10 },
      id_producto: productoInicial.id_producto, 
    });
  }
}, [productoInicial]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "categoria.id_categoria") {
      setProducto({
        ...producto,
        categoria: { id_categoria: parseInt(value) },
      });
    } else {
      setProducto({
        ...producto,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productoAEnviar = {...producto}
    if (!producto.id_producto) {
      delete productoAEnviar.id_producto; 
    }
    console.log("Producto a enviar:", productoAEnviar);
    onSubmit(productoAEnviar);

 
    setProducto({
      nombre: "",
      descripcion: "",
      precio: "",
      stock: "",
      id_categoriamagen: "",
      categoria: { id_categoria: 1 },
    });
  };

  console.log("Valor de imagen:", producto.imagen);
  return (
   <form onSubmit={handleSubmit} className="card p-3 shadow">
  <h2 className="card-title text-center">{producto.id_producto ? "Editar" : "Crear"} Producto</h2>

  <input
    name="nombre"
    className="form-control mb-2"
    placeholder="Nombre"
    value={producto.nombre ?? ''}
    onChange={handleChange}
    required
  />

  <input
    name="descripcion"
    className="form-control mb-2"
    placeholder="Descripción"
    value={producto.descripcion ?? ''}
    onChange={handleChange}
    required
  />

  <input
    name="precio"
    type="number"
    className="form-control mb-2"
    placeholder="Precio"
    value={producto.precio ?? ''}
    onChange={handleChange}
    required
  />

  <input
    name="stock"
    type="number"
    className="form-control mb-2"
    placeholder="Stock"
    value={producto.stock ?? ''}
    onChange={handleChange}
    required
  />

  {producto.imagen && (
    <div className="mb-3 text-center">
      <label className="form-label">Imagen actual:</label><br />
      <img
        src={`http://localhost:8080/uploads/${producto.imagen}`}
        alt="Imagen del producto"
        style={{ maxWidth: '200px', height: 'auto', borderRadius: '8px' }}
      />
    </div>
  )}

  <select
    name="categoria.id_categoria"
    className="form-select mb-3"
    value={producto.categoria.id_categoria}
    onChange={handleChange}
  >
    <option value={10}>Pulseras</option>
    <option value={20}>Collares</option>
    <option value={30}>Aretes</option>
    <option value={40}>Accesorios</option>
    <option value={50}>Morrales</option>
    <option value={60}>Decoraciones</option>
  </select>

  <button type="submit" className="btn btn-success w-100">
    {producto.id_producto ? "Actualizar" : "Crear"}
  </button>
</form>

  );
};

export default ProductoForm;
