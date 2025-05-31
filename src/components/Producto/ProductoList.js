import React from "react";

const ProductoList = ({ productos, onDelete, onEdit }) => {
  return (
    <div className="card shadow p-3">
      <h2 className="card-title text-center">Lista de Productos</h2>
      <ul className="list-group">
        {productos.map((producto) => (
          <li
            key={producto.id_producto}
            className="list-group-item d-flex align-items-center justify-content-between"
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {producto.imagen && (
                <img
                  src={`http://localhost:8080/uploads/${producto.imagen}`}
                  alt={producto.nombre}
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
              )}
              <div>
                <strong>{producto.nombre}</strong>
                <br />
                <p
                  className="text-muted mb-1"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxHeight: "3.6em",
                  }}
                >
                  {producto.descripcion}
                </p>
                ${producto.precio} - Stock: {producto.stock}
              </div>
            </div>
            <div className="d-flex flex-column align-items-end justify-content-center">
              <button
                onClick={() => onEdit(producto)}
                className="btn btn-warning btn-sm mb-2"
              >
                Editar
              </button>
              <button
                onClick={() => onDelete(producto.id_producto)}
                className="btn btn-danger btn-sm"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductoList;
