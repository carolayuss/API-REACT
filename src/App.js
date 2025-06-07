import React, { useEffect, useState } from 'react';
import ProductoForm from './components/Producto/ProductoForm';
import ProductoList from './components/Producto/ProductoList';
import ClienteForm from './components/Cliente/ClienteForm';
import PromocionForm from './components/Promocion/PromocionForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [productos, setProductos] = useState([]);
  const [productoActual, setProductoActual] = useState(null);

  // PRODUCTO
  const fetchProductos = async () => {
    const res = await fetch('http://localhost:8080/api/producto');
    const data = await res.json();
    setProductos(data);
  };

  const addOrUpdateProducto = async (producto) => {
    try {
      if (!producto.categoria || !producto.categoria.id_categoria) {
        producto.categoria = { id_categoria: 1 };
      } else {
        producto.categoria.id_categoria = Number(producto.categoria.id_categoria);
      }

      producto.precio = Number(producto.precio);
      producto.stock = Number(producto.stock);

      const response = producto.id_producto
        ? await fetch(`http://localhost:8080/api/producto/${producto.id_producto}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(producto),
          })
        : await fetch('http://localhost:8080/api/producto', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(producto),
          });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error en servidor: ${response.status} - ${errorText}`);
      }

      setProductoActual(null);
      fetchProductos();
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  };

  const deleteProducto = async (id) => {
    await fetch(`http://localhost:8080/api/producto/${id}`, {
      method: 'DELETE',
    });
    fetchProductos();
  };

  const editProducto = (producto) => {
    setProductoActual(producto);
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  // CLIENTE
  const handleClienteSubmit = async (cliente) => {
    try {
      await fetch('http://localhost:8080/api/cliente', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cliente),
      });
      alert("Cliente creado exitosamente");
    } catch (error) {
      console.error("Error al crear cliente:", error);
    }
  };

  //PROMOCIÓN
  const handlePromocionSubmit = async (promocion) => {
    try {
      await fetch('http://localhost:8080/api/promocion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(promocion),
      });
      alert("Promoción creada exitosamente");
    } catch (error) {
      console.error("Error al crear promoción:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4 text-info">CREACIONES MYPIC</h1>

      {/*PRODUCTOS */}
      <div className="mb-5">
        <h2 className="mb-3 text-info">PRODUCTOS</h2>
        <ProductoList productos={productos} onDelete={deleteProducto} onEdit={editProducto} />
        <div className="mt-4">
          <ProductoForm onSubmit={addOrUpdateProducto} productoInicial={productoActual} />
        </div>
      </div>

      <div className="row">
        {/* CLIENTE */}
        <div className="col-md-6 mb-4">
          <h2 className="mb-3 text-info">Clientes</h2>
          <ClienteForm onSubmit={handleClienteSubmit} />
        </div>

        {/*PROMOCIÓN */}
        <div className="col-md-6 mb-4">
          <h2 className="mb-3 text-info">Promociones</h2>
          <PromocionForm onSubmit={handlePromocionSubmit} />
        </div>
      </div>
    </div>
  );
};

export default App;



