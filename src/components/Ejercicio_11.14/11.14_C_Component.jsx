import React, { useState } from 'react';
import CartItem from './CartItem';
import AddProductForm from './AddProductForm';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  // Función para añadir un producto al carrito
  const addProduct = (name, price) => {
    const newProduct = {
      id: Date.now(),
      name,
      price,
      quantity: 1,
    };
    setCart([...cart, newProduct]);
  };

  // Función para aumentar la cantidad de un producto
  const increaseQuantity = (id) => {
    setCart(
      cart.map(product =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  // Función para disminuir la cantidad de un producto
  const decreaseQuantity = (id) => {
    setCart(
      cart.map(product =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  // Función para eliminar un producto del carrito
  const removeProduct = (id) => {
    setCart(cart.filter(product => product.id !== id));
  };

  return (
    <div className="shopping-cart">
      <h1>Carrito de Compras</h1>
      <AddProductForm onAddProduct={addProduct} />
      <div className="cart-items">
        {cart.map(product => (
          <CartItem
            key={product.id}
            product={product}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
            onRemove={removeProduct}
          />
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default ShoppingCart;
