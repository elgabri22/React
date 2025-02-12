import React from 'react';
import PropTypes from 'prop-types';

const DeportesList = ({ deportesOlimpicos }) => {
  return (
    <ol>
      {deportesOlimpicos.map((deporte, index) => (
        <li key={index}>
          <strong>{deporte.nombre}</strong><br />
          Popularidad: {deporte.popularidad}<br />
          De equipo: {deporte.esDeEquipo ? 'Sí' : 'No'}
        </li>
      ))}
    </ol>
  );
};

// Definimos los prop types para el componente DeportesList
DeportesList.propTypes = {
  deportesOlimpicos: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      categoria: PropTypes.string.isRequired,
      popularidad: PropTypes.number.isRequired,
      esDeEquipo: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default DeportesList;


