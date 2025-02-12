import React, { useState } from 'react';
import './FavoriteList.css'; // Importamos los estilos con BEM

const FavoriteList = () => {
  // Estado para el elemento favorito seleccionado
  const [selectedItem, setSelectedItem] = useState(null);

  // Lista de elementos (pueden ser nombres, productos, etc.)
  const items = ['Manzana', 'Banana', 'Naranja', 'Uva', 'Fresa'];

  // Función para manejar la selección de un elemento como favorito
  const handleSelectFavorite = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="favorite-list">
      <h2 className="favorite-list__title">Selecciona tu elemento favorito</h2>
      <ul className="favorite-list__items">
        {items.map((item, index) => (
          <li
            key={index}
            className={`favorite-list__item ${
              selectedItem === item ? 'favorite-list__item--selected' : ''
            }`}
            onClick={() => handleSelectFavorite(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      {selectedItem && (
        <p className="favorite-list__selected-item">
          Tu elemento favorito es: <strong>{selectedItem}</strong>
        </p>
      )}
    </div>
  );
};

export default FavoriteList;
