import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ value, max }) => {
  // Calculamos el porcentaje de progreso
  const progress = (value / max) * 100;

  // Definimos el estilo para la barra de progreso
  const progressBarStyle = {
    width: `${progress}%`, // el porcentaje de la barra
    height: '100%', // altura de la barra
    backgroundColor: '#4caf50', // color de la barra (puedes cambiarlo)
    textAlign: 'center', // centramos el texto
    lineHeight: '30px', // alineamos verticalmente el texto
    color: '#fff', // color del texto
    borderRadius: '5px', // bordes redondeados
    fontWeight: 'bold',
  };

  // Estilo contenedor
  const containerStyle = {
    width: '100%', // el contenedor debe ocupar el 100% del ancho
    height: '30px', // altura de la barra de progreso
    backgroundColor: '#e0e0e0', // color de fondo de la barra
    borderRadius: '5px', // bordes redondeados
    overflow: 'hidden', // aseguramos que la barra de progreso no sobresalga
  };

  return (
    <div style={containerStyle}>
      <div style={progressBarStyle}>{progress}%</div>
    </div>
  );
};

// Definimos los PropTypes para las props 'value' y 'max'
ProgressBar.propTypes = {
  value: PropTypes.number.isRequired, // El valor actual del progreso
  max: PropTypes.number.isRequired,   // El valor máximo del progreso
};

export default ProgressBar;
