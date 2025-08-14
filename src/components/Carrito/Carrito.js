

    import React from 'react'

function Carrito({ cart, onRemove }) {
  return (
    <div className="cart">
      <h2>Tu carrito</h2>
      {cart.length === 0
        ? <p>Tu carrito está vacío</p>
        : cart.map(item => (
            <div key={item.nombre} className="cart-item">
              <span>{item.nombre} x {item.quantity}</span>
              <button onClick={() => onRemove(item.nombre)}>Eliminar</button>
            </div>
          ))}
    </div>
  );
}


export default Carrito