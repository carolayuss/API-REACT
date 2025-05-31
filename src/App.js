import React, { useEffect, useState } from 'react';
import ProductoForm from './components/Producto/ProductoForm';
import ProductoList from './components/Producto/ProductoList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [productos, setProductos] = useState([]);
  const [productoActual, setProductoActual] = useState(null); 

  const fetchProductos = async () => {
    const res = await fetch('http://localhost:8080/api/producto');
    const data = await res.json();
    console.log("Productos desde backend:", data);
    setProductos(data);
  };

const addOrUpdateProducto = async (producto) => {
  console.log("Producto recibido para enviar al backend:", producto);
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

  return (
  <div className="container mt-4">
  <h1 className="text-center mb-4 text-primary">CREACIONES MYPIC</h1>
  <div className="row">
    <div className="col-md-5">
      <ProductoForm onSubmit={addOrUpdateProducto} productoInicial={productoActual} />
    </div>
    <div className="col-md-7">
      <ProductoList productos={productos} onDelete={deleteProducto} onEdit={editProducto} />
    </div>
  </div>
</div>
  );
};

export default App;


