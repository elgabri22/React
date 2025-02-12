import React, { useState } from 'react';
import './ToggleText.css'; // Importamos el archivo CSS con BEM

const ToggleText = () => {
  // Estado para controlar la visibilidad del texto
  const [isVisible, setIsVisible] = useState(false);

  // Función para alternar la visibilidad del texto
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="toggle-text">
      {/* Botón para mostrar u ocultar el texto */}
      <button className="toggle-text__button" onClick={toggleVisibility}>
        {isVisible ? 'Ocultar texto' : 'Mostrar texto'}
      </button>

      {/* Texto que se muestra u oculta */}
      {isVisible && <p className="toggle-text__content">Este es el texto que se muestra u oculta.</p>}
    </div>
  );
};

export default ToggleText;
