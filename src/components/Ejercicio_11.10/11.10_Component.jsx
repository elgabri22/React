import React, { useState } from 'react';
import './ColorSelector.css'; // Importamos los estilos con BEM

const ColorSelector = () => {
  // Estado para el color seleccionado
  const [selectedColor, setSelectedColor] = useState(null);

  // Lista de colores disponibles
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD'];

  // Función para manejar la selección de un color
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="color-selector">
      <h2 className="color-selector__title">Selecciona tu color favorito</h2>
      <div className="color-selector__options">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color-selector__option ${
              selectedColor === color ? 'color-selector__option--selected' : ''
            }`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorSelect(color)}
          />
        ))}
      </div>
      {selectedColor && (
        <p className="color-selector__selected-color">
          Tu color favorito es: <span style={{ color: selectedColor }}>{selectedColor}</span>
        </p>
      )}
    </div>
  );
};

export default ColorSelector;
