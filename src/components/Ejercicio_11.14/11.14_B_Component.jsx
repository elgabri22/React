import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  
  const handleAddProduct = () => {
    if (name && price) {
      onAddProduct(name, parseFloat(price));
      setName('');
      setPrice('');
    }
  };

  return (
    <div className="add-product-form">
      <input
        type="text"
        placeholder="Nombre del producto"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAddProduct}>Añadir Producto</button>
    </div>
  );
};

export default AddProductForm;
