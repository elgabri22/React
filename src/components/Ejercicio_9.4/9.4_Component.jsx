import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './9.4_Style.css'; // Importamos el archivo CSS para los estilos

const TabMenu = ({ tabs }) => {
  // Estado para almacenar el ID de la pestaña seleccionada, por defecto será la primera
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  // Función para manejar el cambio de pestaña
  const handleTabClick = (tabId) => {
    setSelectedTabId(tabId);
  };

  // Encontramos el contenido de la pestaña seleccionada
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div className="tab-menu">
      {/* Botonera de pestañas */}
      <div className="tab-buttons">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${tab.id === selectedTabId ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Contenido de la pestaña seleccionada */}
      <div className="tab-content">
        <div dangerouslySetInnerHTML={{ __html: selectedTab.content }} />
      </div>
    </div>
  );
};

// Definir los prop types
TabMenu.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TabMenu;
