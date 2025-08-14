import React from 'react'

function Carrito({ cart, onRemove }) {
  return (
    <div className="cart">
      <h2>Tu carrito</h2>
      {cart.length === 0
        ? <p>Tu carrito está vacío</p>
        : cart.map(item => (
            <div key={item.id} className="cart-item">
              <span>{item.name} x {item.quantity}</span>
              <button onClick={() => onRemove(item.id)}>Eliminar</button>
            </div>
          ))}
    </div>
  );
}

export default Carrito