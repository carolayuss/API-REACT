import React from "react";

const ProductoList = ({ productos, onDelete, onEdit }) => {
  return (
    <div className="row">
      {productos.map((producto) => (
        <div key={producto.id_producto} className="col-md-4 mb-4">
          <div className="card h-100 shadow">
            {producto.imagen && (
              <img
                src={`http://localhost:8080/uploads/${producto.imagen}`}
                alt={producto.nombre}
                className="card-img-top mx-auto d-block"
                style={{
                  maxWidth: "120px",
                  maxHeight: "120px",
                  objectFit: "contain",
                  paddingTop: "10px",
                }}
              />
            )}
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text text-muted">{producto.descripcion}</p>
              <p>
                <strong>${producto.precio}</strong> | Stock: {producto.stock}
              </p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <button
                onClick={() => onEdit(producto)}
                className="btn btn-sm btn-outline-info"
              >
                Editar
              </button>
              <button
                onClick={() => onDelete(producto.id_producto)}
                className="btn btn-sm btn-outline-warning"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductoList;
