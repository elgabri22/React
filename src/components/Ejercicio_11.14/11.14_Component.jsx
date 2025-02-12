import React from 'react';

const CartItem = ({ product, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="cart-item">
      <span className="cart-item__name">{product.name}</span>
      <span className="cart-item__price">${product.price}</span>
      <span className="cart-item__quantity">Cantidad: {product.quantity}</span>
      <button onClick={() => onIncrease(product.id)}>+</button>
      <button onClick={() => onDecrease(product.id)}>-</button>
      <button onClick={() => onRemove(product.id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
