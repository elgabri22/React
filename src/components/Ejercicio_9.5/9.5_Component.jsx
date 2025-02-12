import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './9.5_Style.css';  // Importamos el archivo CSS para los estilos

const AccordionItem = ({ title, children }) => {
  // Estado para controlar si el contenido está desplegado
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado de apertura y cierre
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      {/* Título, al hacer clic se despliega o repliega el contenido */}
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2>{title}</h2>
      </div>

      {/* Cuerpo, se muestra solo si isOpen es true */}
      {isOpen && (
        <div className="accordion-body">
          <div className="accordion-content">{children}</div>
        </div>
      )}
    </div>
  );
};

// PropTypes para asegurar que las props sean correctas
AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AccordionItem;
